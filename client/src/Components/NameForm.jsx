import { useState } from 'react'

function NameForm({changeForms}){

    const [list, setList] = useState({})

    function changeForm(){
       changeForms(list)
    }

   return (
      
      <>
      <p>ID</p>
      <input type="text" className="border-4 border-black" onChange={(e) => setList({...list, ID: e.target.value})}></input> 
      <p>name</p>
      <input type="text" className="border-4 border-black" onChange={(e) => setList({...list, Name: e.target.value})}></input>
      <p>contact no.</p>
      <input type="text" className="border-4 border-black" onChange={(e) => setList({...list, Contact: e.target.value})}></input>
      <p>Product</p>
      <input type="text" className="border-4 border-black" onChange={(e) => setList({...list, Product: e.target.value})}></input>
      <p>Quantity</p>
      <input type="text" className="border-4 border-black" onChange={(e) => setList({...list, Quantity: e.target.value})}></input>
      <p></p>
      
      <button onClick={changeForm}>ADD</button>

      </>

   )

}

export default NameForm