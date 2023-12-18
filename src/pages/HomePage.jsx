import React from "react";
import Hero from "../components/Hero";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <MealList />
    </div>
  );
};

export default HomePage;
