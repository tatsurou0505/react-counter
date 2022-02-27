import { useState } from 'react'
import { atom } from 'recoil'
import { Counter} from './components/Counter'



 export const hogeState = atom<number>({
  key: 'sample/hoge',
  default: 100,
})



function App() {

  const [counters, setCounters] = useState([
    {
      id: 1,
      title:'new',
      count: 0
    }
  ])



  const [counterId, setCountId] = useState(2)
  
  const addCounter = () => {
    setCounters([...counters, {id: counterId, title: 'new', count: 0}])
    setCountId(counterId + 1)
  }
  const deleteCounter = (id:number) => {
    setCounters(counters.filter(counter => 
      counter.id !== id))
  }



  return (
    <div className="App">
      <div className="w-full">
        <div className="p-10 mx-auto text-center">
          <h1 className="text-3xl font-bold underline">Multi Counter</h1>
          <div className="mx-auto w-96 mt-10">
            {counters.map((counter) => (
              <Counter 
                key={counter.id} 
                counter={counter} 
                deleteCounter={deleteCounter} />
            ))}
            <button className="mt-10 bg-green-400 p-2" onClick={addCounter}>
              new Counter
            </button>
            <p>title list: {' '}
              
            </p>
            <p>sum of count: {' '}
              
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
