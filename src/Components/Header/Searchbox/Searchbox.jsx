import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Searchbox.css';

const Searchbox = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const searchRef = useRef(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            setNoResults(true);
            setShowResults(true);
            return;
        }

        await fetchData();

        const filteredResults = items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredItems(filteredResults);
        setShowResults(true);
        setNoResults(filteredResults.length === 0);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setShowResults(false);
        }
    };

    const clearSearchResults = () => {
        setFilteredItems([]);
        setShowResults(false);
        setNoResults(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClearSearch = () => {
        setNoResults(false);
        setFilteredItems([]);
        setShowResults(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        handleSearch(); // Trigger search on every input change
    };

    return (
        <div ref={searchRef}>
            <Form className="search-box" onSubmit={handleFormSubmit}>
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="ms-2"
                    style={{ border: 'none' }}
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <Button
                    style={{ borderRadius: '0px 20px 20px 0px', color: "#17a2b8" }}
                    variant="light"
                    onClick={handleSearch}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </Form>

            {showResults && (
                <div className="search-results">
                    {noResults ? (
                        <p>
                            Oops! No results found{' '}
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="cross-icon"
                                onClick={handleClearSearch}
                            />
                        </p>
                    ) : searchQuery.trim() !== '' ? (
                        <>
                            <h3>Search Results:</h3>
                            <ul>
                                {filteredItems.map((item) => (
                                    <li key={item.id}>{item.title}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </div>
            )}

            {showResults && (
                <div className="overlay" onClick={handleClearSearch}></div>
            )}
        </div>
    );
};

export default Searchbox;
