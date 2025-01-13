import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Card, CardContent } from '../components/ui/card';
import { Header } from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { DonationPopup } from '@/components/DonationPopUp';
import { useState } from 'react';

export function CampaignDetails() {
  const { id } = useParams();

  const campaign = {
    id,
    title: 'Ajude o Abrigo de Animais',
    institution: 'Abrigo Feliz',
    category: 'Animais',
    description: 'Nosso abrigo precisa de ajuda para continuar cuidando dos animais abandonados...',
    goal: 50000,
    current: 35000,
    daysLeft: 15,
    image: '/assets/8lpyx3tilxl33526xqz2efvri0hrks.jpeg',
    updates: [
      { date: '2024-01-10', content: 'Conseguimos comprar 500kg de ração!' },
      { date: '2024-01-05', content: 'Iniciamos as reformas no canil' },
    ],
    donors: [
      { name: 'Maria S.', amount: 100, message: 'Boa sorte!' },
      { name: 'João P.', amount: 50, message: 'Continuem o ótimo trabalho!' },
    ],
  };
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);

  const progress = (campaign.current / campaign.goal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-8">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-[400px] object-cover rounded-lg mb-6"
            />
            <h1 className="text-3xl font-bold text-purple-800 mb-4">{campaign.title}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>{campaign.institution[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{campaign.institution}</p>
                <p className="text-sm text-muted-foreground">Instituição Verificada</p>
              </div>
            </div>

            <Tabs defaultValue="sobre" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="sobre">Sobre</TabsTrigger>
                <TabsTrigger value="atualizacoes">Atualizações</TabsTrigger>
                <TabsTrigger value="doadores">Doadores</TabsTrigger>
              </TabsList>
              <TabsContent value="sobre">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-700">{campaign.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="atualizacoes">
                <Card>
                  <CardContent className="pt-6">
                    {campaign.updates.map((update, index) => (
                      <div key={index} className="mb-4 pb-4 border-b last:border-0">
                        <p className="text-sm text-muted-foreground">{update.date}</p>
                        <p className="mt-1">{update.content}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="doadores">
                <Card>
                  <CardContent className="pt-6">
                    {campaign.donors.map((donor, index) => (
                      <div key={index} className="mb-4 pb-4 border-b last:border-0">
                        <div className="flex justify-between items-start">
                          <p className="font-semibold">{donor.name}</p>
                          <p className="text-green-600">MZN {donor.amount}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{donor.message}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Barra Lateral */}
          <div className="lg:col-span-4">
            <Card className="sticky top-4">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold">MZN {campaign.current}</span>
                    <span className="text-muted-foreground">meta MZN {campaign.goal}</span>
                  </div>
                  <Progress value={progress} className="mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{progress.toFixed(1)}% alcançado</span>
                    <span>{campaign.daysLeft} dias restantes</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white mb-4"
                  onClick={() => setIsDonationPopupOpen(true)}
                >
                  Doar Agora
                </Button>
                <Button variant="outline" className="w-full">
                  Compartilhar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <DonationPopup
        isOpen={isDonationPopupOpen}
        onClose={() => setIsDonationPopupOpen(false)}
        campaignTitle={campaign.title}
      />
    </div>
  );
}
