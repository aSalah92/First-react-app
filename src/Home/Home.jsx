import { useState } from "react"

export default function Home() {
  const [nums,setNums] = useState([1,2,3,4,5])
  function IncreaseAge (targetedInd){
    const updatedNums = nums.map((num,ind)=>{
        return ind===targetedInd? num+1: num
    })
    setNums(updatedNums)
  }
  return (
    <>
    {nums.map((num, ind)=>{
      return <div key={ind} className="flex flex-row justify-center gap-6 w-5/12 m-auto mt-10">
        <h3 className="w-6/12 border-2 border-b-black p-4">Name: {num}</h3>
        <button onClick={()=>IncreaseAge(ind)} className="bg-blue-800 text-white font-bold rounded-3xl p-2 w-5/12 hover:cursor-pointer hover:bg-blue-400 hover:text-gray-800">Increase age</button>
      </div>
    })}
    </>
  )
}
