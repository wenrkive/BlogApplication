import React from 'react';

interface Hobby {
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

export const hobbies: Hobby[] = [
    {
        id: "1",
        title: "Desenvolvimento de Jogos",
        description: "Criação de jogos indie usando Unity e programação em C#. Foco em mecânicas inovadoras e pixel art.",
        category: "Tecnologia",
        level: "intermediate",
        timeInvested: "3 anos",
        tools: ["Unity", "C#", "Photoshop", "Aseprite"],
        achievements: [
            "Publicado 2 jogos na Steam",
            "Participação em game jams",
            "Mais de 1000 downloads"
        ],
        imageUrl: "https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU1Mjk3NjU0fDA&ixlib=rb-4.1.0&q=80&w=600",
        gallery: []
    },
    {
        id: "2",
        title: "Ilustração Digital",
        description: "Arte digital focada em personagens de anime e fantasia. Exploro diferentes estilos e técnicas de pintura digital.",
        category: "Arte",
        level: "intermediate",
        timeInvested: "4 anos",
        tools: ["Photoshop", "Procreate", "Wacom Tablet"],
        achievements: [
            "Comissões para clientes internacionais",
            "Portfolio com 100+ ilustrações",
            "5k seguidores no Instagram"
        ],
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0fGVufDF8fHx8MTc1NTI5NzY1NHww&ixlib=rb-4.1.0&q=80&w=600",
        gallery: []
    }
];


const Hobbies: React.FC = () => (
  <div className="page">
    <div className="page-header" style={{marginBottom: '2.5rem'}}>
      <h1>Meus Hobbies</h1>
      <p>Projetos e paixões que me mantêm criativo e sempre aprendendo coisas novas.</p>
    </div>
    <div className="hobbies-grid" id="hobbiesGrid" style={{display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center'}}>
      {hobbies.map((hobby) => (
        <div key={hobby.id} className="hobby-card" style={{
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
          <img src={hobby.imageUrl} alt={hobby.title} style={{width: '100%', maxWidth: 120, borderRadius: 10, marginBottom: 12, alignSelf: 'center'}} />
          {/* <h2 style={{fontSize: '1.05rem', fontWeight: 700, marginBottom: 6, textAlign: 'center'}}>{hobby.title}</h2> */}
          <p style={{fontSize: '0.92rem', marginBottom: 6}}>{hobby.description}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 2}}><strong>Categoria:</strong> {hobby.category}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 2}}><strong>Nível:</strong> {hobby.level}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 2}}><strong>Tempo dedicado:</strong> {hobby.timeInvested}</p>
          <p style={{fontSize: '0.88rem', marginBottom: 6}}><strong>Ferramentas:</strong> {hobby.tools.join(', ')}</p>
          <ul style={{fontSize: '0.88rem', paddingLeft: 18, marginBottom: 0}}>
            {hobby.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Hobbies;
