import React from 'react'
import { Container } from '../ui/StyledComponents'
import { Button } from '../ui/StyledComponents'
import { HeroImage, HeroText, HeroWrapper } from './HeroSection.style'
import { ActionButtons } from './HeroSection.style'
import { HeroContent } from './HeroSection.style'

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroContent>
          <HeroText>
            <h2>Banking that puts you in control</h2>
            <p>
              Modern, secure and accessible financial products designed for your
              lifestyle. Manage your money with confidence and enjoy
              personalized solutions that fit your needs.
            </p>
            <ActionButtons>
              <Button
                className="primary"
                tabIndex={0}
                aria-label="Open an account"
              >
                Open an account
              </Button>
              <Button
                className="secondary"
                tabIndex={0}
                aria-label="Explore our products"
              >
                Explore products
              </Button>
            </ActionButtons>
          </HeroText>
          <HeroImage>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/images/products/hero-desktop.jpg"
              />
              <img
                src="/images/products/hero-mobile.jpg"
                alt="Person using DigitalBank mobile app"
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
