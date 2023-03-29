import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = ({ data, showAll }) => {
  const [uniqueId, setUniqueId] = useState(null);
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-4 container mx-auto justify-items-center ">
      {data.slice(0, showAll ? 12 : 6).map((singleData) => {
        return (
          <SingleData
            data={singleData}
            setUniqueId={setUniqueId}
            key={singleData.id}
          ></SingleData>
        );
      })}
      <Modal singleData={singleData}></Modal>
    </div>
  );
};

export default Card;
