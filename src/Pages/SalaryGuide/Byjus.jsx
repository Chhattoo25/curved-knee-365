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

const Byjus = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <div style={{"marginTop":"11vh"}}>
        <div style={{"border":"1px solid grey","borderRadius":"10px","width":"80%","margin":"auto"}} >
         <img style={{"width":"40%","marginLeft":"350px"}}
         src="data:image/png;base64,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" />
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
        <h4 style={{"marginLeft":"50px"}}>Byjus</h4> 
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
        <h2 style={{"textAlign":"center"}}>Byjus salaries: How much does Byjus pay in India?</h2>
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
<h2 style={{"marginLeft":"150px"}}>Average Salaries at Byjus</h2> 
<div style={{"width":"80%","margin":"auto","display":"flex","gap":"20px"}}>

<div style={{"width":"70%","height":"400px","display":"flex","padding":"10px"}}>

<div style={{"width":"26%","lineHeight":"5px","padding":"30px"}}>

<br />
<br />
            <h3>Popular Roles</h3>
            <h4>New Graduate</h4>
            <h4>₹ 5,84,318 per year</h4>
            <br />
            <h3>Sales</h3>
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
        <h3>Sales Executive</h3>
            <h4>Software Engineer</h4>
            <h4>₹ 5,64,609 per year</h4>
            <br />
            <h3>Field Executive</h3>
            <h4>New Graduate</h4>
            <h4>₹ 3,06,252 per year</h4>
            <br />
            <h3>Telemarker</h3>
            <h4>New Graduate</h4>
            <h4>₹ 3,06,252 per year</h4>
            <br />
        
        </div>
        <div style={{"width":"22%","lineHeight":"5px","padding":"30px"}}>

                <br />
            <br />
        <h3>Management</h3>
            <h4>Marketing Intern
        </h4>
            <h4>₹ 4,91,977 per year</h4>
            <br />
            <h3>Marketer</h3>
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
                            <h4>Questions about Byjus</h4>
                            <p style={{"padding":"5px"}}> If you were to leave Byjus, what would be the reason?37 people answered</p>
                            <p style={{"padding":"5px"}}>What is interview process like at Byjus?27 people answered</p>
                            {/* <p style={{"padding":"5px"}}>  What are the perks offered by Byjus?25 people answered</p> */}
                        </div>


        </div>
            </div>




            </div>
            <br />
            <Footer/>
            </>
  )
}

export default Byjus


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
