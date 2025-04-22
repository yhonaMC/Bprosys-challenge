'use client'

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import RiskPerformanceChart from '@/components/RiskPerformanceChart/RiskPerformanceChart'
import { financialProducts } from '@/data/products'
import {
  Container,
  Button,
  Badge,
  RateDisplay,
  BenefitsList,
  ProductHeader,
  DetailSection,
  CategoryTag
} from '@/components/ui/StyledComponents'

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = financialProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const renderRateInfo = () => {
    if (product.interestRate) {
      return (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Interest Rate</h3>
          <RateDisplay>
            <span className="rate">{product.interestRate.toFixed(1)}</span>
            <span className="percent">% p.a.</span>
          </RateDisplay>
        </div>
      )
    }

    if (product.returnRate) {
      return (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Expected Return</h3>
          <RateDisplay>
            <span className="rate">{product.returnRate.toFixed(1)}</span>
            <span className="percent">% p.a.</span>
          </RateDisplay>
          <p className="text-sm text-gray-500 mt-1">
            Historical average, returns not guaranteed
          </p>
        </div>
      )
    }

    return null
  }

  const renderAdditionalInfo = () => {
    const infoItems = []

    if (product.monthlyFee !== undefined) {
      infoItems.push(
        <div key="monthlyFee" className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Monthly Fee</h3>
          <p className="text-gray-900">${product.monthlyFee.toFixed(2)}</p>
        </div>
      )
    }

    if (product.minimumDeposit) {
      infoItems.push(
        <div key="minimumDeposit" className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Minimum Deposit</h3>
          <p className="text-gray-900">${product.minimumDeposit.toFixed(2)}</p>
        </div>
      )
    }

    if (product.termLength) {
      infoItems.push(
        <div key="termLength" className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Term Length</h3>
          <p className="text-gray-900">{product.termLength} months</p>
        </div>
      )
    }

    if (product.coverage) {
      infoItems.push(
        <div key="coverage" className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Coverage</h3>
          <p className="text-gray-900">{product.coverage}</p>
        </div>
      )
    }

    return infoItems.length > 0 ? (
      <DetailSection>
        <h3>Product Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{infoItems}</div>
      </DetailSection>
    ) : null
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow py-12">
        <Container>
          <div className="flex items-center mb-8">
            <Link href="/" passHref legacyBehavior>
              <a
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                tabIndex={0}
                aria-label="Back to products"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Catalog
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <CategoryTag>{product.category}</CategoryTag>
                  {product.riskLevel && (
                    <Badge className={product.riskLevel}>
                      {product.riskLevel.charAt(0).toUpperCase() +
                        product.riskLevel.slice(1)}{' '}
                      Risk
                    </Badge>
                  )}
                </div>

                <ProductHeader>
                  <h2>{product.name}</h2>
                  <div className="type">{product.type}</div>
                </ProductHeader>

                <DetailSection>
                  <h3>Description</h3>
                  <p className="text-gray-700">{product.description}</p>
                </DetailSection>

                <DetailSection>
                  <h3>Key Benefits</h3>
                  <BenefitsList>
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </BenefitsList>
                </DetailSection>

                {renderAdditionalInfo()}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-24">
                {renderRateInfo()}

                {(product.riskLevel || product.returnRate) && (
                  <RiskPerformanceChart
                    riskLevel={product.riskLevel}
                    returnRate={product.returnRate || product.interestRate}
                  />
                )}

                <div className="mt-6 space-y-4">
                  <Button
                    className="primary w-full"
                    tabIndex={0}
                    aria-label={`Apply for ${product.name}`}
                  >
                    Apply Now
                  </Button>
                  <Button
                    className="secondary w-full"
                    tabIndex={0}
                    aria-label="Contact a representative"
                  >
                    Talk to a Representative
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
