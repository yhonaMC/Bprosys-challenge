import styled from 'styled-components'

export const RiskIndicator = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  background: linear-gradient(90deg, #34d399 0%, #fcd34d 50%, #f87171 100%);
  border-radius: 0.25rem;
  margin-bottom: 2rem;
`

export const IndicatorMarker = styled.div<{ position: number }>`
  position: absolute;
  top: -16px;
  left: ${(props) => props.position}%;
  transform: translateX(-50%);
  width: 2px;
  height: 24px;
  background-color: #111827;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: -4px;
    width: 10px;
    height: 10px;
    background-color: #111827;
    border-radius: 50%;
  }
`

export const ChartLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    font-size: 0.875rem;
    color: #6b7280;
  }
`

export const PerformanceGraph = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  padding: 1rem 0 0 1rem;
`

export const PerformanceLine = styled.div<{ height: number }>`
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 5%;
  height: ${(props) => props.height}%;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #003087 0%, #169bd7 100%);
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(22, 155, 215, 0.1) 0%,
      rgba(0, 48, 135, 0.05) 100%
    );
    z-index: 1;
  }
`

export const YAxisLabels = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0;

  span {
    font-size: 0.75rem;
    color: #6b7280;
    transform: translateX(-50%);
  }
`

export const XAxisLabels = styled.div`
  position: absolute;
  left: 10%;
  right: 5%;
  bottom: -25px;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.75rem;
    color: #6b7280;
    transform: translateX(-50%);
  }
`
