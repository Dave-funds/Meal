import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const MealList = () => {
  const { isLoading, foods } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  if (foods.length < 1) {
    return (
      <h1 className="text-sucess text-center my-5"> 😭😭😭😭 NO FOOD FOUND</h1>
    );
  }
  return (
    <div
      id="below"
      className="container d-flex flex-wrap justify-content-between align-items-center"
    >
      {foods.map((food) => {
        const { idMeal, strMealThumb, strCategory, strMeal } = food;
        return (
          <Link
            to={`/meal/${idMeal}`}
            className="text-decoration-none mx-3 mx-auto "
            key={idMeal}
          >
            <div style={{ width: "280px" }} className="shadow shadow-lg card">
              <img
                src={strMealThumb}
                alt={strMeal}
                className="rounded-top-2 w-100"
              />
              <h4 className="text-success fw-bold text-center mt-3">
                {strMeal}
              </h4>
              <h5 className="text-secondary text-center fw-light">
                {strCategory}
              </h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MealList;
