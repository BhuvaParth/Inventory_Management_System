import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './container/Header';
import InventoryForm from './container/InventoryForm';
import Home from './pages/Home';
import Inventorydashboard from './container/Inventorydashboard';
import EditForm from './container/EditForm';
import SupplierSection from './container/SupplierSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventoryForm" element={<InventoryForm />} />
        <Route path="/inventorydashboard" element={<Inventorydashboard />} />
        <Route path="/suppliersection" element={<SupplierSection />} />
        <Route path="/edit/:id" element={<EditForm />} /> 
      </Routes>
    </div>
  );
}

export default App;
