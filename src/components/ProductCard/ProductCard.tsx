import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  ProductImage,
  RateDisplay,
  Badge,
  CategoryTag
} from '../ui/StyledComponents'
import { ProductCardProps } from './ProductCard.type'

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderRiskBadge = () => {
    if (!product.riskLevel) return null

    const riskLabels = {
      low: 'Bajo',
      medium: 'Medio',
      high: 'Alto'
    }

    return (
      <Badge className={product.riskLevel}>
        Riesgo {riskLabels[product.riskLevel as keyof typeof riskLabels]}
      </Badge>
    )
  }

  const renderRate = () => {
    if (product.interestRate) {
      return (
        <div>
          <span className="text-xs text-gray-500 font-bold mb-1 line-clamp-2">
            {product.typePercentage}
          </span>
          <RateDisplay>
            <span className="rate">{product.interestRate.toFixed(1)}</span>
            <span className="percent">%</span>
          </RateDisplay>
        </div>
      )
    }

    if (product.returnRate) {
      return (
        <RateDisplay>
          <span className="rate">{product.returnRate.toFixed(1)}</span>
          <span className="percent">%</span>
        </RateDisplay>
      )
    }

    return null
  }

  return (
    <Link
      href={`/product/${product.id}`}
      className="block h-full"
      tabIndex={0}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <Card>
        <ProductImage
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          aria-hidden="true"
        />
        <CardContent>
          <div className="flex justify-between items-start mb-2">
            <CategoryTag>{product.category}</CategoryTag>

            {renderRiskBadge()}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{product.type}</p>

          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              {renderRate()}
              <span className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                Ver detalles
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard
