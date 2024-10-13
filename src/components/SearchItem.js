import React, { useState, useEffect } from 'react';

function SearchItem({ searchItem, items = [] }) {
  const [id, setId] = useState('');
  const [filteredItems, setFilteredItems] = useState(items); 
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if a search has been done

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleSearch = () => {
    setSearchPerformed(true); // Mark that a search has been performed
    if (id) {
      const result = searchItem(id);
      setFilteredItems(result ? [result] : []); // If found, display item; else, display nothing
    } else {
      setFilteredItems(items); // Reset to all items if no ID is entered
    }
  };

  const noItemsAvailable = items.length === 0;
  const noSearchResult = searchPerformed && filteredItems.length === 0;

  return (
    <div>
      <h2 className='label'>SEARCH ITEM</h2>
      <div className="table-container">
        <div className="table-action">
          <div style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px' }}>Enter Item ID:</label>
            <input className="search-item"
              type="text" 
              placeholder="ID" 
              value={id} 
              onChange={(e) => setId(e.target.value)} 
            />
            <button className="table-button" onClick={handleSearch}>Search Item</button>
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
            {noItemsAvailable ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No Items Available!</td>
              </tr>
            ) : noSearchResult ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>Item not found!</td>
              </tr>
            ) : (
              filteredItems.map((item) => (
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

export default SearchItem;
