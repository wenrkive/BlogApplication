import React from 'react';

interface Manga {
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

export const mangas: Manga[] = [
    {
        id: "1",
        title: "Gachiakuta",
        description: "Mangá de ação e mistério com arte marcante.",
        category: "Ação",
        level: "leitor",
        timeInvested: "6 meses",
        tools: ["Manga Plus", "Crunchyroll"],
        achievements: [
            "Coleção completa",
            "Discussão em fóruns"
        ],
        imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        gallery: []
    }
    // Adicione mais mangás se quiser
];

const Mangas: React.FC = () => (
  <div className="page">
    <div className="page-header" style={{marginBottom: '2.5rem'}}>
      <h1>Mangás</h1>
      <p>Explore minha coleção de mangás.</p>
    </div>
    <div className="hobbies-grid" id="mangasGrid" style={{display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center'}}>
      {mangas.map((item) => (
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

export default Mangas;
