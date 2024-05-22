'use client'

import { useEffect, useState } from "react";

export default function Home() {
const [counter, setCounter] = useState(0)
const [bgColor, setBgColor] = useState('')

useEffect(() => {
  if(counter>0){
    setBgColor('bg-green-500')
  }else if(counter===0){
    setBgColor('bg-slate-300')
  }else{
    setBgColor('bg-red-400')
  }
}, [counter])

  return (
    <main className={`${bgColor} flex min-h-screen flex-col items-center justify-between p-24`}>
      <form className="flext justify-center items-center">
        <h1>Counter: {counter}</h1>
        <div className="flex gap-5">
          <div>
            <button type="button" className="py-2 px-4 bg-red-600 text-white rounded" onClick={(e) => setCounter(counter-1)}>decrement</button>
          </div>
          <div>
            <button type="button" className="py-2 px-4 bg-green-600 text-white rounded" onClick={(e) => setCounter(counter+1)}>Increment</button>
          </div>
        </div>
      </form>
    </main>
  );
}
