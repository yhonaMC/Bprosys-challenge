import { FinancialProduct } from '../types'

export const financialProducts: FinancialProduct[] = [
  {
    id: '1',
    name: 'DigiBanking Premium',
    type: 'Checking Account',
    category: 'account',
    interestRate: 0.5,
    description:
      'Our premium checking account with no monthly fees and high daily transfer limits.',
    benefits: [
      'No monthly maintenance fee',
      '24/7 customer service',
      'Free international transfers',
      'Premium digital card included'
    ],
    imageUrl: '/images/products/checking.jpg',
    monthlyFee: 0,
    minimumDeposit: 100
  },
  {
    id: '2',
    name: 'Savings Plus',
    type: 'Savings Account',
    category: 'account',
    interestRate: 2.5,
    description: 'A high-yield savings account to help your money grow faster.',
    benefits: [
      'Competitive interest rate',
      'No minimum balance required',
      'Easy access to your funds',
      'Automated savings plans'
    ],
    imageUrl: '/images/products/savings.jpg',
    monthlyFee: 0,
    minimumDeposit: 50
  },
  {
    id: '3',
    name: 'Elite Rewards Card',
    type: 'Credit Card',
    category: 'card',
    interestRate: 18.9,
    description:
      'Premium credit card with extensive rewards program and travel benefits.',
    benefits: [
      '5% cashback on travel purchases',
      '3% cashback on dining',
      '1% cashback on all other purchases',
      'No foreign transaction fees'
    ],
    imageUrl: '/images/products/elite-card.jpg',
    monthlyFee: 10
  },
  {
    id: '4',
    name: 'Everyday Debit',
    type: 'Debit Card',
    category: 'card',
    description:
      'Your everyday companion for purchases and ATM withdrawals worldwide.',
    benefits: [
      'No transaction fees',
      'Worldwide ATM access',
      'Contactless payments',
      'Real-time notifications'
    ],
    imageUrl: '/images/products/debit-card.jpg',
    monthlyFee: 0
  },
  {
    id: '5',
    name: 'Balanced Growth Fund',
    type: 'Investment Fund',
    category: 'investment',
    riskLevel: 'medium',
    description:
      'A balanced portfolio of stocks and bonds designed for steady long-term growth.',
    benefits: [
      'Professional portfolio management',
      'Diversified investment strategy',
      'Regular performance reports',
      'Flexible contribution options'
    ],
    imageUrl: '/images/products/balanced-fund.jpg',
    returnRate: 8.5
  },
  {
    id: '6',
    name: 'High Yield Bond',
    type: 'Bond',
    category: 'investment',
    riskLevel: 'low',
    interestRate: 3.8,
    description:
      'Corporate bonds with competitive yields and moderate risk profile.',
    benefits: [
      'Fixed income stream',
      'Lower risk than stocks',
      'Portfolio diversification',
      'Capital preservation focus'
    ],
    imageUrl: '/images/products/bond.jpg',
    termLength: 36,
    returnRate: 3.8
  },
  {
    id: '7',
    name: 'Aggressive Growth Fund',
    type: 'Investment Fund',
    category: 'investment',
    riskLevel: 'high',
    description: 'Stock-focused fund aiming for maximum long-term growth.',
    benefits: [
      'Potential for high returns',
      'Focus on emerging technologies',
      'Global market exposure',
      'Active management strategy'
    ],
    imageUrl: '/images/products/aggressive-fund.jpg',
    returnRate: 12.5
  },
  {
    id: '8',
    name: 'Home Insurance Plus',
    type: 'Property Insurance',
    category: 'insurance',
    description:
      'Comprehensive home insurance covering property damage and liability.',
    benefits: [
      'Dwelling coverage',
      'Personal property protection',
      'Liability coverage',
      'Additional living expenses coverage'
    ],
    imageUrl: '/images/products/home-insurance.jpg',
    coverage: 'Up to $500,000'
  },
  {
    id: '9',
    name: 'Life Assurance Premium',
    type: 'Life Insurance',
    category: 'insurance',
    description:
      "Protect your family's financial future with our comprehensive life insurance plan.",
    benefits: [
      'Death benefit',
      'Cash value accumulation',
      'Premium waiver options',
      'Critical illness riders available'
    ],
    imageUrl: '/images/products/life-insurance.jpg',
    coverage: 'Up to $1,000,000'
  },
  {
    id: '10',
    name: 'Personal Loan Flex',
    type: 'Personal Loan',
    category: 'loan',
    interestRate: 8.9,
    description:
      'Flexible personal loan with competitive rates and no early repayment fees.',
    benefits: [
      'Fast approval process',
      'No collateral required',
      'Flexible repayment terms',
      'No early repayment penalties'
    ],
    imageUrl: '/images/products/personal-loan.jpg',
    termLength: 60
  },
  {
    id: '11',
    name: 'Home Mortgage Pro',
    type: 'Mortgage',
    category: 'loan',
    interestRate: 4.5,
    description:
      'Competitive mortgage rates with flexible terms and dedicated advisor support.',
    benefits: [
      'Fixed and variable rates available',
      'Up to 90% loan-to-value ratio',
      'Free property valuation',
      'Dedicated mortgage advisor'
    ],
    imageUrl: '/images/products/mortgage.jpg',
    termLength: 360
  },
  {
    id: '12',
    name: 'Business Credit Line',
    type: 'Business Loan',
    category: 'loan',
    interestRate: 6.5,
    description:
      'Flexible credit line for businesses with competitive rates and tailored repayment options.',
    benefits: [
      'Only pay interest on what you borrow',
      'Quick access to funds',
      'No application fees',
      'Flexible repayment options'
    ],
    imageUrl: '/images/products/business-credit.jpg',
    termLength: 84
  }
]
