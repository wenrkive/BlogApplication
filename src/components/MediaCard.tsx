import { useState } from "react";
import { Play, Star, Clock, Calendar, ExternalLink } from "lucide-react";
import { MediaItem } from "../data/blogPosts";
import { Button } from "./ui/button";

interface MediaCardProps {
  item: MediaItem;
  onClick: (item: MediaItem) => void;
  size?: 'small' | 'medium' | 'large';
}

export function MediaCard({ item, onClick, size = 'medium' }: MediaCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: {
      container: 'w-44 h-64',
      image: 'h-40',
      title: 'text-sm',
      info: 'text-xs'
    },
    medium: {
      container: 'w-52 h-72', 
      image: 'h-48',
      title: 'text-base',
      info: 'text-sm'
    },
    large: {
      container: 'w-60 h-80',
      image: 'h-56',
      title: 'text-lg',
      info: 'text-base'
    }
  };

  const classes = sizeClasses[size];

  const getDifficultyColor = (rating: number) => {
    if (rating >= 9) return 'text-green-400';
    if (rating >= 8) return 'text-blue-400';
    if (rating >= 7) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10';
      case 'ongoing': return 'text-blue-400 bg-blue-400/10';
      case 'upcoming': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completo';
      case 'ongoing': return 'Em andamento';
      case 'upcoming': return 'Em breve';
      default: return status;
    }
  };

  return (
    <div 
      className={`${classes.container} flex-shrink-0 cursor-pointer transition-all duration-300 transform group ${
        isHovered ? 'scale-105 z-10' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(item)}
    >
      <div className="relative h-full bg-card rounded-lg overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
        {/* Image */}
        <div className={`${classes.image} relative overflow-hidden`}>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1">
                  <Star className={`h-4 w-4 ${getDifficultyColor(item.rating)}`} />
                  <span className="text-white text-sm font-medium">{item.rating}</span>
                </div>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-3 py-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick(item);
                  }}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Ver
                </Button>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
            {getStatusText(item.status)}
          </div>

          {/* Type Badge */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded-full">
            {item.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className={`${classes.title} font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors`}>
            {item.title}
          </h3>
          
          {item.originalTitle && (
            <p className="text-xs text-muted-foreground italic line-clamp-1">
              {item.originalTitle}
            </p>
          )}

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{item.year}</span>
            </div>
            
            {item.duration && (
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{item.duration}</span>
              </div>
            )}
            
            {item.episodes && (
              <div className="flex items-center space-x-1">
                <span>{item.episodes} ep</span>
              </div>
            )}
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1">
            {item.genres.slice(0, 2).map((genre, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-full"
              >
                {genre}
              </span>
            ))}
            {item.genres.length > 2 && (
              <span className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                +{item.genres.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}