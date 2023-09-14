import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'
import { useEffect } from 'react'

function App() {
  const [actors, setActors] = useState([])
  const [selectedActors, setSelectedActors] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [totalRemaining, setTotalRemaining] = useState(0)
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setActors(data))
  }, [])

  const handleActors = (actor) => {

    const isExist = selectedActors.find(item => item.id == actor.id)
    let count = actor.salary;
    if (isExist) {
      return alert('Already Exist')
    } else {
      selectedActors.forEach(item =>
        count = count + item.salary
      )
      const remaining = 20000 - count;
      if (count > 20000) {
        return alert('It is over of budget')
      } else {
        setTotalCost(count);
        setTotalRemaining(remaining)
        const newSelectedActors = [...selectedActors, actor]
        setSelectedActors(newSelectedActors);
      }



    }
  }
  return (
    <>
      <h1 className='text-4xl text-center font-semibold my-10'>React Movie Maker</h1>
      <div className='w-3/4 mx-auto flex justify-between'>
        <Cards handleActors={handleActors} actors={actors}></Cards>
        <Carts totalRemaining={totalRemaining} totalCost={totalCost} selectedActors={selectedActors}></Carts>
      </div>
    </>
  )
}

export default App
