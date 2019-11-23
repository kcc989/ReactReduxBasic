import React from 'react';
import { Button } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from '../actions/incrementActions';

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="my-4 mx-1">
      <p>The count is {count}</p>
      <Button onClick={() => dispatch(increment())}>Increase count here</Button>
    </div>
  );
}

export default App;
