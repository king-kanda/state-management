import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { increment } from './components/counter'
import { add } from './components/cart'

function App() {

  const count = useSelector((state)=>state.counter.value)
  const cart = useSelector((state)=>state.cart.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count} 
        </button>
        <span>
          ``
        </span>
        <button onClick={() => dispatch(add())}>
          cart is {cart} 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        this is a cart {cart}
      </p>
    </>
  )
}

export default App
