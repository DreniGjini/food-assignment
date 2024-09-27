import { useState } from "react";
import { MapPin, Store, SaladIcon, Leaf } from "lucide-react"; // Importing specific icons from Lucide
import { useQuery } from "@apollo/client";
import { SmartSearchDocument } from "./graphql/graphQltypes.generated";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, refetch } = useQuery(SmartSearchDocument);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch({
      searchTerm: searchValue,
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <form onSubmit={handleSearch} className="flex gap-1">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 px-4 rounded-md text-white"
        >
          Search
        </button>
      </form>

      {!loading && data && data?.smartSearch?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {data?.smartSearch?.map((result, index) => (
            <li
              key={index}
              className="p-4 bg-white border border-gray-200 rounded-md shadow-sm flex items-center space-x-4"
            >
              {result.city && (
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{result.city.name}</span>
                </div>
              )}
              {result.brand && (
                <div className="flex items-center space-x-2">
                  <Store className="w-5 h-5 text-green-500" />
                  <span>{result.brand.name}</span>
                </div>
              )}
              {result.dishType && (
                <div className="flex items-center space-x-2">
                  <SaladIcon className="w-5 h-5 text-yellow-500" />
                  <span>{result.dishType.name}</span>
                </div>
              )}
              {result.diet && (
                <div className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span>{result.diet.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
