import { Github, Instagram, Twitter, Mail, MessageCircle } from "lucide-react";
import { personalBio } from "../data/blogPosts";
import { Button } from "./ui/button";

export function PersonalBio() {
  const socialIcons = {
    github: Github,
    instagram: Instagram,
    twitter: Twitter,
    email: Mail,
    discord: MessageCircle
  };

  const getSocialIcon = (platform: string) => {
    const IconComponent = socialIcons[platform as keyof typeof socialIcons];
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const formatStatNumber = (num: number) => {
    return num.toString().padStart(3, '0');
  };

  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
      
      <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src={personalBio.avatar}
                alt={personalBio.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {personalBio.name}
            </h1>
            <h2 className="text-xl text-primary mb-4 font-medium">
              {personalBio.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              {personalBio.description}
            </p>

            {/* Perfis externos */}
            <div className="flex gap-3 items-center justify-center lg:justify-start mb-6">
              {personalBio.profiles?.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                    }}
                  />
                  <span className="text-sm font-semibold" style={{ color: "#ff4fd8" }}>{profile.name}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {Object.entries(personalBio.socialLinks).map(([platform, url]) => (
                <Button
                  key={platform}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    {getSocialIcon(platform)}
                    <span className="capitalize">{platform}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 min-w-[200px]">
            <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-1">
                {formatStatNumber(personalBio.stats.animeWatched)}
              </div>
              <div className="text-sm text-muted-foreground">Animes</div>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {formatStatNumber(personalBio.stats.moviesWatched)}
              </div>
              <div className="text-sm text-muted-foreground">Filmes</div>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {formatStatNumber(personalBio.stats.gamesPlayed)}
              </div>
              <div className="text-sm text-muted-foreground">Jogos</div>
            </div>
            
            <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {formatStatNumber(personalBio.stats.recipesCooked)}
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {formatStatNumber(personalBio.stats.recipesCooked)}
                </div>
                <div className="text-sm text-muted-foreground">Receitas</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-border">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {formatStatNumber(personalBio.stats.manhwaRead)}
                </div>
                <div className="text-sm text-muted-foreground">Manhwas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }