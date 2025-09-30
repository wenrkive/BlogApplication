import { ArrowLeft, Star, Calendar, Clock, Play, ExternalLink, Users, Building } from "lucide-react";
import { MediaItem } from "../data/blogPosts";
import { Button } from "./ui/button";

interface MediaDetailsProps {
  item: MediaItem;
  onBack: () => void;
}

export function MediaDetails({ item, onBack }: MediaDetailsProps) {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao catálogo
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-[2/3] relative rounded-lg overflow-hidden border border-border">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                  {getStatusText(item.status)}
                </div>
              </div>

              {/* Watch Links */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Onde assistir</h3>
                {item.watchLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <span className="font-medium">{link.platform}</span>
                      {!link.isPaid && (
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                          Grátis
                        </span>
                      )}
                    </div>
                    <Play className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Basic Info */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{item.title}</h1>
              {item.originalTitle && (
                <h2 className="text-xl text-muted-foreground italic mb-4">{item.originalTitle}</h2>
              )}

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className={`h-5 w-5 ${getDifficultyColor(item.rating)}`} />
                  <span className="text-lg font-semibold">{item.rating}</span>
                  <span className="text-muted-foreground text-sm">/10</span>
                </div>

                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.year}</span>
                </div>

                {item.duration && (
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{item.duration}</span>
                  </div>
                )}

                {item.episodes && (
                  <div className="text-muted-foreground">
                    <span>{item.episodes} episódios</span>
                  </div>
                )}

                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full border border-border"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Sinopse</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {item.synopsis}
              </p>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.studio && (
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Estúdio
                  </h4>
                  <p className="text-muted-foreground">{item.studio}</p>
                </div>
              )}

              {item.director && (
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Diretor</h4>
                  <p className="text-muted-foreground">{item.director}</p>
                </div>
              )}

              {item.cast && item.cast.length > 0 && (
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Elenco
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.cast.map((actor, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-card text-sm text-foreground rounded-full border border-border"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Trailer */}
            {item.trailerUrl && (
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Trailer</h3>
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <iframe
                    src={item.trailerUrl}
                    title={`${item.title} Trailer`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}