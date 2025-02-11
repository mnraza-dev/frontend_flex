"use client";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import "../app/globals.css";
import { FaSearch } from "react-icons/fa";

// Sample documentation data (for demo purposes)
const documentation = [
  { title: "Getting Started", link: "/learn/intro" },
  { title: "Hooks", link: "/learn/hooks" },
  { title: "Context API", link: "/learn/context" },
  { title: "State Management", link: "/learn/state-management" },
  { title: "Component Basics", link: "/learn/component-basics" },
];

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<{ title: string; link: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalSearchInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    filterResults(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
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
      {/* Trigger the modal on search icon click (visible only on mobile) */}
      <div className="relative flex items-center rounded-full w-full">
        {/* Search Icon Visible Only on Mobile Devices */}
        <span
          className="absolute left-3 text-gray-500 lg:hidden cursor-pointer"
          onClick={handleClickSearch}
        >
          <FaSearch />
        </span>

        {/* Input field visible only on larger screens */}
        <input
          type="text"
          placeholder="Search..."
          className="searchbar hidden lg:block"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {/* Keyboard Shortcuts Inside the Input (only for larger screens) */}
        <span className="absolute right-3 flex items-center space-x-1 hidden lg:flex">
          <kbd className="w-5 h-5 border border-transparent bg-wash dark:bg-wash-dark text-gray-30 rounded-md text-xs inline-flex justify-center items-center">
            ⌘
          </kbd>
          <kbd className="w-10 h-5 border border-transparent bg-wash dark:bg-wash-dark text-gray-30 rounded-md text-xs inline-flex justify-center items-center">
            Ctrl
          </kbd>
          <kbd className="w-5 h-5 border border-transparent bg-wash dark:bg-wash-dark text-gray-30 rounded-md text-xs inline-flex justify-center items-center">
            K
          </kbd>
        </span>
      </div>

      {/* Modal for Search Results */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* Search input inside the modal */}
        <div className="relative flex items-center rounded-full w-full">
          {/* Search Icon Inside the Input */}
          <span className="absolute left-3 text-gray-500">
            <FaSearch />
          </span>
          <input
            ref={modalSearchInputRef} // Set the ref here to focus the input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation..."
            className="searchbar"
          />
        </div>

        {/* Display Search Results */}
        {results.length > 0 ? (
          <ul style={{ marginTop: "10px" }}>
            {results.map((result, index) => (
              <li key={index} className="search_list">
                <a href={result.link} target="_blank" rel="noopener noreferrer">
                  <span className="text-gray-400 mr-2">#</span> {result.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-[60vh] w-full">
            <p>No results found.</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SearchBox;
