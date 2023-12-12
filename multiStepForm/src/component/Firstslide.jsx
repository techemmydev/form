import React from 'react'
import { useState } from 'react'
const Firstslide = () => {

  const [first, setFirst]= useState(1)
const nextButton = ()=>{

setFirst(first + 1)

}
  return (
    <form>
       <div className="single-step show-step">
        <h1>form 1</h1>
        <div className="innerLabel">
          <label>first Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="innerLabel">
          <label>Last Name</label>
          <input type="text" id="surname" name="surname" />
        </div>
        <button onClick={ nextButton}>Next</button>
      </div>
    </form>
  )
}

export default Firstslide
