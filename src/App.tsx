import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {
  const {count} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className="flex justify-center items-center h-screen">
     <div className="flex justify-center items-center flex-col px-36 py-16 gap-5 border-2 border-gray-300 shadow-md rounded-md">
      
      <h1 className="text-9xl font-bold my-10"
      >{count}</h1>
      
      <div className="flex justify-center items-center gap-3">
      <button onClick={()=> dispatch(incrementByValue(5))} className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 duration-300"
      >Increment By 5</button>
      <button onClick={()=> dispatch(increment())} className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 duration-300"
      >Increment</button>
      <button onClick={()=> dispatch(decrement())} className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 duration-300">Decrement</button>
      </div>
     </div>
    </div>
  )
}

export default App
