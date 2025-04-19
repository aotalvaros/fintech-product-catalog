export interface IProduct {
    id: string;
    name: string;
    type: 'Cuenta' | 'Tarjeta' | 'Fondo' | 'Seguro' | string;
    category: 'Ahorro' | 'Inversión' | 'Crédito' | string;
    description: string;
    imagenes: string
    interestRate?: number; 
    riskLevel?: 'Bajo' | 'Medio' | 'Alto' | string;
  }