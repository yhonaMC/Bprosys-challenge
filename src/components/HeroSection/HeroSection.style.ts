import styled from 'styled-components'

export const HeroWrapper = styled.section`
  background: linear-gradient(135deg, #003087 0%, #0070e0 100%);
  padding: 4rem 0;
  color: white;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`

export const HeroText = styled.div`
  flex: 1;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 36rem;
  }
`

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

export const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: 'easeOut'
    }
  }
}
