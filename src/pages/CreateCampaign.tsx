import type React from 'react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

const categories = [
  { id: 'saude', name: 'Saúde' },
  { id: 'educacao', name: 'Educação' },
  { id: 'desastre', name: 'Desastre Natural' },
  { id: 'animais', name: 'Animais' },
  { id: 'social', name: 'Causas Sociais' },
];

export function CreateCampaign() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [category, setCategory] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the campaign creation process
    console.log('Campaign submitted:', { title, description, goal, category, endDate, image });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Criar Nova Campanha</CardTitle>
            <CardDescription>Preencha os detalhes da sua campanha de arrecadação</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="title">Título da Campanha</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Digite o título da campanha"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descreva sua campanha"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="goal">Meta de Arrecadação (MZN)</Label>
                  <Input
                    id="goal"
                    type="number"
                    value={goal}
                    onChange={e => setGoal(e.target.value)}
                    placeholder="Digite o valor da meta"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endDate">Data de Término</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Imagem da Campanha</Label>
                  <Input
                    id="image"
                    type="file"
                    onChange={e => setImage(e.target.files ? e.target.files[0] : null)}
                    accept="image/*"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="border-purple-500 text-purple-700">
              Cancelar
            </Button>
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
              Criar Campanha
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
