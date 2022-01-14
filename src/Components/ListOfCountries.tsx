import React from "react";
import "./home.css";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListOfCountries = () => {
  const countries = useSelector(state => state.countryReducer.countries);
  const renderList = countries.map((country, index) => {
    const { flags, name, region, population, capital } = country;
    return (
      <>
        <Col md={3} key={index}>
          <Link to={`/country_details/${name.common}`}>
            <div className="country-card">
              <div className="card-img">
                <img src={flags.png} className="cntlistimg-fluid" alt="img" />
              </div>
              <div className="detail-wraper">
                <h6 className="card-country">{name.common}</h6>
                <p className="card-details">
                  Population:<span> {population}</span>
                </p>
                <p className="card-details">
                  Region:<span> {region}</span>
                </p>
                <p className="card-details">
                  Capital:<span> {capital}</span>
                </p>
              </div>
            </div>
          </Link>
        </Col>
      </>
    );
  });

  return (
    <>
      {Object.keys(countries).length === 0 ? (
        <div className="loadinwraper text-center"> Loading please wait...</div>
      ) : (
       renderList 
      )}
    </>
  );
};
export default ListOfCountries;
