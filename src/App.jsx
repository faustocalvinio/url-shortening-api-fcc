import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { ListUrls } from './components/ListUrls'
import { StadisticsSection } from './components/StadisticsSection'
function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <ListUrls />
      <StadisticsSection />
    </div>
  )
}

export default App
