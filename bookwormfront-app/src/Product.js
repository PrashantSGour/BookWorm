import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        authors: [],
        genres: [],
        languages: [],
        types: []
    });
    const [selectedFilters, setSelectedFilters] = useState({
        author: '',
        genre: '',
        language: '',
        type: ''
    });
    const [pagination, setPagination] = useState({
        page: 0,
        size: 10,
        totalPages: 1
    });

    const API_BASE_URL = "http://localhost:8080/api/products";

    // Fetch filter data on component mount
    useEffect(() => {
        axios.get(`${API_BASE_URL}/filters`)
            .then(response => setFilters(response.data))
            .catch(error => console.error("Error fetching filters:", error));
        
        fetchProducts();
    }, []);

    // Fetch products when filters or pagination change
    useEffect(() => {
        fetchProducts();
    }, [selectedFilters, pagination.page]);

    const fetchProducts = () => {
        const { page, size } = pagination;
        axios.get(API_BASE_URL, {
            params: {
                author: selectedFilters.author,
                genre: selectedFilters.genre,
                language: selectedFilters.language,
                typeId: selectedFilters.type,
                page,
                size
            }
        })
        .then(response => {
            setProducts(response.data.content);
            setPagination(prev => ({ ...prev, totalPages: response.data.totalPages }));
        })
        .catch(error => console.error("Error fetching products:", error));
    };

    // Handle dropdown changes
    const handleFilterChange = (e) => {
        setSelectedFilters(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div>
            <h2>Products</h2>

            {/* Filters */}
            <div>
                <label>Author:</label>
                <select name="author" onChange={handleFilterChange} value={selectedFilters.author}>
                    <option value="">All</option>
                    {filters.authors.map(author => (
                        <option key={author} value={author}>{author}</option>
                    ))}
                </select>

                <label>Genre:</label>
                <select name="genre" onChange={handleFilterChange} value={selectedFilters.genre}>
                    <option value="">All</option>
                    {filters.genres.map(genre => (
                        <option key={genre.id} value={genre.genreDesc}>{genre.genreDesc}</option>
                    ))}
                </select>

                <label>Language:</label>
                <select name="language" onChange={handleFilterChange} value={selectedFilters.language}>
                    <option value="">All</option>
                    {filters.languages.map(language => (
                        <option key={language.id} value={language.languageDesc}>{language.languageDesc}</option>
                    ))}
                </select>

                <label>Type:</label>
                <select name="type" onChange={handleFilterChange} value={selectedFilters.type}>
                    <option value="">All</option>
                    {filters.types.map(type => (
                        <option key={type.id} value={type.id}>{type.typeDesc}</option>
                    ))}
                </select>
            </div>

            {/* Product List */}
            <div>
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.productId}>
                            <h4>{product.productName}</h4>
                            <p>{product.productDescriptionShort}</p>
                            <p>Price: ₹{product.productBasePrice}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>

            {/* Pagination */}
            <div>
                <button 
                    disabled={pagination.page === 0} 
                    onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}>
                    Prev
                </button>
                
                <span> Page {pagination.page + 1} of {pagination.totalPages} </span>

                <button 
                    disabled={pagination.page === pagination.totalPages - 1} 
                    onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Product;
