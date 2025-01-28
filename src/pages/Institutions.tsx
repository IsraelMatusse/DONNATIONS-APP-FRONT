import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const allInstitutions = [
  {
    id: 1,
    name: 'Hospital Central de Maputo',
    description:
      'O maior hospital público de Moçambique, oferecendo uma ampla gama de serviços médicos.',
    image: '/images/hospital-maputo.jpg',
    campaignsCount: 3,
    totalRaised: 500000,
  },
  {
    id: 2,
    name: 'Escola Comunitária de Nampula',
    description:
      'Uma escola que fornece educação de qualidade para crianças desfavorecidas em Nampula.',
    image: '/images/school-nampula.jpg',
    campaignsCount: 2,
    totalRaised: 250000,
  },
  {
    id: 3,
    name: 'Abrigo de Animais de Beira',
    description:
      'Um abrigo dedicado ao resgate e cuidado de animais abandonados na cidade de Beira.',
    image: '/images/animal-shelter-beira.jpg',
    campaignsCount: 4,
    totalRaised: 350000,
  },
];

export function InstitutionsList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInstitutions = allInstitutions.filter(institution =>
    institution.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Instituições</h1>

        <div className="mb-6">
          <Input
            placeholder="Pesquisar instituições..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full max-w-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstitutions.map(institution => (
            <Card key={institution.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={institution.image} alt={institution.name} />
                    <AvatarFallback>{institution.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-purple-800">{institution.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {institution.description}
                </CardDescription>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{institution.campaignsCount} campanhas</span>
                  <span>R$ {institution.totalRaised.toLocaleString()} arrecadados</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  <Link to={`/instituicao/${institution.id}`}>Ver Detalhes</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
