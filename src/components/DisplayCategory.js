import React, { useState } from 'react';

function DisplayCategory({ items }) {
  const categories = ['All', 'Clothing', 'Electronics', 'Entertainment'];

  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h2 className='label'>ITEMS BY CATEGORY</h2>
      <div className="table-container">
        <div className="table-action">
          <div className="select-cat" style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px' }}>Select Category:</label>
            <select className="dropdown"
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
             </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No Items Available!</td>
              </tr>
            ) : (
              filteredItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayCategory;
