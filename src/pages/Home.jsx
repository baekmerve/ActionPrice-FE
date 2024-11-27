/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import EventSlide from "../components/Home/EventSlide.jsx";
import CategorySection from "../components/Home/CategorySection.jsx";
import { largeCategoryList } from "../assets/assest.js";

const Home = () => {
  const [categories, setCategories] = useState(largeCategoryList);
  const [error, setError] = useState(null);

console.log("largeCategoryList:", largeCategoryList);

  return (
    <>
      <EventSlide error={error} />
      <CategorySection
        categories={categories}
        error={error}
      />
    </>
  );
};

export default Home;
