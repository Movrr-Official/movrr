import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/types";

interface Props {
  post: Post;
}

const FeaturedPost = ({ post }: Props) => {
  return (
    <section className="w-full bg-card border-b-2 border-border py-12 md:py-16">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Link href={`/blog/${post.slug}`} className="group">
            <div className="grid grid-cols-12 gap-px bg-border">
              {/* Image Column */}
              <div className="col-span-12 lg:col-span-6 bg-card border-2 border-border p-0 overflow-hidden">
                <div className="relative h-[300px] lg:h-[500px] w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              {/* Content Column */}
              <div className="col-span-12 lg:col-span-6 bg-card border-2 border-border p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Badge className="rounded-none border-2 border-primary/30 text-primary bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 group-hover:text-primary transition-colors leading-[1.1]">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center mb-8 pb-8 border-b-2 border-border">
                  <div className="relative w-12 h-12 border-2 border-border bg-muted/50 flex items-center justify-center flex-shrink-0 mr-4">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={post.author}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {post.date.toLocaleDateString()} · {post.readTime} min read
                    </p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-bold text-sm w-fit"
                >
                  Read Article
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
