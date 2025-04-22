import styled from 'styled-components'
import { Container } from '../ui/StyledComponents'
import { MobileMenuProps } from '@/types'

export const HeaderWrapper = styled.header`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 0.75rem;
    color: #003087;
  }
`

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const NavLink = styled.div`
  display: block;
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: #4b5563;
  transition: color 0.2s;

  &:hover {
    color: #003087;
  }

  &.active {
    color: #003087;
    font-weight: 600;
  }
`

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  &:focus {
    outline: none;
  }
`

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background-color: white;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileNavLink = styled.div`
  display: block;
  padding: 0.75rem 0;
  font-weight: 500;
  color: #4b5563;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }

  &.active {
    color: #003087;
    font-weight: 600;
  }
`

export const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
}
