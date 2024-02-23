import './App.css'
import Contador from './components/contador/Contador'
import ListaFetch from './components/fetch/ListaFetch'
import FetchPro from './components/fetch/FetchPro'
import Index from './components/gastoControl/Index'

function App() {
  

  return (
    <>
      <Contador />
      <hr/>
      <h2>fetch:</h2>
      <ListaFetch />
      <hr/>
      <Index />
    </>
  )
}

export default App
