import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/types/types";

interface Props {
  post: Post;
}

const BlogCard = ({ post }: Props) => {
  return (
    <div className="bg-card border-2 border-border flex flex-col group h-full overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden border-b-2 border-border">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge className="rounded-none border-2 border-primary/30 text-primary bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground font-medium">
              {post.date.toLocaleDateString()}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors leading-[1.2] line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center pt-4 border-t-2 border-border">
            <div className="relative w-10 h-10 border-2 border-border bg-muted/50 flex items-center justify-center flex-shrink-0 mr-3">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt={post.author}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold text-foreground block">
                {post.author}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
