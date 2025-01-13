import type { FC } from 'react'
import CardBalance from '@/components/CardBalance'
import DailyPoints from '@/components/DailyPoints'
import LatestTransactions from '@/components/LatestTransactions'
import NoPaymentDue from '@/components/NoPaymentDue'
import { useEffect, useState } from 'react'

const TransactionsList: FC = () => {
  const cardLimit = 1500
  const [cardBalance, setCardBalance] = useState(0)

  useEffect(() => {
    setCardBalance(Math.floor(Math.random() * cardLimit))
  }, [cardLimit])

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <CardBalance cardLimit={cardLimit} cardBalance={cardBalance} />
          <NoPaymentDue />
        </div>
        <DailyPoints seasonStartDate="2025-01-01" />
        <LatestTransactions />
      </div>
    </div>
  )
}

export default TransactionsList
