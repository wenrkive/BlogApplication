import { Github, Instagram, Twitter, Youtube } from "lucide-react";
import { SiSpotify } from "react-icons/si";
import { personalBio } from "../data/blogPosts";

export function WineFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Sobre</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Este é meu catálogo pessoal de entretenimento, onde compartilho minhas paixões e descobertas.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href={personalBio.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={personalBio.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={personalBio.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalBio.socialLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiSpotify className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <p className="text-sm text-muted-foreground">
              {personalBio.socialLinks.email}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Meu Blog Pessoal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}