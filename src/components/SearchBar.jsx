import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search keyword!");
      return;
    }
    onSubmit(query);
  };
  return (
    <div>
      <header className="headerLine">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={query}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
        <Toaster />
      </header>
    </div>
  );
}
