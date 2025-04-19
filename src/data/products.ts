import { IProduct } from "@/types/product";

export const products: IProduct[] = [
    {
      id: 'prod-001',
      name: 'Cuenta Ahorro Seguro',
      type: 'Cuenta',
      interestRate: 1.2,
      category: 'Ahorro',
      riskLevel: 'Bajo',
      description: 'Cuenta de ahorro con bajo riesgo y disponibilidad inmediata.',
      imagenes: "/assets/img_ahorro.jpg",
    },
    {
      id: 'prod-002',
      name: 'Tarjeta Crédito Flexible',
      type: 'Tarjeta',
      interestRate: 24.5,
      category: 'Crédito',
      riskLevel: 'Medio',
      description: 'Línea de crédito revolvente con beneficios de cashback.',
      imagenes: "/assets/img_tarjeta.jpeg",
    },
    {
      id: 'prod-003',
      name: 'Fondo Inversión Dinámico',
      type: 'Fondo',
      interestRate: 6.8,
      category: 'Inversión',
      riskLevel: 'Alto',
      description: 'Fondo mutuo con rendimiento alto y riesgo controlado.',
      imagenes: "/assets/img_fondo.jpg",
    },
    {
      id: 'prod-004',
      name: 'Seguro de Vida Básico',
      type: 'Seguro',
      category: 'Ahorro',
      riskLevel: 'Bajo',
      description: 'Cobertura esencial con prima accesible y respaldo garantizado.',
      imagenes: "/assets/img_seguro}.jpg"
    },
    {
      id: 'prod-005',
      name: 'Cuenta Nómina Digital',
      type: 'Cuenta',
      interestRate: 0.8,
      category: 'Ahorro',
      riskLevel: 'Bajo',
      description: 'Cuenta especial para el manejo de ingresos laborales.',
      imagenes: "/assets/img_cuentaNomina.jpg"
    },
    {
      id: 'prod-006',
      name: 'Tarjeta Prepago Joven',
      type: 'Tarjeta',
      interestRate: 0,
      category: 'Crédito',
      riskLevel: 'Bajo',
      description: 'Tarjeta prepago pensada para estudiantes y menores de 25 años.',
      imagenes: "/assets/img_estudiante.jpg"
    },
    {
      id: 'prod-007',
      name: 'Fondo Sostenible',
      type: 'Fondo',
      interestRate: 5.2,
      category: 'Inversión',
      riskLevel: 'Medio',
      description: 'Invierte en proyectos sostenibles con impacto ambiental positivo.',
      imagenes:"/assets/img_sotenible.jpg"
    },
    {
      id: 'prod-008',
      name: 'Seguro Hogar Total',
      type: 'Seguro',
      category: 'Ahorro',
      riskLevel: 'Medio',
      description: 'Protección completa para vivienda principal y bienes personales.',
      imagenes: "/assets/img_hogar.jpg"
    }
  ];