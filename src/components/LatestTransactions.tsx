import type { FC } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faCreditCard, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import transactions from '../data/transactions.json'

library.add(faChevronRight, faCreditCard, faShoppingCart)

const LatestTransactions: FC = () => {
  const router = useRouter()

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Latest Transactions</h2>
      {transactions.slice(0, 10).map(txn => (
        <div
          key={txn.id}
          className="mb-3 flex cursor-pointer items-center justify-between rounded-md p-3 hover:bg-gray-50"
          onClick={() => router.push(`/transaction/${txn.id}`)}
        >
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-gray-100 p-3">
              <FontAwesomeIcon
                icon={txn.type === 'Payment' ? faCreditCard : faShoppingCart}
                color="gray"
                size="lg"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{txn.name}</p>
              <p className="text-xs text-gray-500">
                {txn.pending ? 'Pending - ' : ''}
                {txn.type}
                {' '}
                -
                {' '}
                {txn.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="text-right">
              <p
                className={`text-sm font-bold ${
                  txn.type === 'Payment' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {txn.type === 'Payment' ? `+${txn.amount}` : `${txn.amount}`}
                $
              </p>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="gray"
              className="text-gray-400 hover:text-gray-600"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LatestTransactions
