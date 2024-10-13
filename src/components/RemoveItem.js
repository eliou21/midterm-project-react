import React, { useState } from 'react';

function RemoveItem({ removeItem }) {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = removeItem(id);
    alert(message);
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='form-label'>REMOVE ITEM</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <button className='form-button' type="submit">Remove Item</button>
    </form>
  );
}

export default RemoveItem;