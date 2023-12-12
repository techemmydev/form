import React from 'react'

const Finalform = () => {
  return (
    <form>
      <div className="single-step">
        <label>password</label>
        <input type="text" id="phone" name="phone" />
      </div>
      <button id="back" className="previous">back</button>
      <button id="next">Next</button>
      
    </form>
  )
}

export default Finalform
