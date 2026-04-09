import type { ReactNode } from 'react'
import './IncomeExpenseRow.css'

const growthIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
)

const declineIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
    </svg>
)

function IncomeExpensesRow() {
    return (
        <div className="income-expense-row">

            <IncomeExpensesContainer tone="growth" icon={growthIcon} />

            <IncomeExpensesContainer tone="decline" icon={declineIcon} />
        </div>
    )
}

export default IncomeExpensesRow

export const IncomeExpensesContainer = ({
    icon,
    tone,
}: {
    icon: ReactNode
    tone?: 'growth' | 'decline'
}) => {
    const iconClass =
        tone === 'growth'
            ? 'income-expense-container-icon income-expense-container-icon--growth'
            : tone === 'decline'
                ? 'income-expense-container-icon income-expense-container-icon--decline'
                : 'income-expense-container-icon'

    const iconTextClass = tone == 'growth' ? 'income-expense-container-icon-text-growth' : 'income-expense-container-icon-text-decline'

    const title = tone == 'growth' ? 'Total Income' : 'Total Expenses'

    const amount = tone == 'growth' ? '$12,400.00' : '$5,120.80'




    return (
        <div
            className={
                tone
                    ? `income-expense-container income-expense-container--${tone}`
                    : 'income-expense-container'
            }
        >
            <div className="income-expense-container-indicator" aria-hidden={true} />
            <div className="income-expense-container-body">
                <div className="income-expense-container-icon-container">
                    <div className={iconClass}>{icon}</div>
                    <div className={iconTextClass}>
                        {tone == 'growth' ? '+12.5%' : '-4.2%'}
                    </div>
                </div>

                <div className="income-expense-container-amount">
                    <h5>{title}</h5>
                    <p>{amount}</p>
                </div>
            </div>
        </div>
    )
}
