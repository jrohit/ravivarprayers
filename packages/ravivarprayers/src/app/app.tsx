// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import BasicTabs from './tabs/tabs';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <BasicTabs />
      <Routes>
        <Route path="/" />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
