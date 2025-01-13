import type { FC } from 'react'
import { calculateDailyPoints } from '@/utils/calculateDailyPoints'

interface DailyPointsProps {
  seasonStartDate: string
}

const DailyPoints: FC<DailyPointsProps> = ({ seasonStartDate }) => {
  const todayPoints = calculateDailyPoints(seasonStartDate)

  return (
    <div className="flex flex-col items-start rounded-lg bg-white p-4 shadow-sm">
      <p className="text-xs text-gray-500">Daily Points</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">
        {todayPoints.toLocaleString()}
        K
      </p>
    </div>
  )
}

export default DailyPoints
