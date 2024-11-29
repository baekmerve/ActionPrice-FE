/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CategorySection from "../components/Home/CategorySection.jsx";
import { largeCategoryList } from "../assets/assest.js";

const Home = () => {
  const [categories, setCategories] = useState(largeCategoryList);
  const [error, setError] = useState(null);

console.log("largeCategoryList:", largeCategoryList);

  return (
    <>
      <CategorySection
        categories={categories}
        error={error}
      />
    </>
  );
};

export default Home;
