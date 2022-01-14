import React,{ useEffect } from "react";
import axios from "axios";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NavBar from "./NavBar";
import {useDispatch, useSelector} from "react-redux";
import { setCountries } from "../Actions/country_actions"
import { setCountryRegion } from "../Actions/country_actions"
import ListOfCountries from "./ListOfCountries";


const Home = () => {
const countries = useSelector( (state) => state); 

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
   fetchCountries();
}, [])
console.log(countries)

//filter countries by region
const filterRegion = (region)=>{
  console.log("i was clicked")
  const result = countries.filter((selectedRegion)=>{
   return selectedRegion.region === region;
  })
  dispatch (setCountryRegion(result))
}


  return (
    <>
      <NavBar />
      <Container fluid className="hmpgcontainer">
        <div className="hmepgbdywrap">
          <div className="hmpginputwrap">
            <div>
              <input
                type="search"
                className="searchinput"
                placeholder="Search for a country.."
              />
            </div>
            <div>
              <Form.Group controlId="formBasicEmail1" className="diff23">
                <Form.Control
                  as="select"
                  className=" form-control hmpginputselect"
                  name="Filter by Region"
                >
                  <option className="selectopt">Filter by Region</option>
                  <option className="selectopt" value="Africa" onClick={()=>filterRegion('Africa')}>
                    Africa
                  </option>
                  <option className="selectopt" value="Europe">
                    Europe
                  </option>
                  <option className="selectopt" value="Asia">
                    Asia
                  </option>
                  <option className="selectopt" value="North America">
                    North America
                  </option>
                  <option className="selectopt" value="South America">
                  South America
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
