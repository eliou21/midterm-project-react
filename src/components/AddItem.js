import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function AddItem({ addItem }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity <= 0) {
      alert('Invalid quantity! Quantity must be greater than 0.');
      return;
    }
    
    if (price <= 0) {
      alert('Invalid price! Price must be greater than 0.');
      return;
    }

    const newItem = { id, name, quantity, price, category };
    const result = addItem(newItem);

    if (result === 'success') {
      alert('Item added successfully!');
      setId('');
      setName('');
      setQuantity(0);
      setPrice(0);
      setCategory('');
      
      navigate('/display');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='form-label'>ADD ITEM</h2>
      <div className="form-group">
        <label className='form-id'>ID: </label>
        <input 
          type="text" 
          placeholder="ID" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label className='form-id'>Name: </label>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label className='form-id'>Quantity: </label>
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label className='form-id'>Price: </label>
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label className='form-id'>Category: </label>
        <select
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required>
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <button className='form-button' type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;