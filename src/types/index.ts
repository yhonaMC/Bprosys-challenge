export type RiskLevel = 'low' | 'medium' | 'high'

export type ProductCategory =
  | 'Cuentas'
  | 'Tarjetas'
  | 'Inversiones'
  | 'Seguros'
  | 'Préstamos'

export interface FinancialProduct {
  id: string
  name: string
  type: string
  category: ProductCategory
  interestRate?: number
  riskLevel?: RiskLevel
  description: string
  benefits: string[]
  imageUrl: string
  monthlyFee?: number
  minimumDeposit?: number
  termLength?: number
  returnRate?: number
  coverage?: string
}

export interface MobileMenuProps {
  $isOpen: boolean
}
