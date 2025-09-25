import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { BlogPost } from "./BlogPostCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HorizontalCarousel } from "./HorizontalCarousel";
import { mockBlogPosts } from "../data/blogPosts";

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

export function BlogPostView({ post, onBack }: BlogPostViewProps) {
  // Get related posts (exclude current post)
  const relatedPosts = mockBlogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-gradient-to-t from-background via-background/20 to-transparent">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.imageUrl})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        
        {/* Content Overlay */}
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 lg:px-6 pb-12">
            <div className="max-w-4xl space-y-4">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="container mx-auto px-4 lg:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Social Sharing */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none prose-invert">
            <div className="space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-muted-foreground border-border hover:border-primary">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Author Section */}
          <div className="mt-8 bg-card/50 rounded-lg p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shrink-0">
                <User className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">{post.author}</h4>
                <p className="text-sm text-muted-foreground">Technology Writer & Developer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Passionate about emerging technologies and their impact on society. 
                  Writing about web development, AI, and digital innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 mt-8">
          <HorizontalCarousel
            title="You might also like"
            posts={relatedPosts}
            onPostClick={(selectedPost) => {
              // This will be handled by the parent App component
              onBack();
              // Small delay to ensure state updates properly
              setTimeout(() => {
                window.location.hash = selectedPost.id;
              }, 100);
            }}
          />
        </section>
      )}
    </div>
  );
}