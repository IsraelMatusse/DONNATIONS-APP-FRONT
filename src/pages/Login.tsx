import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Separator } from '../components/ui/separator';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the login process
    console.log('Login submitted:', { email, password, rememberMe });
    // Implement actual login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-800">Entrar</CardTitle>
            <CardDescription className="text-center">
              Faça login para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={rememberMe}
                    onCheckedChange={checked => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="rememberMe" className="text-sm">
                    Lembrar-me
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Entrar
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <Link to="/recuperar-senha" className="text-sm text-purple-600 hover:underline">
                Esqueceu sua senha?
              </Link>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-4">
              <Button variant="outline" className="w-full">
                <FaGoogle className="mr-2" />
                Entrar com Google
              </Button>
              <Button variant="outline" className="w-full">
                <FaFacebook className="mr-2" />
                Entrar com Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <Link to="/cadastro" className="text-purple-600 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
