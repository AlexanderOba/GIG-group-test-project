import React,{useEffect} from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { setCountryDetails } from "../Actions/country_actions";
import {useDispatch, useSelector} from "react-redux";

const Country_details =(props) => {
  const country = useSelector( (state) => state.country)

  const {
     flags,
     name,
     region,
     population,
     capital,
     languages,
     subregion,
     currencies,
     tld 
    } = country;

  const dispatch = useDispatch();
  const fetchCountryDetail = async() =>{
     await axios.get(`https://restcountries.com/v3.1/name/${props.match.params.name}`)
     .then((response)=>{
       console.log(response.data)
       dispatch(setCountryDetails(response.data))
     })
     .catch((err)=>{
      console.log("err", err)
     })
  } 
 useEffect(()=>{
  fetchCountryDetail()
 }, [])


  console.log(country)

  console.log(country?.country?.[0]?.name.nativeName.vie)
  console.log(country?.country?.[0].name.official) 
  return (
    <>
      <NavBar />
      <Container fluid className="hmpgcontainer">
        <div className="hmepgbdywrap">
          <div>
            <Link to="/">
              <span className="bckbtn">
                <span>&larr;</span>Back
              </span>
            </Link>
          </div>
          <Row>
            <Col md={6}>
              <div className="countrydetflag">
              <img src={country?.country?.[0].flags.png} className="img-fluid cntdetflag" alt="image"/>
              </div>
            </Col>
            <Col md={6}>
              <div className="etcol2wrap">
                <h2 className="contryName">{name}</h2>
                <div className="contrypgdetailcontn">
                  <div>
                    <p className="card-details">
                      Native Name:<span>{country?.country?.[0].name.official}</span>
                    </p>
                    <p className="card-details">
                      Population:<span> {country?.country?.[0].population} </span>
                    </p>
                    <p className="card-details">
                      Region:<span> {country?.country?.[0].region}</span>
                    </p>
                    <p className="card-details">
                      Sub Region:<span> {country?.country?.[0].subregion} </span>
                    </p>
                    <p className="card-details">
                      Capital:<span> {country?.country?.[0].capital}</span>
                    </p>
                  </div>
                  <div className="contrypgdetailcontndiv2">
                    <p className="card-details">
                      Top Level Domain:<span> {tld}</span>
                    </p>
                    <p className="card-details">
                      Currencies:<span> {currencies} </span>
                    </p>
                    <p className="card-details">
                      Languages:<span> {languages} </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="card-details">
                    Border Countries:{" "}
                    <span className="bordercountriesbtn">France </span>{" "}
                    <span className="bordercountriesbtn">Germany</span>{" "}
                    <span className="bordercountriesbtn">Netherland</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Country_details;
