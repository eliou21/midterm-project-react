import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import logo from './components/images/logo.png'; 
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import SearchItem from './components/SearchItem';
import SortItem from './components/SortItem';
import DisplayItems from './components/DisplayItems';
import DisplayCategory from './components/DisplayCategory';
import LowStock from './components/LowStock';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isWelcomePage, setIsWelcomePage] = useState(true);
  const navigate = useNavigate();

  const addItem = (newItem) => {
    const existingItem = items.find(item => item.id === newItem.id);
    if (existingItem) {
      alert(`An item with ID ${newItem.id} already exists!`);
      return;
    }
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems)); 
    return 'success';
  };

  const updateItem = (id, updateField, newValue) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = [...items];
      const oldValue = updatedItems[itemIndex][updateField];
      updatedItems[itemIndex][updateField] = newValue;
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      return `${updateField.charAt(0).toUpperCase() + updateField.slice(1)} of item "${updatedItems[itemIndex].name}" updated from ${oldValue} to ${newValue}`;
    }
    return 'Item not found!';
  };

  const removeItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems)); 
      return `Item "${items[itemIndex].name}" has been removed from the inventory.`;
    }
    return 'Item not found!';
  };

  const searchItem = (id) => {
    const item = items.find(item => item.id === id);
    return item || null;
  };

  const sortItems = (sortBy, order) => {
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return order === 'ascending' 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name);
      } else {
        const aValue = parseFloat(a[sortBy]) || 0; 
        const bValue = parseFloat(b[sortBy]) || 0; 
        return order === 'ascending' ? aValue - bValue : bValue - aValue;
      }
    });
    setItems(sortedItems);
    localStorage.setItem('items', JSON.stringify(sortedItems));
  };

  useEffect(() => {
    const welcomePageStatus = localStorage.getItem('isWelcomePage');
    const storedItems = localStorage.getItem('items');
    if (welcomePageStatus === 'false') {
      setIsWelcomePage(false);
    }
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleOpenSystem = () => {
    setIsWelcomePage(false);
    localStorage.setItem('isWelcomePage', 'false');
  };

  const handleExitSystem = () => {
    setIsWelcomePage(true);
    localStorage.setItem('isWelcomePage', 'true');
    navigate('/');
  };

  return (
    <div className="App">
      {isWelcomePage ? (
        <div className="welcome-background">
          <div className="welcome-container">
            <h1>INVENTORY</h1>
            <h1>MANAGEMENT</h1>
            <h1>SYSTEM</h1>
            <button onClick={handleOpenSystem}>OPEN</button>
          </div>
        </div>
      ) : (
        <>
          <nav className="navbar">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
              <li><Link to="/display">All Items</Link></li>
              <li><Link to="/add">Add Item</Link></li>
              <li><Link to="/update">Update Item</Link></li>
              <li><Link to="/remove">Remove Item</Link></li>
              <li><Link to="/search">Search Item</Link></li>
              <li><Link to="/sort">Sort Items</Link></li>
              <li><Link to="/category">Sort Categories</Link></li>
              <li><Link to="/low-stock">Low Stock Items</Link></li>
              <li>
                <button className="button-exit" onClick={handleExitSystem}>Exit</button>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/add" element={<AddItem addItem={addItem} />} />
            <Route path="/update" element={<UpdateItem updateItem={updateItem} />} />
            <Route path="/remove" element={<RemoveItem removeItem={removeItem} />} />
            <Route path="/search" element={<SearchItem searchItem={searchItem} items={items} />} />
            <Route path="/sort" element={<SortItem items={items} sortItems={sortItems} />} />
            <Route path="/display" element={<DisplayItems items={items} />} />
            <Route path="/category" element={<DisplayCategory items={items} />} />
            <Route path="/low-stock" element={<LowStock items={items} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
