import React from 'react'
import Link from 'next/link'
import {
  FooterBottom,
  FooterBranding,
  FooterContainer,
  FooterLinks
} from './Footer.style'
import { FooterWrapper } from './Footer.style'
import { Container } from '../ui/StyledComponents'
import { footerLinks } from '@/data/products'

const Footer: React.FC = () => {
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === '/' || href.startsWith('/') || href === '#') return
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterBranding>
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                style={{ marginRight: '0.5rem' }}
              >
                <rect width="32" height="32" rx="8" fill="#003087" />
                <path
                  d="M8 16C8 11.5817 11.5817 8 16 8V24C11.5817 24 8 20.4183 8 16Z"
                  fill="white"
                />
                <path
                  d="M16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24V8Z"
                  fill="#169BD7"
                />
              </svg>
              DigitalBank
            </h3>
            <p>
              Empoderando a individuos y empresas con soluciones financieras
              innovadoras. Únete a nuestra misión de hacer la banca simple,
              accesible y segura.
            </p>
          </FooterBranding>

          {footerLinks.map((column) => (
            <FooterLinks key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-800 transition-colors"
                      tabIndex={0}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterLinks>
          ))}
        </FooterContainer>

        <FooterBottom>
          <p>
            © {new Date().getFullYear()} DigitalBank. Todos los derechos
            reservados.
          </p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
