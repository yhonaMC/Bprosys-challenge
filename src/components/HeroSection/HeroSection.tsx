import React from 'react'
import { Container } from '../ui/StyledComponents'
import { Button } from '../ui/StyledComponents'
import { HeroImage, HeroText, HeroWrapper } from './HeroSection.style'
import { ActionButtons } from './HeroSection.style'
import { HeroContent } from './HeroSection.style'
import Image from 'next/image'
import heroMobile from '../../../public/images/digitalBank.avif'

const HeroSection: React.FC = () => {
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) => {
    e.preventDefault()

    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <HeroWrapper>
      <Container>
        <HeroContent>
          <HeroText>
            <h2>Banca que te pone en control</h2>
            <p>
              Productos financieros modernos, seguros y accesibles diseñados
              para tu estilo de vida. Administra tu dinero con confianza y
              disfruta de soluciones personalizadas que se ajustan a tus
              necesidades.
            </p>
            <ActionButtons>
              <Button
                className="secondary"
                tabIndex={0}
                aria-label="Explorar nuestros productos"
                onClick={(e) => handleNavLinkClick(e, '#products')}
              >
                Explorar productos
              </Button>
            </ActionButtons>
          </HeroText>
          <HeroImage>
            <picture>
              <source media="(min-width: 768px)" srcSet={heroMobile.src} />
              <Image
                src={heroMobile}
                alt="Persona usando la aplicación móvil de DigitalBank"
                width={500}
                height={300}
              />
            </picture>
          </HeroImage>
        </HeroContent>
      </Container>
    </HeroWrapper>
  )
}

export default HeroSection
