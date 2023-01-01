import CakeContainer from './Components/CakeContainer'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'

function App () {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  )
}

export default App
