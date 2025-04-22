import { Container } from '../ui/StyledComponents'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  padding: 3rem 0;
`

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr repeat(3, 1fr);
  }
`

export const FooterBranding = styled.div`
  h3 {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #003087;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    max-width: 24rem;
  }
`

export const FooterLinks = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #6b7280;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #003087;
    }
  }
`

export const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
  }
`
