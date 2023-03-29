import React, { useEffect, useState } from "react";
import Button from "./component/Button/Button";
import Card from "./component/Card/Card";
import Header from "./component/Header/Header";

const App = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const seeAll = () => {
    setShowAll(true);
  };
  const handleSort = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(b.published_in) - new Date(a.published_in);
    });
    setData([...data, sortedData]);
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      // console.log(value.data.tools);
      setData(value.data.tools);
    };
    loadData();
  }, []);
  return (
    <>
      <Header></Header>
      <span onClick={handleSort}>
        <Button>Sort By Date</Button>
      </span>
      <Card data={data} showAll={showAll}></Card>
      {!showAll && (
        <span onClick={seeAll}>
          <Button>See More</Button>
        </span>
      )}
    </>
  );
};

export default App;
