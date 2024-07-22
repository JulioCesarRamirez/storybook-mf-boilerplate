import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If using thunk middleware
import rootReducer from '../src/store/reducers'; // Adjust path as per your project structure

interface Props {
  children?: ReactNode;
}

function render(
  ui: ReactElement,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  }: { initialState?: any; store?: any } & RenderOptions = {}
) {
  function Wrapper({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
