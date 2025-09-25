import { BlogPost } from "../components/BlogPostCard";

export interface NewsArticle {
  id: string;
  headline: string;
  summary: string;
  content: string;
  category: string;
  source: string;
  publishTime: string;
  imageUrl: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  originalTitle?: string;
  synopsis: string;
  category: string;
  type: 'anime' | 'movie' | 'series' | 'manga' | 'cartoon';
  year: number;
  rating: number;
  duration?: string;
  episodes?: number;
  status: 'completed' | 'ongoing' | 'upcoming';
  genres: string[];
  studio?: string;
  director?: string;
  cast?: string[];
  imageUrl: string;
  trailerUrl?: string;
  watchLinks: {
    platform: string;
    url: string;
    isPaid: boolean;
  }[];
  isFeatured?: boolean;
  isRecommended?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  category: string;
  tags: string[];
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  timeInvested: string;
  tools: string[];
  achievements: string[];
  imageUrl: string;
  gallery: string[];
}

export interface SpotifyArtist {
  id: string;
  name: string;
  followers: string;
  genre: string;
  imageUrl: string;
  topSong: string;
  monthlyListeners: string;
  lastPlayed: string;
  isVerified: boolean;
}




export const categories = ["Todos", "Anime", "Filme", "Série", "Manga", "Desenho", "Jogo"];

// Define or import the 'newsArticles' array
const newsArticles: NewsArticle[] = []; // Replace with actual data or import statement

// Define or import the 'mediaItems' array
const mediaItems: MediaItem[] = []; // Replace with actual data or import statement

export const featuredArticles = newsArticles.filter(article => article.isFeatured);
export const breakingNews = newsArticles.filter(article => article.isBreaking);
export const regularArticles = newsArticles.filter(article => !article.isFeatured && !article.isBreaking);

export const featuredItems = mediaItems.filter(item => item.isFeatured);
export const recommendedItems = mediaItems.filter(item => item.isRecommended);
export const regularItems = mediaItems.filter(item => !item.isFeatured && !item.isRecommended);

// Biografia pessoal
export const personalBio = {
  name: "𝑾𝒊𝒏𝒆",
  title: "Entusiasta de Entretenimento & Desenvolvedor",
  description: "Bem-vindo ao meu espaço pessoal! Aqui compartilho minhas paixões por animes, filmes, séries, mangás, jogos e muito mais. Este catálogo é uma curadoria dos melhores conteúdos que já consumi, com recomendações sinceras e links para onde assistir/jogar. Atualizo sempre que vejo/faço algo novo. Sinta-se à vontade para explorar, comentar e sugerir novos títulos!",
  avatar: "src/components/figma/avatar.png",

  profiles: [
    {
      name: "MyAnimeList",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png",
      url: "https://myanimelist.net/profile/seu-usuario"
    },
    {
      name: "Letterboxd",
      icon: "src/components/figma/letterboxd.png",
      url: "https://letterboxd.com/seu-usuario"
    }
  ],

  stats: {
    animeWatched: 0,
    moviesWatched: 0,
    seriesWatched: 0,
    mangasRead: 0,
    gamesPlayed: 0,
    recipesCooked: 0,
    manhwaRead: 0
  },
  favorites: {
    anime: "Bocchi the Rock / Dungeons mash",
    manga: "Gachiakuta",
    movie: "The Chronicles of Spidervick",
    serie: "The Amazing Digital Circus",
    game: "The Legend of Zelda / Hollow Knight"
  },
  socialLinks: {
    github: "https://github.com/wenrkive",
    instagram: "https://www.instagram.com/wenrkive/", 
    twitter: "https://x.com/97rkiive",
    spotify: "https://open.spotify.com/user/wenrkive",
    email: "wenrkive.dev@gmail.com"
  }
};

