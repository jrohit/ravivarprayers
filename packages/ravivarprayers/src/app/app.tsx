import BasicTabs from './prayer-tabs/prayer-tabs';
import { Route, Routes } from 'react-router-dom';

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
