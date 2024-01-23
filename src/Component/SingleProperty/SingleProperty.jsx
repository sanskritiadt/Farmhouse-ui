import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import villa1 from "../../assets/Images/villa1.jpg";
import villa2 from "../../assets/Images/villa2.jpg";
import villa3 from "../../assets/Images/villa3.jpg";
import { toast } from 'react-toastify';
import { fetchAmenitiesData, fetchSingleProperty } from "../../utils/api";
import './SingleProperty.css';
import PricingForm from "../pricing summary panel/pricingForm";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaUserAlt, FaMap } from 'react-icons/fa'

const SingleProperty = () => {
  const { id } = useParams();
  const [Villa, setVilla] = useState({});
  const [Amenities, setAmenities] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const singleProperty = await fetchSingleProperty(id);
        setVilla(singleProperty);
      } catch (error) {
        console.log(error);
        toast.error('Error occured in fetching property, try after some time.');

      } try {
        const amenitiesData = await fetchAmenitiesData(id);
        setAmenities(amenitiesData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img
                    src={villa1}
                    style={{ maxWidth: "900px", maxHeight: "500px" }}
                    className="d-block mx-auto"
                    alt="villa 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={villa2}
                    style={{ maxWidth: "900px", maxHeight: "500px" }}
                    className="d-block mx-auto"
                    alt="villa 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={villa3}
                    style={{ maxWidth: "900px", maxHeight: "500px" }}
                    className="d-block mx-auto"
                    alt="villa 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Card Detail*/}
      <div className="container  " style={{ marginTop: "50px" }}>
        <div className="row mb-3">
          <div className="col-lg-8">
            <div className="productDetail-card  ">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className=" Product-title">{Villa.propertyName} </h5>
                </div>
                {/* <div className="row align-items-center">
                  <div className="col-lg-1">
                    <div className="rating">
                      4.7
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="col-lg-11">
                    <i
                      className="fa fa-star yellow-star"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-star yellow-star"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-star yellow-star"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-star yellow-star"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-star yellow-star"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="location">
                    {/* <i className="fa fa-map-marker" aria-hidden="true"></i> */}
                    <HiOutlineLocationMarker />
                    <span>{Villa.address}.</span>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="location">
                    {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                    <FaUserAlt />
                    <span>{Villa.maxOccupancy} </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-10">
                    <div className="location">
                      {/* <i className="fa fa-map" aria-hidden="true"></i> */}
                      <FaMap />
                      <span>800Sq.Yard</span>
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="heart">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="heart">
                      <i className="fa fa-share" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="container pt-5">
              <div className="row">
                {Amenities ? (
                  <div>
                    <ul>
                      <h5>Amenities:</h5>
                      {Amenities.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------------------------- Pricing Summary panel----------------------------- */}

          <PricingForm />
        </div>

      </div>

    </>
  );
};

export default SingleProperty;
