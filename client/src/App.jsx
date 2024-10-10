import { Outlet } from "react-router-dom"
import Navbar from "./assets/components/Navbar"
import {store} from './redux/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <div className="max-w-screen-xl mx-auto px-2">
        <Navbar/>
        <main className="mt-8 min-h-screen">
          <Outlet/>
        </main>
      </div>
    </Provider>
  )
}

export default App
