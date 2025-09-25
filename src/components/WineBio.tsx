import { personalBio } from "../data/blogPosts";

export function WineBio() {
  return (
    <div className="relative py-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            <img
              src="src/components/figma/avatar.png"
              alt="Wine Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
            𝑶𝒍á, 𝒆𝒖 𝒔𝒐𝒖 {personalBio.name}!
          </h1>
          <h2 className="text-xl lg:text-2xl text-foreground mb-6 font-medium">
            {personalBio.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl inline-block">
            {personalBio.description}
            {/* Perfis externos menores, sem borda e alinhados à direita do texto */}
            <span className="float-right flex gap-2 items-center">
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
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                    }}
                  />
                  <span className="text-xs text-foreground">{profile.name}</span>
                </a>
              ))}
            </span>
          </p>
        </div>
      </div>

      {/* Four main sections in cards */}
      <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:gap-6">
        {/* Sobre Mim */}
        <div className="bg-card border border-border rounded-lg p-6 flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🦋</span>
            <h3 className="text-lg font-semibold text-foreground">Sobre Mim</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Sou uma entusiasta de cultura pop japonesa e ocidental. Adoro descobrir
            novas séries animadas de aventura, mangás com histórias únicas.
          </p>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Quando não estou assistindo ou lendo alguma coisa nova, gosto de
            jogar videogames e descobrir novos indie.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full font-medium">
              Ação
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-medium">
              Comédia
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium">
              Ficção
            </span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full font-medium">
              Romance
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-medium border border-yellow-500">
              Fantásia
            </span>
          </div>
        </div>

        {/* Meus Gostos */}
        <div className="bg-card border border-border rounded-lg p-6 flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📜</span>
            <h3 className="text-lg font-semibold text-foreground">Meus Gostos</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-foreground font-medium text-sm">Anime Favorito:</p>
              <p className="text-muted-foreground">
                {personalBio.favorites.anime}
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-sm">Manga Favorito:</p>
              <p className="text-muted-foreground">
                {personalBio.favorites.manga}
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-sm">Filme Favorito:</p>
              <p className="text-muted-foreground">
                {personalBio.favorites.movie}
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-sm">Série Favorita:</p>
              <p className="text-muted-foreground">
                {personalBio.favorites.serie}
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium text-sm">Jogo Favorito:</p>
              <p className="text-muted-foreground">
                {personalBio.favorites.game}
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="bg-card border border-border rounded-lg p-6 flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🪡</span>
            <h3 className="text-lg font-semibold text-foreground">Hobbies</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">
                Gaming (RPGs e Indie)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Culinária</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">
                Leitura de mangás e light novels
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Desenho digital</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">
                Ouvir J-pop, K-Pop & Rock e suas vertentes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">
                Tocar violão e teclado
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Aprender novos hobbies</span>
            </li>
          </ul>
        </div>

        {/* Interesses */}
        <div className="bg-card border border-border rounded-lg p-6 flex-1 min-w-[220px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">⭐</span>
            <h3 className="text-lg font-semibold text-foreground">Interesses</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Desenvolvimento</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Anime</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Gaming</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Culinária</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Tecnologia</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Arte Digital</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Programação</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Leitura</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Escrita</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-muted-foreground">Música</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <span className="text-xl">📊</span>
          <h2 className="text-2xl font-bold text-foreground">Minhas Estatísticas</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          <div className="bg-card border-l-4 border-l-red-500 p-4 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-red-500 mb-1">
              {personalBio.stats.animeWatched}+
            </div>
            <div className="text-sm text-muted-foreground">Animes Assistidos</div>
          </div>

          <div className="bg-card border-l-4 border-l-blue-500 p-4 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-blue-500 mb-1">
              {personalBio.stats.moviesWatched}+
            </div>
            <div className="text-sm text-muted-foreground">Filmes Vistos</div>
          </div>

          <div className="bg-card border-l-4 border-l-purple-500 p-4 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-purple-500 mb-1">
              {personalBio.stats.seriesWatched}+
            </div>
            <div className="text-sm text-muted-foreground">Séries</div>
          </div>

          <div className="bg-card border-l-4 border-l-green-500 p-4 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-green-500 mb-1">
              {personalBio.stats.mangasRead}+
            </div>
            <div className="text-sm text-muted-foreground">Mangás Lidos</div>
          </div>

          <div className="bg-card border-l-4 border-l-pink-500 p-4 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-pink-500 mb-1">
              {personalBio.stats.manhwaRead}+
            </div>
            <div className="text-sm text-muted-foreground">Manhwas Lidos</div>
          </div>

          <div className="bg-card border-l-4 border-l-cyan-500 p-4 rounded-lg">
            <div className="text-2xl lg:text-3xl font-bold text-cyan-500 mb-1">
              {personalBio.stats.gamesPlayed}+
            </div>
            <div className="text-sm text-muted-foreground">Jogos Zerados</div>
          </div>
        </div>
      </div>
    </div>
  );
}