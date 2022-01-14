import React,{ useEffect } from "react";
import axios from "axios";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NavBar from "./NavBar";
import {useDispatch, useSelector} from "react-redux";
import { setCountries } from "../Actions/country_actions"
import ListOfCountries from "./ListOfCountries";


const Home = () => {
const countries = useSelector( (state) => state.countryReducer.countries); 

const dispatch = useDispatch();
const fetchCountries = async ()=> {
  await axios.get("https://restcountries.com/v3.1/all")
  .then((response)=>{
    console.log(response.data)
    dispatch (setCountries(response.data))
  })  
  .catch((err)=>{
    console.log("err", err)
  });
  
}
useEffect(()=>{
  window.scrollTo(-0, -0);
   fetchCountries();
}, [])
console.log(countries)

//filter countries by region

const filterRegion = async (region) =>{
  console.log("i was clicked", region)
  await axios.get(`https://restcountries.com/v3.1/region/${region}`)
  .then((response)=>{
    console.log(response.data)
    dispatch (setCountries(response.data))
  })  
  .catch((err)=>{
    console.log("err", err)
  });
  
}
//filter countries by fullname
const filterCountryName = async (name) =>{
  await axios.get(`https://restcountries.com/v3.1/name/${name}`)
  .then((response)=>{
    console.log(response.data)
    dispatch (setCountries(response.data))
  })  
  .catch((err)=>{
    console.log("err", err)
  });
  
}

console.log(countries)
  return (
    <>
      <NavBar />
      <Container fluid className="hmpgcontainer">
        <div className="hmepgbdywrap">
          <div className="hmpginputwrap">
            <div className="sercinptdiv">
              <input
                type="search"
                className="searchinput"
                onChange={(e) => filterCountryName( e.target.value)}
                placeholder="Search for a country.."
              />
            </div>
            <div>
              <Form.Group controlId="formBasicEmail1" className="diff23">
                <Form.Control
                  as="select"
                  className=" form-control hmpginputselect"
                  name="Filter by Region"
                  onChange={(e) => filterRegion( e.target.value)}
                >
                  <option className="selectopt">Filter by Region</option>
                  <option className="selectopt" value="Africa" onClick={()=>filterRegion("Africa")}>
                    Africa
                  </option>
                  <option className="selectopt" value="Europe" onClick={()=>filterRegion("Europe")}>
                    Europe
                  </option>
                  <option className="selectopt" value="Asia" onClick={()=>filterRegion("Asia")}>
                    Asia
                  </option>
                  <option className="selectopt" value="Americas" onClick={()=>filterRegion("Americas")}>
                    Americas
                  </option>
                  <option className="selectopt" value="Oceania" onClick={()=>filterRegion("Oceania")}>
                    Oceania
                  </option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <Row className="homepgrow">
            <ListOfCountries/>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Home;
