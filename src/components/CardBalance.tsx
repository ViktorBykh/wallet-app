import type { FC } from 'react'

interface CardBalanceProps {
  cardLimit: number
  cardBalance: number
}

const CardBalance: FC<CardBalanceProps> = ({ cardLimit, cardBalance }) => {
  const availableBalance = cardLimit - cardBalance

  return (
    <div className="flex flex-col justify-between rounded-lg bg-white p-4 shadow-sm">
      <p className="text-xs text-gray-500">Card Balance</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">
        $
        {cardBalance.toFixed(2)}
      </p>
      <p className="mt-1 text-sm text-gray-500">
        $
        {availableBalance.toFixed(2)}
        {' '}
        Available
      </p>
    </div>
  )
}

export default CardBalance
