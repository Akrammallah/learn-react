import { useState } from 'react'


import './App.css'


function App() {
  let [counter,setCounter] = useState(15)
let addValue = () => {
setCounter(counter + 1)
}
let removeValue = () => {
  setCounter(counter - 1)
}

  return (
  
    <>
      <h1 class='bg-pink-500'>tailwindcss</h1>
      <br />
      <br />
      <div>
        <button class="bg-red-500 rounded-xl hover:bg-blue-700 text-white col-span-1 gap-4 " onClick={addValue}
        >addValue{counter}</button>
          <br />
          <br />
          <br />
        <button class="bg-blue-400 text-white rounded-xl hover:bg-red-700 col-span-1 gap-5 " onClick={removeValue}
        >removeValue{counter}</button>
      
      </div>
    </>
  );
}

export default App
