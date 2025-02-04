import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Footer />
    </div>
    )
}

export default App
