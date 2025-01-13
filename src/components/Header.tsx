import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-purple-600 text-white h-[64px] flex items-center">
      <div className="w-full max-w-[1920px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">Pfuna Makwero</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/campanhas" className="text-white hover:text-purple-100">
                Campanhas
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="text-white hover:text-purple-100">
                Sobre
              </Link>
            </li>
            <li>
              <Button variant="secondary" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
