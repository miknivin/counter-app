import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function Counter() {
  // state creation
  const [counter, setCounter] = useState(0); // Use parentheses () instead of square brackets []

  function increment() {
    setCounter(counter + 1); // Increment the counter correctly
  }

  function decrement(){
    if (counter<=0) {
        reset()
    }
    else{
        setCounter(counter -1 )
    }
  }

  function reset() {
    setCounter(0)
  }

  return (
    <div className='w-50 container m-5 p-5 shadow rounded mx-auto'>
      <h1 className='text-dark text-center'>Counter App</h1>
      <h1 className='text-center'>{counter}</h1>
      <div className='text-center'>
        <MDBBtn className='me-2' color='success' onClick={increment}>Increment</MDBBtn>
        <MDBBtn className='me-2' color='primary' onClick={reset}>Reset</MDBBtn>
        <MDBBtn color='danger' onClick={decrement}>Decrement</MDBBtn>
      </div>
    </div>
  );
}

export default Counter;
