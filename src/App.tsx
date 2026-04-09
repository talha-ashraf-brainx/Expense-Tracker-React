import './App.css'
import AppBar from './components/AppBar'
import AvailableBalance from './components/AvailableBalance'
import IncomeExpensesRow from './components/IncomeExpensesRow'
import RecentTransactionsListing from './components/RecentTransactionsListing'

function App() {

  return (
    <>
      <AppBar />
      <AvailableBalance />
      <IncomeExpensesRow />
      <section>
        <RecentTransactionsListing />
      </section>
    </>
  )
}

export default App
