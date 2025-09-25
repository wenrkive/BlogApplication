import { BlogPostCard, BlogPost } from "./BlogPostCard";

interface PostsGridProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  title: string;
  showFeatured?: boolean;
  emptyMessage?: {
    title: string;
    subtitle: string;
  };
}

export function PostsGrid({ 
  posts, 
  onPostClick, 
  title, 
  showFeatured = false,
  emptyMessage 
}: PostsGridProps) {
  if (posts.length === 0 && emptyMessage) {
    return (
      <section>
        <h2 className="text-2xl mb-6">{title}</h2>
        <div className="text-center py-12 text-muted-foreground">
          <p>{emptyMessage.title}</p>
          <p className="text-sm mt-2">{emptyMessage.subtitle}</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={showFeatured ? "mb-12" : ""}>
      <h2 className="text-2xl mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            onClick={onPostClick}
            featured={showFeatured}
          />
        ))}
      </div>
    </section>
  );
}