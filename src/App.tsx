import HomePage from '@/pages/Home';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      {/* Enable to add another path below here; Nested paths are allowed*/}
    </>
  );
}
