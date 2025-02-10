
"use client"
import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

// Sample documentation data (for demo purposes)
const documentation = [
  { title: 'Getting Started', link: '/learn/intro' },
  { title: 'Hooks', link: '/learn/hooks' },
  { title: 'Context API', link: '/learn/context' },
  { title: 'State Management', link: '/learn/state-management' },
  { title: 'Component Basics', link: '/learn/component-basics' },
  
];

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<{ title: string; link: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const modalSearchInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    filterResults(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
   
    if (event.key === 'Enter') {
      filterResults(searchQuery);
    }
  };

  const handleClickSearch = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const filterResults = (query: string) => {
    const filteredResults = documentation.filter((doc) =>
      doc.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  useEffect(() => {
    if (isModalOpen && modalSearchInputRef.current) {
     
      modalSearchInputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div>
      {/* Trigger the modal on search bar click */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Listen for Enter key press
        onClick={handleClickSearch} // Open the modal when clicked
        placeholder="Search documentation..."
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          color: '#000',
          width: '250px',
        }}
      />

      {/* Modal for Search Results */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3>Search Results</h3>

        {/* Search input inside the modal */}
        <input
          ref={modalSearchInputRef} // Set the ref here to focus the input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search documentation..."
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
            marginBottom: '10px',
          }}
        />

        {/* Display Search Results */}
        {results.length > 0 ? (
          <ul style={{ marginTop: '10px' }}>
            {results.map((result, index) => (
              <li key={index}>
                <a href={result.link} style={{ textDecoration: 'none', color: '#007bff' }}>
                  {result.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </Modal>
    </div>
  );
};

export default SearchBox;
