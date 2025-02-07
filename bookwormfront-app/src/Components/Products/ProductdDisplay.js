import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa"; // Import filter icon
import { BsCartPlus } from "react-icons/bs"; // Import cart icon

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [languageDesc, setLanguageDesc] = useState('');
    const [typeDesc, setTypeDesc] = useState('');
    const [genreDesc, setGenreDesc] = useState('');

    const fetchAllProducts = () => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.ok ? response.json() : Promise.reject('Network error'))
            .then(data => setProducts(data))
            .catch(error => setError(error));
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    useEffect(() => {
        if (languageDesc || typeDesc || genreDesc) {
            const query = new URLSearchParams({
                ...(languageDesc && { languageDesc }),
                ...(typeDesc && { typeDesc }),
                ...(genreDesc && { genreDesc }),
            }).toString();

            fetch(`http://localhost:8080/api/products/filter?${query}`)
                .then(response => response.ok ? response.json() : Promise.reject('Network error'))
                .then(data => setProducts(data))
                .catch(error => setError(error));
        } else {
            fetchAllProducts();
        }
    }, [languageDesc, typeDesc, genreDesc]);

    if (error) return <div>Error: {error.message}</div>;

    const addToCart = (product) => {
        console.log(`Added ${product.productName} to cart`);
    };

    return (
        <div className="product-page">
            <div className="filter-section">
                {/* <h3><FaFilter /> Filters</h3> */}
                <select onChange={(e) => setLanguageDesc(e.target.value)}>
                    <option value="">Language</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                </select>
                <select onChange={(e) => setTypeDesc(e.target.value)}>
                    <option value="">Type</option>
                    <option value="book">Book</option>
                    <option value="movie">Movie</option>
                    <option value="game">Game</option>
                </select>
                <select onChange={(e) => setGenreDesc(e.target.value)}>
                    <option value="">Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </select>
            </div>

            <div className="grid-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src="https://imgs.search.brave.com/fQFeRg-OtzjHLG6UXvP2pkejFD634-A3HiMYb94D9iQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjA4/MDc1NTE4L3Bob3Rv/L2hhbnVtYW4tcmFt/YXlhbmEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUNVb3BE/UUY5aWJ1MkNCX1hK/ZDY2bTNwTWJfMk9n/Q2xlYy1fLXdGSU0t/LUk9" alt={product.productName} />
                        <h2>{product.productName}</h2>
                        <p className="description">{product.productDescriptionShort}</p>
                        <p className="author">By {product.productAuthor}</p>
                        <p className="price">Price: ${product.productBasePrice}</p>
                        <button className="cart-button" onClick={() => addToCart(product)}>
                            <BsCartPlus /> Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .product-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                
                .filter-section {
                    display: flex;
                    gap: 15px;
                    padding: 10px 20px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 0;
                    z-index: 10;
                    width: 80%;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                
                .filter-section select {
                    padding: 8px;
                    border-radius: 5px;
                    border: 1px solid #ddd;
                    cursor: pointer;
                }
                
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    width: 100%;
                    max-width: 1200px;
                }
                
                .product-card {
                    background: white;
                    padding: 15px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-align: center;
                }
                
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0px 6px 12px rgba(0,0,0,0.2);
                }
                
                .product-card img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                }
                
                .product-card h2 {
                    font-size: 1.2rem;
                    color: #333;
                    margin: 10px 0;
                }
                
                .description {
                    font-size: 0.9rem;
                    color: #666;
                    margin-bottom: 10px;
                }
                
                .author {
                    font-size: 0.9rem;
                    font-weight: bold;
                    color: #444;
                }
                
                .price {
                    font-size: 1.1rem;
                    font-weight: bold;
                    color: #28a745;
                    margin: 5px 0;
                }
                
                .cart-button {
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    border-radius: 5px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    font-size: 1rem;
                    transition: background 0.3s ease;
                }
                
                .cart-button:hover {
                    background: #0056b3;
                }

                @media (max-width: 768px) {
                    .filter-section {
                        flex-direction: column;
                        width: 100%;
                        align-items: center;
                    }
                    .grid-container {
                        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDisplay;
