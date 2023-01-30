
import './App.css';
import CreatePet from './views/CreatePet';
import EditPet from './views/EditPet';
import HomePage from './views/HomePage';
import PetDetails from './views/PetDetails';
import { Routes, Route } from  'react-router-dom';

function App() {
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Routes>
        <Route element={ <HomePage /> } path='/' />
        <Route element={ <CreatePet /> } path='/pets/new' />
        <Route element={ <PetDetails /> } path='/pets/:_id' />
        <Route element={ <EditPet /> } path='/pets/edit/:_id' />
      </Routes>
    </div>
  );
}

export default App;
