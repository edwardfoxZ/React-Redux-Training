import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/reducers/data/dataReducer'
import './App.css'

function App() {
  const datalist = useSelector((state) => state.data.datalist)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>redux state : {`${datalist}`}</p>
      <button onClick={() => dispatch(add('Honey'))}>add</button>
      <button onClick={() => dispatch(remove())}>remove</button>
    </div>
  )
}

export default App
