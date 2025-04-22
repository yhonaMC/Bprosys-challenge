'use client'
import React, { useState } from 'react'
import { Container } from '../components/ui/StyledComponents'
import { financialProducts } from '../data/products'
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter'
import Footer from '@/components/Footer/Footer'
import ProductCard from '@/components/ProductCard/ProductCard'
import AboutSection from '@/components/AboutSection/AboutSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts =
    selectedCategory === 'all'
      ? financialProducts
      : financialProducts.filter(
          (product) => product.category === selectedCategory
        )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <HeroSection />

        <AnimatedSection id="products" className="py-16">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestros Productos Financieros
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra gama de soluciones financieras diseñadas para
                ayudarte a lograr tus objetivos, ya sea que estés ahorrando,
                gastando, invirtiendo o planificando para el futuro.
              </p>
            </div>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
