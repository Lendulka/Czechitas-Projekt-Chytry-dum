import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { smartHomeData } from './smartHomeData'
import './App.css'

const titleElm = document.querySelector('title').textContent

function App() {

  return (
    <div className="container">
      <Header title={titleElm} />
      <Dashboard data={smartHomeData} />
    </div>
  )

}

export default App
