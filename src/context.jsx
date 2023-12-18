import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const finalUrl = `${url}${searchValue}`;

  const fetchData = async () => {
    setIsLoading(true);
    const {
      data: { meals },
    } = await axios(finalUrl);
    if (meals) {
      setFoods(meals);
    } else {
      setFoods([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 2000);
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{ isLoading, foods, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
