import React from "react";

const Modal = (props) => {
  console.log(props.singleData);
  const { integrations, description,image_link,features } = props.singleData;

  console.log(Object.values(features || {}).map(item => <p>{item.feature_name}</p>));

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
           
            <div className="card-body border-2 border-error mr-2">
              <h2 className="card-title">{description ? description : null}</h2>
               <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Features</h1>
                    {
                       Object.values(features || {}).map(value => <p>{value.feature_name}</p>)
                    }
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Integrations</h1>
                    {
                       integrations && integrations.map(value=><p>{value? value : 'not found'}</p>)
                    }
                </div>
               </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>

            <figure>
              <img className="w-full h-64"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
