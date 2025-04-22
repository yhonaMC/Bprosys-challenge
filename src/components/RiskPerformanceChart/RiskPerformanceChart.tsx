import React from 'react'

import { ChartContainer } from '../ui/StyledComponents'
import { RiskLevel } from '../../types'
import {
  PerformanceLine,
  RiskIndicator,
  XAxisLabels,
  YAxisLabels
} from './RiskPerformance.style'
import { PerformanceGraph } from './RiskPerformance.style'
import { IndicatorMarker } from './RiskPerformance.style'
import { ChartLabels } from './RiskPerformance.style'

interface RiskPerformanceChartProps {
  riskLevel?: RiskLevel
  returnRate?: number
}

const RiskPerformanceChart: React.FC<RiskPerformanceChartProps> = ({
  riskLevel = 'medium',
  returnRate = 5
}) => {
  const getRiskPosition = () => {
    switch (riskLevel) {
      case 'low':
        return 15
      case 'medium':
        return 50
      case 'high':
        return 85
      default:
        return 50
    }
  }

  const getPerformanceHeight = () => {
    return Math.min(Math.max(returnRate * 5, 10), 90)
  }

  return (
    <ChartContainer>
      <h3 className="text-lg font-semibold mb-4">
        Risk and Performance Overview
      </h3>

      <div className="mb-8">
        <h4 className="text-sm font-medium mb-2">Risk Level</h4>
        <ChartLabels>
          <span>Low Risk</span>
          <span>Medium Risk</span>
          <span>High Risk</span>
        </ChartLabels>
        <RiskIndicator>
          <IndicatorMarker position={getRiskPosition()} />
        </RiskIndicator>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Projected Performance</h4>
        <PerformanceGraph>
          <PerformanceLine height={getPerformanceHeight()} />

          <YAxisLabels>
            <span>15%</span>
            <span>10%</span>
            <span>5%</span>
            <span>0%</span>
          </YAxisLabels>

          <XAxisLabels>
            <span>1Y</span>
            <span>3Y</span>
            <span>5Y</span>
            <span>10Y</span>
          </XAxisLabels>
        </PerformanceGraph>
      </div>
    </ChartContainer>
  )
}

export default RiskPerformanceChart
