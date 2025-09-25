import { Github, Instagram, Twitter, Mail, MessageCircle, Heart } from "lucide-react";
import { personalBio } from "../data/blogPosts";

export function PersonalFooter() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              MyBlog
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Meu espaço pessoal para compartilhar paixões por anime, tecnologia, 
              culinária e muito mais. Sempre explorando novas aventuras!
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>e muito café ☕</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Redes Sociais</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Me siga nas redes para mais conteúdo e atualizações!
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(personalBio.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-colors group"
                  title={`Seguir no ${platform}`}
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {getSocialIcon(platform)}
                  </div>
                </a>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="mt-6 p-4 bg-background/50 border border-border rounded-lg">
              <h5 className="text-sm font-medium text-foreground mb-2">Newsletter</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Receba novidades sobre animes, receitas e projetos!
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="px-3 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} {personalBio.name}. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}