import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
  featured?: boolean;
}

export function BlogPostCard({ post, onClick, featured = false }: BlogPostCardProps) {
  return (
    <Card 
      className={`cursor-pointer hover:shadow-md transition-all duration-200 overflow-hidden ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      onClick={() => onClick(post)}
    >
      <div className={`relative ${featured ? 'h-64' : 'h-48'}`}>
        <ImageWithFallback
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary">{post.category}</Badge>
        </div>
      </div>
      
      <CardHeader className={featured ? 'pb-2' : 'pb-3'}>
        <h3 className={featured ? 'text-xl' : 'text-lg'}>{post.title}</h3>
      </CardHeader>
      
      <CardContent className={featured ? 'pb-2' : 'pb-3'}>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground pt-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {post.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.publishDate}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readTime} read
        </div>
      </CardFooter>
    </Card>
  );
}