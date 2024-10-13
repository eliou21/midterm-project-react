  import React from 'react';

  function DisplayItems({ items }) {
    return (
      <div>
        <h2 className='label'>ALL ITEMS</h2>
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

  export default DisplayItems;
