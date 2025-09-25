import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { BlogPost } from "./BlogPostCard";
import { NetflixPostCard } from "./NetflixPostCard";

interface HorizontalCarouselProps {
  title: string;
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  maxItemsCollapsed?: number;
}

export function HorizontalCarousel({ 
  title, 
  posts, 
  onPostClick, 
  maxItemsCollapsed = 6 
}: HorizontalCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayPosts = isExpanded ? posts : posts.slice(0, maxItemsCollapsed);
  const hasMorePosts = posts.length > maxItemsCollapsed;

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Update arrow visibility after scroll
    setTimeout(() => {
      updateArrowVisibility();
    }, 300);
  };

  const updateArrowVisibility = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 10);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    // Reset scroll position when collapsing
    if (isExpanded && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  if (posts.length === 0) return null;

  return (
    <section className="space-y-4 group">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          {title}
        </h2>
        
        {hasMorePosts && (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpanded}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <span className="text-sm">
              {isExpanded ? 'Show Less' : `See More (${posts.length - maxItemsCollapsed} more)`}
            </span>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && !isExpanded && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        {/* Right Arrow */}
        {showRightArrow && !isExpanded && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-12 rounded-none bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}

        {/* Scrollable Container or Grid */}
        {isExpanded ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 lg:px-6 py-2">
            {displayPosts.map((post) => (
              <div key={post.id} className="w-full">
                <NetflixPostCard post={post} onClick={onPostClick} />
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-scroll scrollbar-hide px-4 lg:px-6 py-2"
            onScroll={updateArrowVisibility}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayPosts.map((post) => (
              <div key={post.id} className="flex-none w-72 md:w-80">
                <NetflixPostCard post={post} onClick={onPostClick} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}