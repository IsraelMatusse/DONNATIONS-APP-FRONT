import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Header } from '../components/Header';

const categories = [
  { id: 'todas', name: 'Todas' },
  { id: 'saude', name: 'Saúde' },
  { id: 'educacao', name: 'Educação' },
  { id: 'desastre', name: 'Desastre Natural' },
  { id: 'animais', name: 'Animais' },
  { id: 'social', name: 'Causas Sociais' },
];

const allCampaigns = [
  {
    id: 1,
    title: 'Equipamentos para Hospital',
    description: 'Doe para equipamentos médicos essenciais',
    image: '/src/assets/3ffc2566-c5de-485a-bdd1-8badccde5aa6.jpeg',
    category: 'saude',
    current: 120000,
    goal: 200000,
    progress: 60,
  },
  {
    id: 2,
    title: 'Reforma da Escola Comunitária',
    description: 'Ajude a renovar nossa escola local',
    image: '/src/assets/8lpyx3tilxl33526xqz2efvri0hrks.jpeg',
    category: 'educacao',
    current: 45000,
    goal: 100000,
    progress: 45,
  },
  {
    id: 3,
    title: 'Ajude o Abrigo de Animais',
    description: 'Apoie nosso abrigo local de animais',
    image: '/src/assets/pexels-photo-26128.jpg',
    category: 'animais',
    current: 37500,
    goal: 50000,
    progress: 75,
  },
  {
    id: 4,
    title: 'Ajude Vitimas de Cheias',
    description: 'Ajude as pessoas que sofrem de desastres naturais',
    image: '/src/assets/desastres naturais.jpg',
    category: 'desastre',
    current: 37500,
    goal: 50000,
    progress: 75,
  },
  {
    id: 5,
    title: 'Ajude o Gabriel',
    description: 'Apoie o Gabriel a fazer a sua operação neurologica',
    category: 'saude',
    current: 45000,
    goal: 100000,
    image: '/src/assets/crianca deficiente.jpg',
    progress: 45,
  },
  {
    id: 6,
    title: 'Ajude A Elsa com os Estudos',
    description: 'Apoie A Elsa com o financiamento da Viagem de Estudos',
    category: 'educacao',
    current: 37500,
    goal: 50000,
    image: '/src/assets/bolsa de estudos mulher.jpg',
    progress: 60,
  },
];

export function Cmapaigns() {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [currentPage] = useState(1);

  const filteredCampaigns = allCampaigns.filter(
    campaign => selectedCategory === 'todas' || campaign.category === selectedCategory,
  );

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-purple-100 to-pink-50">
      <Header />

      {/* Main content wrapper - takes remaining height */}
      <div className="flex-1 w-full">
        {/* Fixed width container for content alignment */}
        <div className="min-h-full w-full max-w-[1920px] mx-auto px-6">
          {/* Content grid with fixed minimum height */}
          <div className="grid grid-rows-[auto_1fr_auto] min-h-[calc(100vh-64px)]">
            {' '}
            {/* 64px is header height */}
            {/* Header section */}
            <div className="py-6">
              <h1 className="text-2xl font-semibold text-purple-800 mb-6">Campanhas</h1>

              {/* Filters section with fixed height */}
              <div className="h-[50px] flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Filtrar por:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-1 rounded-full text-sm transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-black text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Campaigns grid section - fills available space */}
            <div className="min-h-0 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                {filteredCampaigns.map(campaign => (
                  <div
                    key={campaign.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col"
                  >
                    <div className="relative pt-[56.25%]">
                      {' '}
                      {/* 16:9 aspect ratio */}
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-purple-800">{campaign.title}</h3>
                        <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
                          {categories.find(c => c.id === campaign.category)?.name}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 flex-1">{campaign.description}</p>
                      <div className="mt-auto">
                        <Progress value={campaign.progress} className="mb-2" />
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                          <span>MZN {campaign.current.toLocaleString()}</span>
                          <span>{campaign.progress}% alcançado</span>
                        </div>
                        <Button asChild className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                          <Link to={`/campanha/${campaign.id}`}>Detalhes</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Pagination section - fixed height */}
            <div className="py-6">
              <div className="flex justify-center items-center gap-4">
                <Button variant="outline" className="text-sm" disabled={currentPage === 1}>
                  Anterior
                </Button>
                <span className="text-sm text-gray-600">Página {currentPage} de 1</span>
                <Button variant="outline" className="text-sm" disabled={true}>
                  Próxima
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
