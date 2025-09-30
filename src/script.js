// Sample data for the blog
const mediaData = {
    animes: [
        {
            id: 1,
            title: "Attack on Titan",
            year: "2013",
            rating: "9.0",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
            synopsis: "A história épica da humanidade lutando contra titãs gigantes em um mundo pós-apocalíptico.",
            category: "anime"
        },
        {
            id: 2,
            title: "Demon Slayer",
            year: "2019",
            rating: "8.7",
            image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop",
            synopsis: "Tanjiro busca uma cura para sua irmã que foi transformada em demônio.",
            category: "anime"
        },
        {
            id: 3,
            title: "Your Name",
            year: "2016",
            rating: "8.4",
            image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
            synopsis: "Dois adolescentes descobrem que podem trocar de corpos misteriosamente.",
            category: "anime"
        },
        {
            id: 4,
            title: "Spirited Away",
            year: "2001",
            rating: "9.3",
            image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=600&fit=crop",
            synopsis: "Uma menina se aventura em um mundo espiritual para salvar seus pais.",
            category: "anime"
        }
    ],
    filmes: [
        {
            id: 5,
            title: "Inception",
            year: "2010",
            rating: "8.8",
            image: "https://images.unsplash.com/photo-1489599809243-658b0110e027?w=400&h=600&fit=crop",
            synopsis: "Dom Cobb é um ladrão com a rara habilidade de entrar nos sonhos das pessoas.",
            category: "filme"
        },
        {
            id: 6,
            title: "Interstellar",
            year: "2014",
            rating: "8.6",
            image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
            synopsis: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço.",
            category: "filme"
        },
        {
            id: 7,
            title: "The Matrix",
            year: "1999",
            rating: "8.7",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
            synopsis: "Um programador descobre que a realidade como ele a conhece não existe.",
            category: "filme"
        }
    ],
    series: [
        {
            id: 8,
            title: "Breaking Bad",
            year: "2008",
            rating: "9.5",
            image: "https://images.unsplash.com/photo-1489599809243-658b0110e027?w=400&h=600&fit=crop",
            synopsis: "Um professor de química se torna um fabricante de metanfetaminas.",
            category: "serie"
        },
        {
            id: 9,
            title: "Stranger Things",
            year: "2016",
            rating: "8.7",
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
            synopsis: "Crianças enfrentam forças sobrenaturais em uma pequena cidade nos anos 80.",
            category: "serie"
        }
    ],
    mangas: [
        {
            id: 10,
            title: "One Piece",
            year: "1997",
            rating: "9.0",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
            synopsis: "As aventuras de Monkey D. Luffy em busca do tesouro One Piece.",
            category: "manga"
        },
        {
            id: 11,
            title: "Naruto",
            year: "1999",
            rating: "8.8",
            image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop",
            synopsis: "A jornada de um jovem ninja para se tornar Hokage.",
            category: "manga"
        }
    ],
    desenhos: [
        {
            id: 12,
            title: "Avatar: The Last Airbender",
            year: "2005",
            rating: "9.3",
            image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
            synopsis: "Aang deve dominar os quatro elementos para parar a Nação do Fogo.",
            category: "desenho"
        },
        {
            id: 13,
            title: "Steven Universe",
            year: "2013",
            rating: "8.2",
            image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=600&fit=crop",
            synopsis: "Steven descobre seus poderes mágicos enquanto protege a humanidade.",
            category: "desenho"
        }
    ],
    jogos: [
        {
            id: 14,
            title: "The Legend of Zelda: Breath of the Wild",
            year: "2017",
            rating: "9.7",
            image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=600&fit=crop",
            synopsis: "Link desperta para salvar Hyrule do Calamity Ganon.",
            category: "jogo"
        },
        {
            id: 15,
            title: "The Witcher 3: Wild Hunt",
            year: "2015",
            rating: "9.3",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
            synopsis: "Geralt procura por Ciri em um mundo de fantasia sombrio.",
            category: "jogo"
        }
    ]
};

const spotifyData = [
    {
        id: 1,
        name: "The Weeknd",
        genre: "R&B, Pop",
        topSong: "Blinding Lights",
        monthlyListeners: "75.5M",
        lastPlayed: "2 horas atrás",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
        isVerified: true
    },
    {
        id: 2,
        name: "Billie Eilish",
        genre: "Alternative, Pop",
        topSong: "bad guy",
        monthlyListeners: "63.2M",
        lastPlayed: "5 horas atrás",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c9a97c9e?w=100&h=100&fit=crop",
        isVerified: true
    },
    {
        id: 3,
        name: "Dua Lipa",
        genre: "Dance Pop",
        topSong: "Levitating",
        monthlyListeners: "58.7M",
        lastPlayed: "1 dia atrás",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        isVerified: true
    },
    {
        id: 4,
        name: "Bad Bunny",
        genre: "Reggaeton, Latin",
        topSong: "Tití Me Preguntó",
        monthlyListeners: "52.1M",
        lastPlayed: "2 dias atrás",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        isVerified: true
    },
    {
        id: 5,
        name: "Taylor Swift",
        genre: "Pop, Country",
        topSong: "Anti-Hero",
        monthlyListeners: "71.8M",
        lastPlayed: "3 dias atrás",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        isVerified: true
    }
];

const recipesData = [
    {
        id: 1,
        title: "Ramen Caseiro",
        description: "Receita autêntica de ramen japonês com caldo rico e macarrão perfeito.",
        imageUrl: "https://images.unsplash.com/photo-1569718107693-b8e35b24e113?w=400&h=300&fit=crop",
        difficulty: "medium",
        prepTime: "30 min",
        cookTime: "2h",
        servings: 4,
        tags: ["Japonês", "Sopa", "Comfort Food"]
    },
    {
        id: 2,
        title: "Brigadeiro Gourmet",
        description: "O clássico doce brasileiro com um toque especial e ingredientes premium.",
        imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
        difficulty: "easy",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: 20,
        tags: ["Brasileiro", "Sobremesa", "Chocolate"]
    }
];

const hobbiesData = [
    {
        id: 1,
        title: "Desenho Digital",
        description: "Criação de arte digital usando tablet e softwares especializados. Foco em personagens de anime e concept art.",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
        category: "Arte",
        level: "intermediate",
        timeInvested: "3 anos",
        tools: ["Procreate", "Photoshop", "iPad Pro", "Wacom Tablet"],
        achievements: [
            "Mais de 100 ilustrações criadas",
            "Participação em contests online",
            "Comissões para terceiros"
        ]
    },
    {
        id: 2,
        title: "Gaming Competitivo",
        description: "Participação em jogos competitivos online, principalmente FPS e MOBAs. Foco em estratégia e trabalho em equipe.",
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
        category: "Gaming",
        level: "advanced",
        timeInvested: "5 anos",
        tools: ["PC Gaming", "Mechanical Keyboard", "Gaming Mouse", "Discord"],
        achievements: [
            "Rank Diamond em League of Legends",
            "Participação em torneios locais",
            "Líder de guild em MMORPGs"
        ]
    }
];

// Application state
let currentPage = 'home';
let searchQuery = '';
let allMedia = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Combine all media data
    allMedia = [
        ...mediaData.animes,
        ...mediaData.filmes,
        ...mediaData.series,
        ...mediaData.mangas,
        ...mediaData.desenhos,
        ...mediaData.jogos
    ];

    initializeEventListeners();
    renderCurrentPage();
});

function initializeEventListeners() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Footer links
    const footerLinks = document.querySelectorAll('.footer-section a[data-page]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase();
        renderCurrentPage();
    });
}

function navigateToPage(page) {
    // Update current page
    currentPage = page;

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Show/hide pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(pageEl => {
        pageEl.classList.remove('active');
    });

    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Render page content
    renderCurrentPage();

    // Scroll to top
    window.scrollTo(0, 0);
}

function renderCurrentPage() {
    switch (currentPage) {
        case 'home':
            renderHomePage();
            break;
        case 'animes':
            renderMediaPage('animes', mediaData.animes);
            break;
        case 'filmes':
            renderMediaPage('filmes', mediaData.filmes);
            break;
        case 'series':
            renderMediaPage('series', mediaData.series);
            break;
        case 'mangas':
            renderMediaPage('mangas', mediaData.mangas);
            break;
        case 'desenhos':
            renderMediaPage('desenhos', mediaData.desenhos);
            break;
        case 'jogos':
            renderMediaPage('jogos', mediaData.jogos);
            break;
        case 'spotify':
            renderSpotifyPage();
            break;
        case 'recomendados':
            renderRecommendedPage();
            break;
        case 'receitas':
            renderRecipesPage();
            break;
        case 'hobbies':
            renderHobbiesPage();
            break;
    }
}

function renderHomePage() {
    const recentGrid = document.getElementById('recentGrid');
    if (recentGrid) {
        // Show recent additions (first 8 items from all media)
        const recentItems = allMedia.slice(0, 8);
        recentGrid.innerHTML = renderMediaGrid(recentItems);
    }
}

function renderMediaPage(pageType, mediaItems) {
    const grid = document.getElementById(`${pageType}Grid`);
    if (grid) {
        const filteredItems = filterMediaItems(mediaItems);
        grid.innerHTML = renderMediaGrid(filteredItems);
    }
}

function renderSpotifyPage() {
    const spotifyList = document.getElementById('spotifyList');
    if (spotifyList) {
        const filteredArtists = spotifyData.filter(artist => 
            !searchQuery || 
            artist.name.toLowerCase().includes(searchQuery) ||
            artist.genre.toLowerCase().includes(searchQuery) ||
            artist.topSong.toLowerCase().includes(searchQuery)
        );

        spotifyList.innerHTML = filteredArtists.map((artist, index) => `
            <div class="spotify-item">
                <div class="spotify-rank">${index + 1}</div>
                <img src="${artist.imageUrl}" alt="${artist.name}" class="spotify-image">
                <div class="spotify-info">
                    <div class="spotify-name">
                        ${artist.name}
                        ${artist.isVerified ? '<span style="color: #1DB954;">✓</span>' : ''}
                    </div>
                    <div class="spotify-genre">${artist.genre}</div>
                    <div class="spotify-song">Top: ${artist.topSong}</div>
                </div>
                <div class="spotify-stats">
                    <div class="spotify-listeners">${artist.monthlyListeners}</div>
                    <div class="spotify-label">ouvintes mensais</div>
                    <div class="spotify-played">${artist.lastPlayed}</div>
                </div>
            </div>
        `).join('');
    }
}

function renderRecommendedPage() {
    const grid = document.getElementById('recomendadosGrid');
    if (grid) {
        // Show top rated items as recommendations
        const recommended = allMedia
            .filter(item => parseFloat(item.rating) >= 8.5)
            .slice(0, 12);
        const filteredItems = filterMediaItems(recommended);
        grid.innerHTML = renderMediaGrid(filteredItems);
    }
}

function renderRecipesPage() {
    const grid = document.getElementById('receitasGrid');
    if (grid) {
        const filteredRecipes = recipesData.filter(recipe =>
            !searchQuery ||
            recipe.title.toLowerCase().includes(searchQuery) ||
            recipe.description.toLowerCase().includes(searchQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );

        grid.innerHTML = filteredRecipes.map(recipe => `
            <div class="media-card">
                <img src="${recipe.imageUrl}" alt="${recipe.title}" class="media-card-image">
                <div class="media-card-content">
                    <h3 class="media-card-title">${recipe.title}</h3>
                    <div class="media-card-info">
                        <span class="media-card-year">${recipe.difficulty === 'easy' ? 'Fácil' : recipe.difficulty === 'medium' ? 'Médio' : 'Difícil'}</span>
                        <span class="media-card-rating">${recipe.servings} porções</span>
                    </div>
                    <p class="media-card-synopsis">${recipe.description}</p>
                    <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-secondary);">
                        Prep: ${recipe.prepTime} | Cook: ${recipe.cookTime}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderHobbiesPage() {
    const grid = document.getElementById('hobbiesGrid');
    if (grid) {
        const filteredHobbies = hobbiesData.filter(hobby =>
            !searchQuery ||
            hobby.title.toLowerCase().includes(searchQuery) ||
            hobby.description.toLowerCase().includes(searchQuery) ||
            hobby.category.toLowerCase().includes(searchQuery)
        );

        grid.innerHTML = filteredHobbies.map(hobby => `
            <div class="hobby-card">
                <img src="${hobby.imageUrl}" alt="${hobby.title}" class="hobby-image">
                <div class="hobby-content">
                    <h3 class="hobby-title">${hobby.title}</h3>
                    <p class="hobby-description">${hobby.description}</p>
                    <div class="hobby-meta">
                        <div class="hobby-meta-item">
                            <h4>Categoria</h4>
                            <p>${hobby.category}</p>
                        </div>
                        <div class="hobby-meta-item">
                            <h4>Tempo Investido</h4>
                            <p>${hobby.timeInvested}</p>
                        </div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <h4 style="font-size: 0.75rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">Ferramentas</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
                            ${hobby.tools.map(tool => `<span style="padding: 0.25rem 0.5rem; background: var(--bg-tertiary); font-size: 0.75rem; border-radius: 12px;">${tool}</span>`).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 style="font-size: 0.75rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">Conquistas</h4>
                        <ul style="list-style: none; padding: 0;">
                            ${hobby.achievements.map(achievement => `<li style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.25rem; padding-left: 1rem; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-red);">•</span>${achievement}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function filterMediaItems(items) {
    if (!searchQuery) return items;
    
    return items.filter(item =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.synopsis.toLowerCase().includes(searchQuery) ||
        item.year.includes(searchQuery)
    );
}

function renderMediaGrid(items) {
    if (items.length === 0) {
        return '<div style="text-align: center; padding: 3rem; color: var(--text-secondary);">Nenhum item encontrado.</div>';
    }

    return items.map(item => `
        <div class="media-card" onclick="showMediaDetails(${item.id})">
            <img src="${item.image}" alt="${item.title}" class="media-card-image">
            <div class="media-card-content">
                <h3 class="media-card-title">${item.title}</h3>
                <div class="media-card-info">
                    <span class="media-card-year">${item.year}</span>
                    <span class="media-card-rating">★ ${item.rating}</span>
                </div>
                <p class="media-card-synopsis">${item.synopsis}</p>
            </div>
        </div>
    `).join('');
}

function showMediaDetails(itemId) {
    const item = allMedia.find(media => media.id === itemId);
    if (item) {
        alert(`${item.title} (${item.year})\n\n${item.synopsis}\n\nAvaliação: ★ ${item.rating}`);
    }
}

// Add some smooth animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to page transitions
    const style = document.createElement('style');
    style.textContent = `
        .page {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        .page.active {
            opacity: 1;
        }
        .media-card {
            transition: all 0.3s ease;
        }
        .media-card:hover {
            transform: translateY(-4px);
        }
    `;
    document.head.appendChild(style);
});