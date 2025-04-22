import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.primary {
    background-color: #003087;
    color: white;
    border: none;

    &:hover {
      background-color: #001f5c;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 48, 135, 0.3);
    }
  }

  &.secondary {
    background-color: white;
    color: #003087;
    border: 1px solid #e6e6e6;

    &:hover {
      background-color: #f5f7fa;
      border-color: #cfd4db;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 48, 135, 0.2);
    }
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;

  &.low {
    background-color: #e6f7ee;
    color: #00864e;
  }

  &.medium {
    background-color: #fff8e6;
    color: #b95000;
  }

  &.high {
    background-color: #fde8e8;
    color: #e02424;
  }
`

export const Tabs = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TabButton = styled.button`
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: #6b7280;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  background: transparent;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #111827;
  }

  &.active {
    color: #003087;
    border-bottom-color: #003087;
  }
`

export const RateDisplay = styled.div`
  display: flex;
  align-items: baseline;

  .rate {
    font-size: 1.5rem;
    font-weight: 700;
    color: #003087;
  }

  .percent {
    font-size: 1rem;
    color: #4b5563;
    margin-left: 0.25rem;
  }
`

export const BenefitsList = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: #000;
  li {
    margin-bottom: 0.5rem;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: -1.5rem;
      color: #003087;
      font-weight: bold;
    }
  }
`

export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #f3f4f6;
  background-repeat: no-repeat;
`

export const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  background-color: #e6eeff;
  color: #003087;
`

export const DetailSection = styled.section`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }
`

export const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 2rem 0;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`

export const ProductHeader = styled.div`
  margin-bottom: 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .type {
    font-size: 1.125rem;
    color: #6b7280;
  }
`
