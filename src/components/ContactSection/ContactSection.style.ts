import styled from 'styled-components'

export const ContactSectionWrapper = styled.section`
  padding: 4rem 0;
  background-color: white;
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & > div:first-child {
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75;
      color: #4b5563;
      margin-bottom: 1.5rem;
    }
  }

  & > div:last-child {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.75rem;
          color: #003087;
        }
      }
    }
  }
`

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: #4b5563;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.75rem;
        color: #003087;
      }
    }
  }
`
