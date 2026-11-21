import { useState } from "react"

export default function App() {
  const [users, setUsers] = useState([{name:'Ahmed', age: 34}, {name:'Mohamed', age: 30}, {name:'Ibrahim', age: 28}])
  function increaseAge(currentUser, currentInd){
    setUsers(prevUsers=>
      prevUsers.map((user, index)=>{
       return index === currentInd? {...user, age: currentUser.age + 1} : user
      })
    )
  }
  return (
    <>
      {users.map((user, ind)=>{
        return  <div key={ind} className="flex gap-5 justify-center m-2">
                  <h2 className="w-3/12 border-2 border-amber-950 p-2">Name: {user.name}</h2>
                  <h3 className="w-3/12 border-2 border-amber-950 p-2">Age: {user.age}</h3>
                  <button onClick={function ref() {
                    increaseAge(user, ind)
                  }} className="w-2/12 bg-blue-900 text-amber-50 rounded-3xl hover:bg-blue-200 hover:text-black hover:cursor-pointer hover:font-bold hover:text-2xl">Increase age</button>
                </div>
      })}
    </>
  )
}
