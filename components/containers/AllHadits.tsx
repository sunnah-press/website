import { useEffect, useState } from "react";
import SearchBar from "../layouts/SearchBar";
import ListPage from "../layouts/ListPage";
import axios from "axios";
import { Pagination } from "../layouts/Pagination";

export default function AllHadits() {
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchHadits = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/bukhari${
          value === "" ? "" : "?search=" + value
        }`
      );
      setSearchResults(res.data);
    };
    fetchHadits();
  }, [value]);

  return (
    <div className="container mx-auto">
      <div className="hero text-center mt-32 mb-10 w-4/5 mx-auto">
        <h2 className="text-3xl font-extrabold bg-gradient-to-tr from-blue-700 to-cyan-500 bg-clip-text text-transparent p-3">
          Semua Hadits di Shahih Al-Bukhari
        </h2>
        <SearchBar setSearchResults={setSearchResults} setValue={setValue} />
      </div>

      <ListPage
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />

      <Pagination />
    </div>
  );
}
