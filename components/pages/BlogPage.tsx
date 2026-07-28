import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogMasthead } from "@/components/blog/BlogMasthead";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogEmpty } from "@/components/blog/BlogEmpty";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider";
import type { BlogCopy } from "@/locales/types";

function hasPublishedBlogContent(copy: BlogCopy) {
  const featuredOk = Boolean(copy.featured.href) && copy.featured.href !== "#";
  const secondaryOk = copy.secondary.some(
    (post) => post.href && post.href !== "#",
  );
  const postsOk = copy.posts.some((post) => post.href && post.href !== "#");
  return featuredOk || secondaryOk || postsOk;
}

export function BlogPage({ copy }: { copy: BlogCopy }) {
  const published = hasPublishedBlogContent(copy);

  return (
    <PageCopyProvider copy={copy}>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"
      >
        <BlogMasthead />
        {published ? (
          <>
            <BlogFeatured />
            <BlogGrid />
          </>
        ) : (
          <BlogEmpty />
        )}
      </main>
      <Footer cta={false} />
    </PageCopyProvider>
  );
}
