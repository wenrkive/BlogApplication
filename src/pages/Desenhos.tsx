import React from 'react';

interface Animation {
    id: string;
    title: string;
    description: string;
    category: string;
    level: string;
    timeInvested: string;
    tools: string[];
    achievements: string[];
    imageUrl: string;
    gallery: string[];
}

export const desenhos: Animation[] = [
    {
        id: "1",
        title: "Animação 2D",
        description: "Criação de animações 2D para projetos autorais e freelas.",
        category: "Arte",
        level: "avançado",
        timeInvested: "2 anos",
        tools: ["Toon Boom", "Photoshop"],
        achievements: [
            "Curta premiado em festival",
            "Canal no YouTube com 10k inscritos"
        ],
        imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        gallery: []
    }
    // Adicione mais animações se quiser
];

const Desenhos: React.FC = () => (
  <div className="page">
    <div className="page-header" style={{marginBottom: '2.5rem'}}>
      <h1>Desenhos</h1>
      <p>Veja minhas animações e ilustrações digitais.</p>
    </div>
    <div className="hobbies-grid" id="desenhosGrid" style={{display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center'}}>
      {desenhos.map((item) => (
        <div key={item.id} className="hobby-card" style={{
          background: '#18181b',
          borderRadius: '1rem',
          boxShadow: '0 0 12px 2px rgba(128,0,255,0.25)',
          padding: '1.2rem',
          maxWidth: 320,
          minWidth: 220,
          border: '2px solid rgba(128,0,255,0.18)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}>
          <img src={item.imageUrl} alt={item.title} style={{width: '100%', maxWidth: 120, borderRadius: 10, marginBottom: 12, alignSelf: 'center'}} />
          <p style={{fontSize: '0.92rem', marginBottom: 6}}>{item.description}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 2}}><strong>Categoria:</strong> {item.category}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 2}}><strong>Nível:</strong> {item.level}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 2}}><strong>Tempo dedicado:</strong> {item.timeInvested}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 6}}><strong>Ferramentas:</strong> {item.tools.join(', ')}</p>
          <ul style={{fontSize: '0.88rem', paddingLeft: 18, marginBottom: 0}}>
            {item.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Desenhos;
