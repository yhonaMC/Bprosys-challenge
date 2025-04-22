import styled from 'styled-components'

export const AboutSectionWrapper = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const AboutText = styled.div`
  flex: 1;

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: #4b5563;
    margin-bottom: 1.5rem;
  }
`

export const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}
