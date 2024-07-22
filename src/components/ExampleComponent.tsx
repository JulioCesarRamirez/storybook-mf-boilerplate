import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementAsync } from '../store/actions';

const ExampleComponent: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementAsync())}>Increment Async</button>
    </div>
  );
};

export default ExampleComponent;
