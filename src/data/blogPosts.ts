export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  category: string;
  readingTime: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  content: string;
  keywords?: string[];
}

export const PUBLISHED_BLOG_POSTS: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return PUBLISHED_BLOG_POSTS.find(
    (post) => post.slug === normalized || post.slug === `/blog/${normalized}` || post.slug === `${normalized}`
  );
}
