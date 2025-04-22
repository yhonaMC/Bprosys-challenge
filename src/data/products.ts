import { FinancialProduct } from '../types'

export const financialProducts: FinancialProduct[] = [
  {
    id: '1',
    name: 'DigiBanking Premium',
    type: 'Cuenta Corriente',
    category: 'Cuentas',
    interestRate: 0.5,
    description:
      'Nuestra cuenta corriente premium sin comisiones mensuales y con altos límites de transferencia diaria.',
    benefits: [
      'Sin comisión de mantenimiento mensual',
      'Servicio al cliente 24/7',
      'Transferencias internacionales gratuitas',
      'Tarjeta digital premium incluida'
    ],
    imageUrl: '/images/mesa_management.jpg',
    monthlyFee: 0,
    minimumDeposit: 100,
    typePercentage: 'Tasa de interés'
  },
  {
    id: '2',
    name: 'Ahorro Plus',
    type: 'Cuenta de Ahorro',
    category: 'Cuentas',
    interestRate: 2.5,
    description:
      'Una cuenta de ahorro de alto rendimiento para hacer crecer tu dinero más rápido.',
    benefits: [
      'Tasa de interés competitiva',
      'Sin saldo mínimo requerido',
      'Fácil acceso a tus fondos',
      'Planes de ahorro automatizados'
    ],
    imageUrl: '/images/security.png',
    monthlyFee: 0,
    minimumDeposit: 50,
    typePercentage: 'Tasa de interés'
  },
  {
    id: '3',
    name: 'Tarjeta Elite Rewards',
    type: 'Tarjeta de Crédito',
    category: 'Tarjetas',
    interestRate: 18.9,
    description:
      'Tarjeta de crédito premium con un amplio programa de recompensas y beneficios de viaje.',
    benefits: [
      '5% de cashback en compras de viaje',
      '3% de cashback en restaurantes',
      '1% de cashback en todas las demás compras',
      'Sin comisiones por transacciones en el extranjero'
    ],
    imageUrl: '/images/tdb-1.avif',
    monthlyFee: 10,
    typePercentage: 'Cuota de mantenimiento'
  },
  {
    id: '4',
    name: 'Débito Diario',
    type: 'Tarjeta de Débito',
    category: 'Tarjetas',
    interestRate: 18.9,
    description:
      'Tu compañera diaria para compras y retiros en cajeros automáticos en todo el mundo.',
    benefits: [
      'Sin comisiones por transacción',
      'Acceso a cajeros automáticos en todo el mundo',
      'Pagos sin contacto',
      'Notificaciones en tiempo real'
    ],
    imageUrl: '/images/tdb-2.avif',
    monthlyFee: 0,
    typePercentage: 'Cuota de mantenimiento'
  },
  {
    id: '5',
    name: 'Fondo de Crecimiento Equilibrado',
    type: 'Fondo de Inversión',
    category: 'Inversiones',
    riskLevel: 'medium',
    description:
      'Una cartera equilibrada de acciones y bonos diseñada para un crecimiento estable a largo plazo.',
    benefits: [
      'Gestión profesional de la cartera',
      'Estrategia de inversión diversificada',
      'Informes regulares de rendimiento',
      'Opciones de contribución flexibles'
    ],
    imageUrl: '/images/images.jpeg',
    returnRate: 8.5,
    interestRate: 4.5,
    typePercentage: 'Tasa de interés'
  },
  {
    id: '6',
    name: 'Bono de Alto Rendimiento',
    type: 'Bono',
    category: 'Inversiones',
    riskLevel: 'low',
    interestRate: 3.8,
    description:
      'Bonos corporativos con rendimientos competitivos y perfil de riesgo moderado.',
    benefits: [
      'Flujo de ingresos fijo',
      'Menor riesgo que las acciones',
      'Diversificación de cartera',
      'Enfoque en la preservación del capital'
    ],
    imageUrl: '/images/proteger-inversiones.jpg',
    termLength: 36,
    returnRate: 3.8,
    typePercentage: 'Tasa de interés'
  },

  {
    id: '7',
    name: 'Seguro de Hogar Plus',
    type: 'Seguro de Propiedad',
    category: 'Seguros',
    interestRate: 1.5,
    description:
      'Seguro integral del hogar que cubre daños a la propiedad y responsabilidad civil.',
    benefits: [
      'Cobertura de vivienda',
      'Protección de bienes personales',
      'Cobertura de responsabilidad civil',
      'Cobertura adicional de gastos de vida'
    ],
    imageUrl: '/images/segurossalud.jpg',
    coverage: 'Hasta $500,000',
    typePercentage: 'Prima mensual'
  },

  {
    id: '8',
    name: 'Préstamo Personal Flex',
    type: 'Préstamo Personal',
    category: 'Préstamos',
    interestRate: 8.9,
    description:
      'Préstamo personal flexible con tasas competitivas y sin comisiones por reembolso anticipado.',
    benefits: [
      'Proceso de aprobación rápido',
      'No se requiere garantía',
      'Términos de pago flexibles',
      'Sin penalizaciones por pago anticipado'
    ],
    imageUrl: '/images/prestamo-financiero.avif',
    termLength: 60,
    typePercentage: 'Tasa de interés'
  },
  {
    id: '9',
    name: 'Hipoteca Pro',
    type: 'Hipoteca',
    category: 'Préstamos',
    interestRate: 4.5,
    description:
      'Tasas hipotecarias competitivas con términos flexibles y apoyo de un asesor dedicado.',
    benefits: [
      'Tasas fijas y variables disponibles',
      'Hasta el 90% de relación préstamo-valor',
      'Valoración de propiedad gratuita',
      'Asesor hipotecario dedicado'
    ],
    imageUrl: '/images/prestamo-personal.jpg',
    termLength: 360,
    typePercentage: 'Tasa de interés'
  }
]

export const footerLinks = [
  {
    title: 'Productos',
    links: [
      { label: 'Cuentas', href: '#' },
      { label: 'Tarjetas', href: '#' },
      { label: 'Préstamos', href: '#' },
      { label: 'Inversiones', href: '#' },
      { label: 'Seguros', href: '#' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', href: '#' },
      { label: 'Carreras', href: '#' },
      { label: 'Noticias', href: '#' },
      { label: 'Contacto', href: '#' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Soporte', href: '#' },
      { label: 'Preguntas Frecuentes', href: '#' },
      { label: 'Seguridad', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' }
    ]
  }
]

export const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '#products' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' }
]

export const categories: { id: string; label: string }[] = [
  { id: 'all', label: 'Todos los Productos' },
  { id: 'Cuentas', label: 'Cuentas' },
  { id: 'Tarjetas', label: 'Tarjetas' },
  { id: 'Inversiones', label: 'Inversiones' },
  { id: 'Seguros', label: 'Seguros' },
  { id: 'Préstamos', label: 'Préstamos' }
]
