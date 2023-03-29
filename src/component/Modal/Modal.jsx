import React, { useEffect, useState } from "react";

const Modal = (props) => {
  console.log(props.singleData);
  const { tool_name, description, logo, features, image_link, integrations } =
    props.singleData;
  console.log(integrations);
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body border border-rose-500 rounded mr-4">
              <h2 className="card-title">
                {description ? description : "Not Found"}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">Features:</h2>
                  {Object.values(features || {}).map((value) => (
                    <p>
                      {value.feature_name ? value.feature_name : "Not Found"}
                    </p>
                  ))}
                </div>
                <div>
                  <h2 className="text-xl font-bold">Integrations:</h2>
                  {integrations &&
                    integrations?.map((value) => (
                      <p>{value ? value : "Not Found"}</p>
                    ))}
                </div>
              </div>
            </div>
            <figure className="w-full h-65">
              <img src={image_link && image_link[0]} alt="Album" />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn btn-error">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
