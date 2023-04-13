import React from 'react';
import {Provider} from 'react-redux';
import { store } from './store/store';
import DashboardRoutes from './routes/DashboardRoutes';

function App() {
  return (
    <>
    <Provider store={store}>
      <DashboardRoutes/>
      </Provider>
    </>
  );
}

export default App;
