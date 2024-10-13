import React, { useState } from 'react';

function SortItem({ items, sortItems }) {
  console.log("Items:", items);

  const [sortBy, setSortBy] = useState('name');  
  const [order, setOrder] = useState('ascending');

  const handleSortChange = () => {
    sortItems(sortBy, order);
    alert(`Items sorted by ${sortBy} in ${order} order.`);
  };

  return (
    <div>
      <h2 className='label'>SORT ITEMS</h2>

      <div className="table-container">
        <div className="table-action">

          <div style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px' }}>Sort By:</label>
            <select className="dropdown" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)} 
              required>
                <option value="name">Name</option>
                <option value="quantity">Quantity</option>
                <option value="price">Price</option>
            </select>
            
            <label style={{ marginRight: '10px', marginLeft: '20px' }}>Order:</label>
            <select className="dropdown"
              value={order} 
              onChange={(e) => setOrder(e.target.value)} 
              required>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>

            <button className='table-button' onClick={handleSortChange}>Sort Items</button>
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
            {items.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No Items Available!</td>
              </tr>
            ) : (
              items.map((item) => (
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

export default SortItem;
