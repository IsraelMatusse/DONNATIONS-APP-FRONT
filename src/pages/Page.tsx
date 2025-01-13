import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Header } from '../components/Header';

const featuredCampaigns = [
  {
    id: 1,
    title: 'Ajude Vitimas de Cheias',
    description: 'Ajude as pessoas que sofrem de desastres naturais',
    image: '/assets/desastres naturais.jpg',
    category: 'social',
    current: 37500,
    goal: 50000,
    progress: 75,
  },
  {
    id: 2,
    title: 'Ajude o Gabriel',
    description: 'Apoie o Gabriel a fazer a sua operação neurologica',
    category: 'saúde',
    current: 45000,
    goal: 100000,
    image: '/assets/crianca deficiente.jpg',
    progress: 45,
  },
  {
    id: 3,
    title: 'Ajude A Elsa com os Estudos',
    description: 'Apoie A Elsa com o financiamento da Viagem de Estudos',
    category: 'educacao',
    current: 37500,
    goal: 50000,
    image: '/assets/bolsa de estudos mulher.jpg',
    progress: 60,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <main>
        <section className="py-20 text-center">
          <div className="w-full max-w-full px-4">
            <h1 className="text-5xl font-bold mb-6 text-purple-800">Faça a Diferença Hoje!</h1>
            <p className="text-xl mb-8 text-purple-600">
              Junte-se a nós para tornar o mundo um lugar melhor, uma doação de cada vez.
            </p>
            <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
              <Link to="/campanhas">Ver Todas as Campanhas</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="w-full max-w-full px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center text-purple-800">
              Campanhas em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCampaigns.map(campaign => (
                <Card key={campaign.id} className="overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-purple-700">{campaign.title}</CardTitle>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={campaign.progress} className="mb-2" />
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>MZN {campaign.current.toLocaleString()}</span>
                      <span>{campaign.progress}% alcançado</span>
                    </div>{' '}
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                      <Link to={`/campanha/${campaign.id}`}>Detalhes</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-50">
          <div className="w-full max-w-full px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center text-purple-800">
              Como Funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-pink-500">1. Crie uma Campanha</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700">
                    Defina sua causa e estabeleça uma meta de arrecadação.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-pink-500">2. Compartilhe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700">
                    Divulgue sua campanha nas redes sociais e entre amigos.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-pink-500">3. Faça a Diferença</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700">
                    Acompanhe as doações e veja o impacto da sua campanha.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-pink-100 text-center">
          <div className="w-full max-w-full px-4">
            <h2 className="text-3xl font-semibold mb-6 text-purple-800">Pronto para Começar?</h2>
            <p className="text-xl mb-8 text-purple-600">
              Crie sua instituição de caridade ou campanha agora mesmo!
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link to="/criar-instituicao">Criar Instituição</Link>
              </Button>
              <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                <Link to="/criar-campanha">Criar Campanha</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="w-full max-w-full px-4 text-center">
          <p>&copy; 2025 Pfuna Makwero. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
