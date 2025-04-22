'use client'

import React from 'react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
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

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id as string

  const product = financialProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const renderRateInfo = () => {
    if (product.interestRate) {
      return (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 !text-black">
            Tasa de Interés
          </h3>
          <RateDisplay>
            <span className="rate">{product.interestRate.toFixed(1)}</span>
            <span className="percent">% anual</span>
          </RateDisplay>
        </div>
      )
    }

    if (product.returnRate) {
      return (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 !text-black">
            Retorno Esperado
          </h3>
          <RateDisplay>
            <span className="rate">{product.returnRate.toFixed(1)}</span>
            <span className="percent">% anual</span>
          </RateDisplay>
          <p className="text-sm text-gray-500 mt-1">
            Promedio histórico, retornos no garantizados
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
          <h3 className="text-lg font-semibold mb-2">Cuota Mensual</h3>
          <p className="text-gray-900">${product.monthlyFee.toFixed(2)}</p>
        </div>
      )
    }

    if (product.minimumDeposit) {
      infoItems.push(
        <div key="minimumDeposit" className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Depósito Mínimo</h3>
          <p className="text-gray-900">${product.minimumDeposit.toFixed(2)}</p>
        </div>
      )
    }

    if (product.termLength) {
      infoItems.push(
        <div key="termLength" className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Plazo</h3>
          <p className="text-gray-900">{product.termLength} meses</p>
        </div>
      )
    }

    if (product.coverage) {
      infoItems.push(
        <div key="coverage" className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Cobertura</h3>
          <p className="text-gray-900">{product.coverage}</p>
        </div>
      )
    }

    return infoItems.length > 0 ? (
      <DetailSection>
        <h3>Detalles del Producto</h3>
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
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition-all transform hover:-translate-x-1 shadow-sm"
              tabIndex={0}
              aria-label="Volver a productos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              <span className="font-medium">Volver al Catálogo</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <CategoryTag>{product.category}</CategoryTag>
                  {product.riskLevel && (
                    <Badge className={product.riskLevel}>
                      Riesgo{' '}
                      {product.riskLevel === 'low'
                        ? 'Bajo'
                        : product.riskLevel === 'medium'
                        ? 'Medio'
                        : 'Alto'}
                    </Badge>
                  )}
                </div>

                <ProductHeader>
                  <h2>{product.name}</h2>
                  <div className="type">{product.type}</div>
                </ProductHeader>

                <DetailSection>
                  <h3>Descripción</h3>
                  <p className="text-gray-700">{product.description}</p>
                </DetailSection>

                <DetailSection>
                  <h3>Beneficios Principales</h3>
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

                <div className="mt-6 space-y-4">
                  <Button
                    className="primary w-full"
                    tabIndex={0}
                    aria-label={`Solicitar ${product.name}`}
                  >
                    Solicitar Ahora
                  </Button>
                  <Button
                    className="secondary w-full"
                    tabIndex={0}
                    aria-label="Contactar a un representante"
                  >
                    Hablar con un Asesor
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
