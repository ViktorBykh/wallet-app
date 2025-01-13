import type { FC } from 'react'

const NoPaymentDue: FC = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
      <div>
        <p className="text-xs text-gray-500">No Payment Due</p>
        <p className="text-lg font-semibold text-gray-900">You’ve paid your balance.</p>
      </div>
      <div className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">
        ✓
      </div>
    </div>
  )
}

export default NoPaymentDue
