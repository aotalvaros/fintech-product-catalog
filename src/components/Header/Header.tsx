import { BadgeDollarSign } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Header() {
    return (
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
        <div className='flex items-center gap-2'>
          <h1 className="text-xl font-bold">Fintech xyz</h1>
          <BadgeDollarSign 
            data-testid="lucide-dollar-sign"
          />
        </div>
        <nav>
          <ul className="flex gap-4 text-[1rem]">
          <li><Link href="/" data-testid="home-link">Inicio</Link></li>
          <li><Link href="/about" data-testid="about-link">Sobre nosotros</Link></li>
          <li><Link href="/contact" data-testid="contact-link">Contacto</Link></li>
          </ul>
        </nav>
      </header>
    );
  }