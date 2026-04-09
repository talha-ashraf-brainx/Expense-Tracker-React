import type { ReactNode } from 'react'
import {
    iconMonthlySalary,
    iconStoreRetail,
    iconTravelling,
    iconUtilities,
} from './transactionCategoryIcons'
import './RecentTransactionsListing.css'

const RecentTransactionsListing = () => {
    return (
        <div className="recent-transactions-listing">
            <div className="recent-transactions-listing-header">
                <h2>Recent Transactions</h2>
                <button type="button">View All Activity</button>
            </div>

            <div className="recent-transactions-item-list">
                <RecentTransactionsItem tone="decline" icon={iconStoreRetail()} title="Apple Store Retail" description="Purchased iPhone 15 Pro Max" amount={-120} date="2026-04-09" />
                <RecentTransactionsItem tone="decline" icon={iconMonthlySalary()} title="Monthly Salary" description="Received monthly salary" amount={1000} date="2026-04-09" />
                <RecentTransactionsItem tone="growth" icon={iconUtilities()} title="Utilities" description="Paid electricity bill" amount={100} date="2026-04-09" />
                <RecentTransactionsItem tone="decline" icon={iconTravelling()} title="Travel" description="Purchased plane ticket" amount={-100} date="2026-04-09" />
                <RecentTransactionsItem tone="growth" icon={iconStoreRetail()} title="Monthly Bonus" description="Received monthly bonus" amount={100} date="2026-04-09" />
                <RecentTransactionsItem tone="decline" icon={iconMonthlySalary()} title="Bought groceries" description="Bought groceries for the week" amount={-10} date="2026-04-09" />
                <RecentTransactionsItem tone="growth" icon={iconUtilities()} title="Taken Loan" description="Taken loan from the bank" amount={1000} date="2026-04-09" />
                <RecentTransactionsItem tone="decline" icon={iconMonthlySalary()} title="Paid Loan" description="Paid loan to the bank" amount={-100} date="2026-04-09" />
            </div>
        </div>
    )
}

export default RecentTransactionsListing

type RecentTransactionsItemProps = {
    tone: 'growth' | 'decline'
    icon: ReactNode
    title: string
    description: string
    amount: number
    date: string
}

export const RecentTransactionsItem = ({
    tone,
    icon,
    title,
    description,
    amount,
    date,
}: RecentTransactionsItemProps) => {
    return (
        <div className={`recent-transactions-item recent-transactions-item--${tone}`}>
            <div className="recent-transactions-item-indicator" aria-hidden={true} />

            <div className="recent-transactions-item-body">
                <div className="recent-transactions-item-body-left">
                    <div className="recent-transactions-item-icon">{icon}</div>
                    <div className="recent-transactions-item-body-left-text">
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>


                </div>

                <div className="recent-transactions-item-body-right">
                    <p className="recent-transactions-item-body-right-amount">${amount}</p>
                    <p className="recent-transactions-item-body-right-date">{date}</p>
                </div>
            </div>
        </div>
    )
}
