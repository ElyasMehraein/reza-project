// components/SearchBox.js
const SearchBox = ({ onSearch }) => {
    const handleSearch = (e) => {
      const query = e.target.value;
      onSearch(query);
    };
  
    return <input type="text" placeholder="Search..." onChange={handleSearch} />;
  };
  
  export default SearchBox;
  