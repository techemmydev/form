import React, { useState } from 'react';

const SecondSlide = () => {
  const [first, setFirst] = useState(1);

  const nextButton = () => {
    
    setFirst(first + 1);
  };

  return (
    <form>
      <div className="single-step">
        <div className="innerLabel">
          <label>phone</label>
          <input type="text" id="phone" name="phone" />
        </div>

        <div className="innerLabel" id="innerLabel">
          <label>email</label>
          <input type="text" id="email" name="email" />
        </div>
        <button type="button" onClick={nextButton}>
          Next
        </button>
      </div>
    </form>
  );
};

export default SecondSlide;
