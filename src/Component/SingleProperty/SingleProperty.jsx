import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import villa1 from "../../assets/Images/villa1.jpg";
import villa2 from "../../assets/Images/villa2.jpg";
import villa3 from "../../assets/Images/villa3.jpg";
import { toast } from 'react-toastify';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FaUserAlt,FaMap} from 'react-icons/fa'


const SingleProperty = () => {
  const { id } = useParams();
  const [Villa, setVilla] = useState({});
  const [Amenities, setAmenities] = useState(null);
  
  const [data, setData] = useState({
    email: "",
    checkInDate: "",
    checkOutDate: "",
    guestNo: "",
  });

  useEffect(() => {
    axios
      .get(`/alpha-homes/property/getPropertyDetailsById/${id}`)
      .then((response) => {
        console.log(response.data);
        setVilla(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`/alpha-homes/property/getAmenitiesDetails/${id}`)
      .then((response) => {
        console.log(response.data);
        setAmenities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function submit(e) {
    e.preventDefault();
    axios.post(`/alpha-homes/booking/createBooking`, {
      email: data.email,
      propertyId: Villa.propertyId,
      checkInDate: data.checkInDate,
      checkOutDate: data.checkOutDate,
      guestNo: parseInt(data.guestNo),
      totalPrice: Villa.price,
    }).then((response) => {
      console.log(response.data)
      toast.success(response.data, { position: 'top-center', theme: "colored" })
    }).catch((error) => {
      console.log(error);
      toast.error("Error occured try after sometime.", { position: "top-center", theme: 'colored' })
    })
  }

  return (
    <>
      <div className="container ">
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
                    <HiOutlineLocationMarker/>
                    <span>{Villa.address}.</span>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="location">
                    {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                    <FaUserAlt/>
                    <span>{Villa.maxOccupancy} </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-10">
                    <div className="location">
                      {/* <i className="fa fa-map" aria-hidden="true"></i> */}
                      <FaMap/>
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
                        <h4>Amenities:</h4>
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

          <div className=" productDetail-card col-lg-4 col-md-5 margin-top-25 ">
            <i className="fa fa-inr" aria-hidden="true"></i>
            <span className="property-discount payable_amt" style={{ fontWeight: "bolder", fontSize: '18px' }}>{Villa.price}.00/-</span>
            <span style={{ fontSize: '12px' }}>&nbsp; &nbsp;(Inclusive of all charges)</span>
            <hr className="m-t-sm m-b-lg" />
            <form>
              <div className="with-forms margin-top-0">
                <div className="row with-forms">
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker6">
                        <label htmlFor="inputCheckin" className="col-md-4 col-form-label">Check-In:</label>
                        <input type="date" onChange={(e) => { handle(e) }} value={data.checkInDate}
                          className="form-control"
                          id="checkInDate" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker7">
                        <label htmlFor="inputCheckin" className="col-md-4 col-form-label" name='checkOutDate'>Check-Out:</label>
                        <input type="date" className="form-control" onChange={(e) => { handle(e) }} value={data.checkOutDate}
                          id="checkOutDate"
                        />

                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker7">
                        <label htmlFor="inputCheckin" className="col-md-4 col-form-label" name='noofguest'>No. of Guest:</label>
                        <input type="number" onChange={(e) => { handle(e) }} value={data.guestNo} id="guestNo"
                          className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker7">
                        <label htmlFor="inputCheckin" className="col-md-4 col-form-label" name='checkOutDate'>Email:</label>
                        <input type="email" className="form-control" onChange={(e) => { handle(e) }} value={data.email}
                          id="email"
                        />

                      </div>
                    </div>
                  </div>
                </div>
                <div className="row with-forms">
                  <div className="col-lg-12 col-md-12">
                    <hr className="v-divider theme--light m-b-sm" />
                  </div>
                </div>
                <div className="row with-forms m-t-xl mb-3">
                  <div className="col-lg-12 col-md-12 form-group">
                    <div className="checkboxes">
                      <input type="checkbox" />
                      <label style={{ marginLeft: '10px' }}>
                        I, agree to Farmhouse Terms &amp; Conditions
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto btn-group btn-group-sm">
                <button className="btn btn-outline-success" onClick={submit} type="button">Book now</button>
              </div>
            </form>
            <div>
            </div>
          </div>

        </div>

      </div>

    </>
  );
};

export default SingleProperty;
