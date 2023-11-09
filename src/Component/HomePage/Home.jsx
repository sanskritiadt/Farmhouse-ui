import React from "react";
import './Home.css';
import { AiTwotoneHome } from "react-icons/ai";
import { HiHomeModern } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import { MdOutlineHouse } from "react-icons/md";
import SearchBar from  '../SearchBar/SearchBar.jsx';

export default function Home() {


  return (
    <>
      <div className="home-bg">
        <div className="bg-area">
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="Nearby">
                  <h1>
                    Find Your Nearby <span>Villas Weekend Homes</span>
                  </h1>
                  <h4>
                    Find some best places to spend your holiday in your own
                    city.
                  </h4>
                </div>
                <div className="need-place">
                  <div className="row">
                    <div className="col-lg-12">
                    <SearchBar />
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div className="row">
                <div className="Browse">
                  <h3>Or Browse Popular Categories</h3>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <MdOutlineHouse />
                        <p>Farmhouse</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <AiTwotoneHome />
                        <p>Villa</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <HiHomeModern />
                        <p>Apartment</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cart">
                    <a href="/">
                      <div className="house-icons">
                        <MdApartment />
                        <p>Weekend Home</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </section>
        </div>
      </div>

      <section className="section-padding">
        <div className="Most-Recommended">
          <div className="justify-content-center row mb-3">
            <div className="col-lg-4">
              <h3>Most Recommended</h3>
            </div>
          </div>

          <div className="container">
            <div className="row mb-3">
              <div className="col-lg-4">
                <a href="/">
                  <div className="villa-card">
                    <img
                      src="https://farmhousehub.in/image/fh168-england-home-168-on-rent/thumb_500x500.jpeg"
                      alt="img"
                    />
                    <span className="poji">weekend home</span>
                    <div className="villa-card-body">
                      <div className="row">
                        <div className="col-lg-10">
                          <h5>FH168 | England Home 168</h5>
                        </div>
                        <div className="col-lg-2">
                          <div className="rating">
                            4.7
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="location">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>New dandi road, Surat.</span>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="price">
                            <span className="pay-price">2,705</span>
                            <strike className="show-price">8056</strike>
                            <span className="discount">66% of</span>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="heart">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="/">
                  <div className="villa-card">
                    <img src="https://farmhousehub.in/image/fh168-england-home-168-on-rent/thumb_500x500.jpeg" alt="img" />
                    <div className="villa-card-body">
                      <div className="row">
                        <div className="col-lg-10">
                          <h5>FH168 | England Home 168</h5>
                        </div>
                        <div className="col-lg-2">
                          <div className="rating">
                            4.7
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="location">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>New dandi road, Surat.</span>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="price">
                            <span className="pay-price">2,705</span>
                            <strike className="show-price">8056</strike>
                            <span className="discount">66% of</span>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="heart">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="/">
                  <div className="villa-card">
                    <img src="https://farmhousehub.in/image/fh168-england-home-168-on-rent/thumb_500x500.jpeg" alt="img" />
                    <div className="villa-card-body">
                      <div className="row">
                        <div className="col-lg-10">
                          <h5>FH168 | England Home 168</h5>
                        </div>
                        <div className="col-lg-2">
                          <div className="rating">
                            4.7
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="location">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>New dandi road, Surat.</span>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="price">
                            <span className="pay-price">2,705</span>
                            <strike className="show-price">8056</strike>
                            <span className="discount">66% of</span>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="heart">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
