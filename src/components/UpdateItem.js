import React, { useState } from 'react';

function UpdateItem({ updateItem }) {
  const [id, setId] = useState('');
  const [updateField, setUpdateField] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = updateItem(id, updateField, newValue);
    alert(message);
    setId('');
    setUpdateField('');
    setNewValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='form-label'>UPDATE ITEM</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <select value={updateField} onChange={(e) => setUpdateField(e.target.value)} required>
        <option value="">Select Field</option>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input type="number" placeholder="New Value" value={newValue} onChange={(e) => setNewValue(e.target.value)} required />
      <button className='form-button' type="submit">Update Item</button>
    </form>
  );
}

export default UpdateItem;