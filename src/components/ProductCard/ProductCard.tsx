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
import { FinancialProduct } from '../../types'

interface ProductCardProps {
  product: FinancialProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderRiskBadge = () => {
    if (!product.riskLevel) return null

    return (
      <Badge className={product.riskLevel}>
        {product.riskLevel.charAt(0).toUpperCase() + product.riskLevel.slice(1)}{' '}
        Risk
      </Badge>
    )
  }

  const renderRate = () => {
    if (product.interestRate) {
      return (
        <RateDisplay>
          <span className="rate">{product.interestRate.toFixed(1)}</span>
          <span className="percent">%</span>
        </RateDisplay>
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
    <Link href={`/product/${product.id}`} passHref legacyBehavior>
      <a
        className="block h-full"
        tabIndex={0}
        aria-label={`View details of ${product.name}`}
      >
        <Card>
          <ProductImage
            style={{ backgroundImage: `url(/images/products/placeholder.jpg)` }}
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
                <span className="text-sm font-medium text-blue-600">
                  View details
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </Link>
  )
}

export default ProductCard
