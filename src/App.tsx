import './App.css'
import AppBar from './components/AppBar'
import AvailableBalance from './components/AvailableBalance'
import IncomeExpensesRow from './components/IncomeExpensesRow'
import RecentTransactionsListing from './components/RecentTransactionsListing'
import OverviewContainer from './components/OverviewContainer'

function App() {

  return (
    <>
      <AppBar />
      <AvailableBalance />
      <IncomeExpensesRow />
      <section className="listing-section">
        <RecentTransactionsListing />
        <OverviewContainer />
      </section>
    </>
  )
}

export default App
