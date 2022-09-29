import React, { useState } from "react";
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
// import {ChevronDownIcon} from "@chakra-ui/icon"
import { Button } from "@mui/material";
import TopCompanies from "./TopCompanies";

const SalaryGuide = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "1100px",
            height: "370px",
            backgroundColor: "#e8f3fc",
          }}
        >
          <br />
          <br />

          <h1 style={{ marginLeft: "50px" }}>Find a career you'll love</h1>
          <p style={{ marginLeft: "50px" }}>
            Explore which careers have the highest job satisfaction, best
            salaries and more
          </p>
          <div
            style={{
              backgroundColor: "#9bb1f0",
              width: "950px",
              height: "10px",
              marginLeft: "50px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#ffffff",
              width: "950px",
              height: "140px",
              marginLeft: "50px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <br />
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
                  <BiSearch style={{ color: "grey", margin: "auto" }} />{" "}
                </div>
              </SEARCHBAR_CONTAINER_WRAPPER>
              <SEARCHBAR_CONTAINER_WRAPPER>
                {/* <h4>Where</h4> */}
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
                    style={{ color: "grey", margin: "auto" }}
                  />{" "}
                </div>
              </SEARCHBAR_CONTAINER_WRAPPER>
              <SEARCHBUTTON_WRAPPER>
                <button style={{ fontSize: "20px" }}>Search</button>
              </SEARCHBUTTON_WRAPPER>
            </SEARCHBAR_CONTAINER>
          </div>
        </div>
        <div>
          <img
            style={{ width: "500px", height: "370px" }}
            src="https://d3hbwax96mbv6t.cloudfront.net/title-webapp/_next/static/images/salaries-8d20dc14bdeae8889387e0fb40e0d546.png"
          />
        </div>
      </div>
      {/* 2nd div Browse top-paying jobs by industry */}
      <h1 style={{ marginLeft: "50px" }}>Browse top-paying jobs by industry</h1>
      <br />
      <Button
        onClick={onOpen}
        style={{
          marginLeft: "50px",
          height: "3rem",
          width: "20rem",
          border: "1px solid grey",
          borderRadius: "30px",
        }}
      >
        Choose an Industry 
      </Button>
      <br/>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div style={{ margin: "auto" }}>
            <h2 style={{ marginTop: "11rem" }}></h2>
            <div
              style={{
                height: "434px",
                width: "1460px",
                // border: "1px solid red",
                margin: "auto",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "1rem",
              }}
            >
              <br />
              <div
                style={{
                  height: "400px",
                  width: "400px",

                  margin: "auto",
                }}
              >
                <h3>Browse top-paying jobs by industry</h3>
                <h4>All Industries</h4>
                <h4>Business Management, Administrative & Customer Support</h4>
                <h4>Construction & Extraction</h4>
                <h4>Food & Beverage</h4>
                <h4>Manufacturing & Utilities</h4>
                <h4>Personal Service</h4>
                <h4>Sales & Retail</h4>
                <h4>Technology</h4>
              </div>
              <div
                div
                style={{
                  height: "400px",
                  width: "400px",
                  margin: "auto",
                  backgroundColor: "white",
                }}
              >
                <br />
                <h4>Agriculture, Fishing & Forestry</h4>
                <h4>Cleaning & Grounds Maintenance</h4>
                <h4>Education & Instruction</h4>
                <h4>Healthcare</h4>
                <h4>Marketing, Advertising & Public Relations</h4>
                <h4>Repair, Maintenance & Installation</h4>
                <h4>Science & Research</h4>
                <h4>Transportation</h4>
              </div>
              <div
                div
                style={{
                  height: "400px",
                  width: "400px",
                  margin: "auto",
                }}
              >
                <br />
                <h4>Agriculture, Fishing & Forestry</h4>
                <h4>Cleaning & Grounds Maintenance</h4>
                <h4>Education & Instruction</h4>
                <h4>Healthcare</h4>
                <h4>Marketing, Advertising & Public Relations</h4>
                <h4>Repair, Maintenance & Installation</h4>
                <h4>Science & Research</h4>
                <h4>Transportation</h4>
              </div>

              <div>
                {" "}
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  style={{ fontSize: "25px","color":"black" }}
                >
                  x
                </Button>
              </div>
            </div>
          </div>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      {/* companies in grid format */}
    <br/>

<TopCompanies/>

    </>
  );
};

export default SalaryGuide;

// styled  css


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
  width: 22rem;
  height: 3.5rem;
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
    padding: 0.75rem 1rem;
    background-color: #2557a7;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    color: white;
    font-weight: 700;
  }
`;
