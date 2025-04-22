import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  HeaderContainer,
  itemVariants,
  Logo,
  MobileMenu,
  MobileMenuButton,
  MobileNavLink,
  Nav,
  NavLink,
  navVariants
} from './Header.style'
import { HeaderWrapper } from './Header.style'
import { navItems } from '@/data/products'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('/')

  useEffect(() => {
    const path = window.location.hash || '/'
    setActiveItem(path)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) => {
    if (href === '/' || href.startsWith('/')) {
      setActiveItem(href)
      return
    }

    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }

      targetElement.scrollIntoView({ behavior: 'smooth' })
      setActiveItem(href)
    }
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
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
            <h1>DigitalBank</h1>
          </Logo>
        </motion.div>

        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex justify-end items-center"
        >
          <Nav>
            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Link
                  href={item.href}
                  passHref
                  className="pointer"
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                >
                  <NavLink
                    tabIndex={0}
                    className={activeItem === item.href ? 'active' : ''}
                  >
                    {item.name}
                  </NavLink>
                </Link>
              </motion.div>
            ))}
          </Nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            tabIndex={0}
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            </span>
            <svg
              className={`w-6 h-6 transition-transform ${
                mobileMenuOpen ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#003087"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </MobileMenuButton>
        </motion.div>
      </HeaderContainer>

      <MobileMenu $isOpen={mobileMenuOpen}>
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate={mobileMenuOpen ? 'visible' : 'hidden'}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                passHref
                className="pointer"
                onClick={(e) => handleNavLinkClick(e, item.href)}
              >
                <MobileNavLink
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={activeItem === item.href ? 'active' : ''}
                >
                  {item.name}
                </MobileNavLink>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </MobileMenu>
    </HeaderWrapper>
  )
}

export default Header
