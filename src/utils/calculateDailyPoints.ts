export function calculateDailyPoints(seasonStartDate: string): number {
  const seasonStart = new Date(seasonStartDate)
  const today = new Date()
  const diffDays = Math.floor((today.getTime() - seasonStart.getTime()) / (1000 * 3600 * 24)) + 1

  if (diffDays === 1)
    return 2
  if (diffDays === 2)
    return 3

  let prevPrevPoints = 2
  let prevPoints = 3

  for (let i = 3; i <= diffDays; i++) {
    const todayPoints = Math.round(prevPrevPoints + 0.6 * prevPoints)
    prevPrevPoints = prevPoints
    prevPoints = todayPoints
  }

  return prevPoints > 1000 ? Number.parseInt((prevPoints / 1000).toFixed(0), 10) * 1000 : prevPoints
}
