import React from "react";

const PropertyCard = ({ name, address, price }) => {
    return (
<div className="card float-right  my-5 col-xl-6 utf_listing_item-container" >
            {/* <!-- Reduced margin-bottom for less height --> */}
            <div className="row ml-4 ">
                <div className="col-sm-4">
                        <img src="https://source.unsplash.com/random/200x200?sig=1"  className="card-img-top"/> 
                </div>
                <div className="col-sm-4" style={{fontWeight:"50"}} >
                    <div className="card-block mt-5" >
                        <h5 className="card-title" >{name}</h5>
                        <p className="card-text">{address}</p>
                        <p className="card-text">Rs.{price}/-</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard ;
