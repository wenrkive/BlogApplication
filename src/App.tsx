import { useState } from "react";

import { WineHeader } from "./components/WineHeader";
import { WineBio } from "./components/WineBio";
import { WineFooter } from "./components/WineFooter";
import Hobbies from "./pages/Hobbies";
import Desenhos from "./pages/Desenhos";
import Mangas from "./pages/Mangas";
import Jogos from "./pages/Jogos";
import Receitas from "./pages/Receitas";  
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const renderHomePage = () => (
    <div className="space-y-12">
      {/* Personal Bio */}
      <section>
        <WineBio />
      </section>
    </div>
  );

  const renderSeriesPage = () => (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Séries</h1>
        <p className="text-muted-foreground">
          Explore minha coleção de séries
        </p>
      </div>
      
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Implemente sua interface de séries aqui</p>
      </div>
    </div>
  );

  const renderMangasPage = () => (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Mangás</h1>
        <p className="text-muted-foreground">
          Explore minha coleção de mangás
        </p>
      </div>
      
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Implemente sua interface de mangás aqui</p>
      </div>
    </div>
  );

  const renderDesenhosPage = () => (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Desenhos</h1>
        <p className="text-muted-foreground">
          Explore minha coleção de desenhos
        </p>
      </div>
      
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Implemente sua interface de desenhos aqui</p>
      </div>
    </div>
  );

  const renderJogosPage = () => (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Jogos</h1>
        <p className="text-muted-foreground">
          Explore minha coleção de jogos
        </p>
      </div>
      
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Implemente sua interface de jogos aqui</p>
      </div>
    </div>
  );


  const renderReceitasPage = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Receitas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Deliciosas receitas testadas e aprovadas, desde pratos japoneses até sobremesas brasileiras.
        </p>
      </div>

      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-muted-foreground">Implemente sua interface de receitas aqui</p>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'hobbies':
        return <Hobbies />;
      case 'desenhos':
        return <Desenhos />;
      case 'mangas':
        return <Mangas />;
      case 'jogos':
        return <Jogos />;
      case 'receitas':
        return <Receitas />;
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <WineHeader
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>

      <WineFooter />
    </div>
  );
}