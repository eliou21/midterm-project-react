import React from 'react';

function LowStock({ items }) {
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div>
      <h2 className='label'>LOW STOCK ITEMS</h2>
      <div className="table-container">
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
            {lowStockItems.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No Low Stock Items Available!</td>
              </tr>
            ) : (
              lowStockItems.map(item => (
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

export default LowStock;
