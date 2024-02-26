import './App.css'
import Contador from './components/contador/Contador'
import ListaFetch from './components/fetch/ListaFetch'
import FetchPro from './components/fetch/FetchPro'
import Index from './components/gastoControl/Index'
import Carrito from './components/carrito/Carrito'

function App() {
  

  return (
    <>
      <Contador />
      <hr/>
      <h2>fetch:</h2>
      <ListaFetch />
      <hr/>
      <Index />
      <hr/>
      <Carrito />
    </>
  )
}

export default App
