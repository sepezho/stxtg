import BodyTwa from './components/BodyTwa/';
import Body from './components/Body/';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

console.log(process.env)
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/twa" element={<BodyTwa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
