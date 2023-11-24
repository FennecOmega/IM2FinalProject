import { useState } from 'react'

function NameForm(){

    const [list, setList] = useState({})

   async function postList(){
      try {
         const response = await fetch("http://localhost:3000/addtolist", { // replace fetch link with express link
           method: 'POST',
           headers: {
             "Content-Type": "application/json",
             'Accept': 'application/json'
           },
           mode: 'cors',
           body: JSON.stringify(list)
         });
     
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
     
         // Assuming the server responds with JSON
         const responseData = await response.text();
         console.log(responseData);
       } catch (error) {
         console.error('Error during fetch:', error);
       }
     }
   

  async function handleClick(){
     await postList()
     setList({})
     console.log(list)
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
      
      <button onClick={handleClick}>ADD</button>

      </>

   )

}

export default NameForm