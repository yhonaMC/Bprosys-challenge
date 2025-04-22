import React from 'react'
import Link from 'next/link'
import {
  FooterBottom,
  FooterBranding,
  FooterContainer,
  FooterLinks,
  SocialLinks
} from './Footer.style'
import { FooterWrapper } from './Footer.style'
import { Container } from '../ui/StyledComponents'

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Accounts', href: '#' },
      { label: 'Cards', href: '#' },
      { label: 'Loans', href: '#' },
      { label: 'Investments', href: '#' },
      { label: 'Insurance', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Support', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  }
]

const Footer: React.FC = () => {
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
              Empowering individuals and businesses with innovative financial
              solutions. Join us on our mission to make banking simple,
              accessible, and secure.
            </p>
          </FooterBranding>

          {footerLinks.map((column) => (
            <FooterLinks key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} passHref legacyBehavior>
                      <a tabIndex={0}>{link.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterLinks>
          ))}
        </FooterContainer>

        <FooterBottom>
          <p>© {new Date().getFullYear()} DigitalBank. All rights reserved.</p>

          <SocialLinks>
            <a href="#" aria-label="Visit our Facebook page" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Visit our Twitter page" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Visit our LinkedIn page" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="Visit our Instagram page" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </SocialLinks>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
