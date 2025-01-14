import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Header } from '../components/Header';

export function CreateInstitution() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, descricao, website });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">
              Criar Nova Instituição de Caridade
            </CardTitle>
            <CardDescription>
              Preencha os detalhes da sua instituição para começar a criar campanhas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="nome">Nome da Instituição</Label>
                  <Input
                    id="nome"
                    placeholder="Digite o nome da sua instituição"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva a missão e os objetivos da sua instituição"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://www.suainstituicao.org"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="text-purple-600 border-purple-600">
              Cancelar
            </Button>
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
              Criar Instituição
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
