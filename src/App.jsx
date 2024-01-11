import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

/**
 * App Component: Responsible for rendering routes using React Router.
 * It defines the route for the Home component.
 * @returns {JSX.Element} The JSX content for the application.
 */
const App = () => {
  return (
    <Routes>
      {/* Route for the Home component */}
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
