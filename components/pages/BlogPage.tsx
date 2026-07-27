import { Navbar } from "@/components/layout/Navbar"; import { Footer } from "@/components/layout/Footer";
import { BlogMasthead } from "@/components/blog/BlogMasthead"; import { BlogFeatured } from "@/components/blog/BlogFeatured"; import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageCopyProvider } from "@/components/i18n/PageCopyProvider"; import type { BlogCopy } from "@/locales/types";
export function BlogPage({ copy }: { copy: BlogCopy }) { return <PageCopyProvider copy={copy}><Navbar /><main id="main-content" className="min-h-screen overflow-x-hidden bg-movrr-bg-canvas"><BlogMasthead /><BlogFeatured /><BlogGrid /></main><Footer cta={false} /></PageCopyProvider>; }
