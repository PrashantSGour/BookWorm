import React, { useState, useEffect } from 'react';

const ProductsPage = () => {
  // State to store all products and the filtered products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // State for each filter
  const [genreFilter, setGenreFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Fetch products from the backend on component mount
  useEffect(() => {
    fetch('http://localhost:8080/api/products') // Make sure this endpoint exists and returns the products
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Update the filtered products when any filter or the product list changes
  useEffect(() => {
    let filtered = products;

    if (genreFilter) {
      filtered = filtered.filter((product) => product.genre === genreFilter);
    }
    if (languageFilter) {
      filtered = filtered.filter((product) => product.language === languageFilter);
    }
    if (typeFilter) {
      filtered = filtered.filter((product) => product.type === typeFilter);
    }

    setFilteredProducts(filtered);
  }, [genreFilter, languageFilter, typeFilter, products]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>

      {/* Filter Controls */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>
          Genre:
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            style={{ marginLeft: '5px' }}
          >
            <option value="">All</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            {/* Add more genres as needed */}
          </select>
        </label>

        <label style={{ marginRight: '10px' }}>
          Language:
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            style={{ marginLeft: '5px' }}
          >
            <option value="">All</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            {/* Add more languages as needed */}
          </select>
        </label>

        <label>
          Type:
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            style={{ marginLeft: '5px' }}
          >
            <option value="">All</option>
            <option value="book">Book</option>
            <option value="movie">Movie</option>
            <option value="game">Game</option>
            {/* Add more types as needed */}
          </select>
        </label>
      </div>

      {/* Display Products */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <h2>{product.name}</h2>
              <p>
                <strong>Genre:</strong> {product.genre}
              </p>
              <p>
                <strong>Language:</strong> {product.language}
              </p>
              <p>
                <strong>Type:</strong> {product.type}
              </p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
