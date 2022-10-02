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

const Capegemini = () => {
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
        <h4 style={{"marginLeft":"50px"}}>Capgemini</h4> 
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
        <h2 style={{"textAlign":"center"}}>Capgemini salaries: How much does Capgemini pay in India?</h2>
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
<h2 style={{"marginLeft":"150px"}}>Average Salaries at Capgemini</h2> 
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
                            <h4>Questions about Capgemini</h4>
                            <p style={{"padding":"5px"}}> If you were to leave Capgemini, what would be the reason?37 people answered</p>
                            <p style={{"padding":"5px"}}>What is interview process like at Capgemini?27 people answered</p>
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

export default Capegemini


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
