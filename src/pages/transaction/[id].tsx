import type { FC } from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import transactions from '../../data/transactions.json'

const TransactionDetail: FC = () => {
  const router = useRouter()
  const { id } = router.query
  const transaction = transactions.find((txn: { id: number }) => txn.id === Number(id))

  if (!transaction)
    return <p className="mt-10 text-center text-gray-500">Transaction not found</p>

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="mx-auto max-w-lg rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 p-6 shadow-lg shadow-gray-300">
        <div className="mb-6 flex items-center space-x-4">
          <button
            onClick={() => router.back()}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              color="gray"
              className="text-gray-400 hover:text-gray-600"
            />
          </button>
          <h1 className="text-3xl font-semibold text-gray-800">{transaction.name}</h1>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-sm text-gray-600">Type</span>
            <span className="text-sm font-medium text-gray-900">{transaction.type}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-sm text-gray-600">Amount</span>
            <span
              className={`text-sm font-semibold ${
                transaction.type === 'Payment' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {transaction.type === 'Payment' ? `+${transaction.amount}` : `${transaction.amount}`}
              $
            </span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-sm text-gray-600">Description</span>
            <span className="text-sm font-medium text-gray-800">{transaction.description}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Date</span>
            <span className="text-sm font-medium text-gray-800">
              {transaction.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetail
