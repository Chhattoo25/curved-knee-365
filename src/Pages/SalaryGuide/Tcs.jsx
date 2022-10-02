
import React, { useState } from 'react'
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from './Footer';

const Tcs = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>

<div style={{"marginTop":"11vh"}}>
        <div style={{"border":"1px solid grey","borderRadius":"10px","width":"80%","margin":"auto"}} >
         <img style={{"width":"40%","marginLeft":"350px"}}
         src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/tcs_logo_1200_020621101143.jpg?size=1200:675" />
         </div>
         <br />

         <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"80%","borderRadius":"10px",
        "cursor":"pointer","display":"flex","marginLeft":"140px" }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/064eff7aab72cb84fbb7f92b82f6ac4a"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Tata Consultancy Services</h4> 
        <p style={{"marginLeft":"50px"}}> <span style={{"marginRight":"10px"}}>★★★★☆</span>8.8k Reviews</p>
        </div>
        <div>
            <br />
        <button
            style={{
              padding: "8px",
              width: "150px",
              fontSize: "20px",
              color: "white",
              fontStyle: "bold",
              backgroundColor: "#2557a7",
              border: "none",
              borderRadius: "10px",
              "marginLeft":"370px"
            }}
          >
            Follow
          </button> 
          <button
            style={{
              padding: "8px",
              width: "150px",
              fontSize: "20px",
              color: "#2557a7",
              fontStyle: "bold",
              border: "1px solid grey",
              borderRadius: "10px",
              "marginLeft":"10px"
            }}
          >
           Write a review{" "}
          </button>
        </div>
        </div>
        <h2 style={{"textAlign":"center"}}>Tata Consultancy Services (TCS) salaries: How much does Tata Consultancy <br /> Services (TCS) pay in India?</h2>
<br />
        <SEARCHBAR_CONTAINER>
              <SEARCHBAR_CONTAINER_WRAPPER>
                {/* <h4>What</h4> */}
                <div>
                  <input
                    type="text"
                    placeholder="Job title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />{" "}
                </div>
                <div>
                  {" "}
                  <BiSearch style={{ color: "grey" }} />{" "}
                </div>
              </SEARCHBAR_CONTAINER_WRAPPER>
              <SEARCHBAR_CONTAINER_WRAPPER>
                <div>
                  <input
                    type="text"
                    placeholder="India"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />{" "}
                </div>
                <div>
                  {" "}
                  <MdLocationPin
                    style={{ color: "grey" }}
                  />{" "}
                </div>
              </SEARCHBAR_CONTAINER_WRAPPER>
              <SEARCHBUTTON_WRAPPER>
                <button style={{ fontSize: "18px" }}>Search</button>
              </SEARCHBUTTON_WRAPPER>
            </SEARCHBAR_CONTAINER>
<br />
<h2 style={{"marginLeft":"150px"}}>Average Salaries at Tata Consultancy Services (TCS)</h2> 
<div style={{"width":"80%","margin":"auto","display":"flex","gap":"20px"}}>

<div style={{"width":"70%","height":"400px","display":"flex","padding":"10px"}}>

<div style={{"width":"26%","lineHeight":"5px","padding":"30px"}}>

<br />
<br />
            <h3>Popular Roles</h3>
            <h4>New Graduate</h4>
            <h4>₹ 5,84,318 per year</h4>
            <br />
            <h3>Developer</h3>
            <h4>New Graduate</h4>
            <h4>₹ 7,74,318 per year</h4>
            <br />
            <h3>SAP ABAP Developer</h3>
            <h4>New Graduate</h4>
            <h4>₹ 6,84,318 per year</h4>
        </div>

        <div style={{"width":"26%","lineHeight":"5px","padding":"30px"}}>
            <br />
            <br />
        <h3>Software Engineer</h3>
            <h4>Software Engineer</h4>
            <h4>₹ 5,64,609 per year</h4>
            <br />
            <h3>.NET Developer</h3>
            <h4>New Graduate</h4>
            <h4>₹ 3,06,252 per year</h4>
            <br />
            <h3>Java Developer</h3>
            {/* <h4>New Graduate</h4> */}
            <h4>₹ 5,06,252 per year</h4>
            <br />
        
        </div>
        <div style={{"width":"22%","lineHeight":"5px","padding":"30px"}}>

                <br />
            <br />
        <h3>Management</h3>
            <h4>Associate Consultant
        </h4>
            <h4>₹ 4,91,977 per year</h4>
            <br />
            <h3>Consultant</h3>
            <h4>₹ 6,97,033 per year</h4>
            <br />
            <h3>Senior Consultant
        </h3>
            <h4>₹ 10,39,863 per year</h4>
            <br />

        </div>
        </div>

        {/* company claimed profile  */}
        <div style={{"width":"30%"}}>
                        <div style={{"padding":"10px","border":"1px solid grey","borderRadius":"10px"}}>
                            <h3 style={{"textAlign":"center"}}>Claimed Profile</h3></div>
                        <hr />

                        <div style={{"border":"1px solid grey","borderRadius":"10px"}}>
                            <h3 style={{"textAlign":"center"}}>Salary Satisfaction</h3>
                            <img style={{"padding":"36px","marginTop":"-50px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1czoO4oXSW
                            l-EyU4-D3AK0oHpEsZ3O-22-9BsQLEHRVPwVpj5vIwszcLB-ng8KMDNg0Q&usqp=CAU'/>
                            <h4 style={{"padding":"5px"}}>Questions about Tata consultancy services</h4>
                            <p style={{"padding":"5px"}}> If you were to leave Tata consultancy services, what would be the reason?37 people answered</p>
                            <p style={{"padding":"5px"}}>What is interview process like at Tcs?27 people answered</p>
                            {/* <p style={{"padding":"5px"}}>  What are the perks offered by Capgemini?25 people answered</p> */}
                        </div>


        </div>
            </div>




            </div>
            <br />
            <Footer/>

    </>
  )
}

export default Tcs

const SEARCHBAR_CONTAINER = styled.div`
  display: flex;
  gap: 1.5rem;
   justify-content: center;
  align-items: center;

  @media screen and (min-width: 400px) and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SEARCHBAR_CONTAINER_WRAPPER = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  width: 16rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  h4 {
    font-weight: bold;
  }
  div {
    display: flex;
    input {
      width: 14rem;
      border-style: hidden;
      font-size: 14px;
      &:focus {
        outline: none;
      }
    }
    button {
      border: none;
      font-weight: 500;
      background-color: none;
      font-size: 16px;

      @media screen and (min-width: 400px) and (max-width: 768px) {
        width: 90%;
        color: red;
      }
    }
  }
`;
// @media screen and (min-width: 400px) and (max-width: 768px){

// }
const SEARCHBUTTON_WRAPPER = styled.div`
  button {
    padding: 0.65rem 1rem;
    background-color: #2557a7;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    color: white;
    font-weight: 700;
  }
`;
