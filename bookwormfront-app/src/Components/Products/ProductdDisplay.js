// // import React, { useEffect, useState } from 'react';

// // const ProductDisplay = () => {
// //     const [products, setProducts] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [languageDesc, setLanguageDesc] = useState('');

// //     useEffect(() => {
// //         fetch('http://localhost:8080/api/products')
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error('Network response was not ok');
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 setProducts(data);
// //             })
// //             .catch(error => {
// //                 setError(error);
// //             });
// //     }, []);

// //     useEffect(() => {
// //         const query = new URLSearchParams({ languageDesc }).toString();
// //         fetch(`http://localhost:8080/api/products/filter?${query}`)
// //             .then(response => { 
// //                 if (!response.ok) {
// //                     throw new Error('Network response was not ok');
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 setProducts(data);
// //             })
// //             .catch(error => { 
// //                 setError(error);
// //             }); 
// //     }, [languageDesc]);

// //     if (error) {
// //         return <div>Error: {error.message}</div>;
// //     }

// //     const addToCart = (product) => {
// //         // Add product to cart logic here
// //         console.log(`Added ${product.productName} to cart`);
// //     };

// //     const handleLanguageChange = (e) => {
// //         setLanguageDesc(e.target.value);
// //     };

// //     return (
// //         <>
// //             <div className="product-grid">
// //                 <h1>Product List</h1>
// //                 <div className="filters">
// //                     <label>
// //                         Language:
// //                         <select name="languageDesc" onChange={handleLanguageChange}>
// //                             <option value="">All</option>
// //                             <option value="english">English</option>
// //                             <option value="spanish">Spanish</option>
// //                             <option value="french">French</option>
// //                             {/* Add more languages as needed */}
// //                         </select>
// //                     </label>
// //                 </div>
// //                 <div className="grid-container">
// //                     {products.map(product => (
// //                         <div key={product.id} className="grid-item">
// //                             <img src={"https://imgs.search.brave.com/eAfXcFrIxqcD6DtEuAg7-OWN0MrehR1ywb2VRiWFJgw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHUmxOREJs/WWpZdE1tUTNNeTAw/WVdOakxUZ3laalF0/TVdVellUY3pObVZs/TVRKbFhrRXlYa0Zx/Y0djQC5qcGc"} alt={product.productName} />
// //                             <h2>{product.productName}</h2>
// //                             <p>{product.productDescription}</p>
// //                             <p>Author: {product.productAuthor}</p>
// //                             <div className="price-cart">
// //                                 <p>Price: ${product.productBasePrice}</p>
// //                                 <button onClick={() => addToCart(product)}>Add to Cart</button>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //             <style jsx>{`
// //                 .product-grid {
// //                     display: flex;
// //                     flex-direction: column;
// //                     align-items: center;
// //                 }
// //                 .grid-container {
// //                     display: grid;
// //                     grid-template-columns: repeat(3, 1fr);
// //                     gap: 20px;
// //                     width: 100%;
// //                     max-width: 1200px;
// //                 }
// //                 .grid-item {
// //                     border: 1px solid #ccc;
// //                     padding: 20px;
// //                     text-align: center;
// //                 }
// //                 .grid-item img {
// //                     max-width: 100%;
// //                     height: auto;
// //                 }
// //                 .price-cart {
// //                     display: flex;
// //                     justify-content: space-between;
// //                     align-items: center;
// //                     margin-top: 10px;
// //                 }
// //             `}</style>
// //         </>
// //     );

// // };

// // export default ProductDisplay;
// import React, { useEffect, useState } from 'react';

// const ProductDisplay = () => {
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);
//     const [languageDesc, setLanguageDesc] = useState('');

//     // Function to fetch all products from the API
//     const fetchAllProducts = () => {
//         fetch('http://localhost:8080/api/products')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setProducts(data);
//             })
//             .catch(error => {
//                 setError(error);
//             });
//     };

//     // Initially, fetch all products when the component mounts.
//     useEffect(() => {
//         fetchAllProducts();
//     }, []);

//     // When languageDesc changes, decide what to do:
//     // - If a language is selected, call the filter endpoint.
//     // - Otherwise, show all products.
//     useEffect(() => {
//         if (languageDesc) {
//             // Create a query string with the languageDesc value.
//             const query = new URLSearchParams({ languageDesc }).toString();
//             fetch(`http://localhost:8080/api/products/filter?${query}`)
//                 .then(response => { 
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     setProducts(data);
//                 })
//                 .catch(error => { 
//                     setError(error);
//                 });
//         } else {
//             // If no language filter is applied, show all products.
//             fetchAllProducts();
//         }
//     }, [languageDesc]);

//     // If there's an error, show it.
//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     // Dummy function to simulate adding a product to the cart.
//     const addToCart = (product) => {
//         // Add product to cart logic here.
//         console.log(`Added ${product.productName} to cart`);
//     };

//     // When the user changes the dropdown, update languageDesc.
//     const handleLanguageChange = (e) => {
//         setLanguageDesc(e.target.value);
//     };

//     return (
//         <>
//             <div className="product-grid">
//                 <h1>Product List</h1>
//                 <div className="filters">
//                     <label>
//                         Language:
//                         <select name="languageDesc" onChange={handleLanguageChange}>
//                             <option value="">All</option>
//                             <option value="english">English</option>
//                             <option value="spanish">Spanish</option>
//                             <option value="french">French</option>
//                             {/* Add more languages as needed */}
//                         </select>
//                     </label>
//                 </div>
//                 <div className="grid-container">
//                     {products.map(product => (
//                         <div key={product.id} className="grid-item">
//                             <img 
//                                 src="https://imgs.search.brave.com/eAfXcFrIxqcD6DtEuAg7-OWN0MrehR1ywb2VRiWFJgw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHUmxOREJs/WWpZdE1tUTNNeTAw/WVdOakxUZ3laalF0/TVdVellUY3pObVZs/TVRKbFhrRXlYa0Zx/Y0djQC5qcGc" 
//                                 alt={product.productName} 
//                             />
//                             <h2>{product.productName}</h2>
//                             <p>{product.productDescription}</p>
//                             <p>Author: {product.productAuthor}</p>
//                             <div className="price-cart">
//                                 <p>Price: ${product.productBasePrice}</p>
//                                 <button onClick={() => addToCart(product)}>Add to Cart</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <style jsx>{`
//                 .product-grid {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                 }
//                 .grid-container {
//                     display: grid;
//                     grid-template-columns: repeat(3, 1fr);
//                     gap: 20px;
//                     width: 100%;
//                     max-width: 1200px;
//                 }
//                 .grid-item {
//                     border: 1px solid #ccc;
//                     padding: 20px;
//                     text-align: center;
//                 }
//                 .grid-item img {
//                     max-width: 100%;
//                     height: auto;
//                 }
//                 .price-cart {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     margin-top: 10px;
//                 }
//             `}</style>
//         </>
//     );
// };

// export default ProductDisplay;
import React, { useEffect, useState } from 'react';

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [languageDesc, setLanguageDesc] = useState('');
    const [typeDesc, setTypeDesc] = useState('');
    const [genreDesc, setGenreDesc] = useState('');

    // Function to fetch all products from the API.
    const fetchAllProducts = () => {
        fetch('http://localhost:8080/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                setError(error);
            });
    };

    // Initially, fetch all products when the component mounts.
    useEffect(() => {
        fetchAllProducts();
    }, []);

    // When any filter changes, build the query string and fetch filtered products.
    useEffect(() => {
        // Check if any filter has a value.
        if (languageDesc || typeDesc || genreDesc) {
            // Build the query string based on the current filters.
            const query = new URLSearchParams({
                ...(languageDesc && { languageDesc }),
                ...(typeDesc && { typeDesc }),
                ...(genreDesc && { genreDesc }),
            }).toString();

            fetch(`http://localhost:8080/api/products/filter?${query}`)
                .then(response => { 
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setProducts(data);
                })
                .catch(error => { 
                    setError(error);
                });
        } else {
            // If no filters are applied, fetch all products.
            fetchAllProducts();
        }
    }, [languageDesc, typeDesc, genreDesc]);

    // If there's an error, display it.
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Dummy function to simulate adding a product to the cart.
    const addToCart = (product) => {
        console.log(`Added ${product.productName} to cart`);
    };

    // Event handlers for filter dropdown changes.
    const handleLanguageChange = (e) => {
        setLanguageDesc(e.target.value);
    };

    const handleTypeChange = (e) => {
        setTypeDesc(e.target.value);
    };

    const handleGenreChange = (e) => {
        setGenreDesc(e.target.value);
    };

    return (
        <>
            <div className="product-grid">
                <h1>Product List</h1>
                <div className="filters">
                    <label>
                        Language:
                        <select name="languageDesc" onChange={handleLanguageChange}>
                            <option value="">All</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            {/* Add more languages as needed */}
                        </select>
                    </label>
                    <label>
                        Type:
                        <select name="typeDesc" onChange={handleTypeChange}>
                            <option value="">All</option>
                            <option value="book">Book</option>
                            <option value="movie">Movie</option>
                            <option value="game">Game</option>
                            {/* Add more types as needed */}
                        </select>
                    </label>
                    <label>
                        Genre:
                        <select name="genreDesc" onChange={handleGenreChange}>
                            <option value="">All</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            {/* Add more genres as needed */}
                        </select>
                    </label>
                </div>
                <div className="grid-container">
                    {products.map(product => (
                        <div key={product.id} className="grid-item">
                            <img 
                                src="https://imgs.search.brave.com/eAfXcFrIxqcD6DtEuAg7-OWN0MrehR1ywb2VRiWFJgw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHUmxOREJs/WWpZdE1tUTNNeTAw/WVdOakxUZ3laalF0/TVdVellUY3pObVZs/TVRKbFhrRXlYa0Zx/Y0djQC5qcGc" 
                                alt={product.productName} 
                            />
                            <h2>{product.productName}</h2>
                            <p>{product.productDescription}</p>
                            <p>Author: {product.productAuthor}</p>
                            <div className="price-cart">
                                <p>Price: ${product.productBasePrice}</p>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .product-grid {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .filters {
                    margin-bottom: 20px;
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    width: 100%;
                    max-width: 1200px;
                }
                .grid-item {
                    border: 1px solid #ccc;
                    padding: 20px;
                    text-align: center;
                }
                .grid-item img {
                    max-width: 100%;
                    height: auto;
                }
                .price-cart {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                }
            `}</style>
        </>
    );
};

export default ProductDisplay;

