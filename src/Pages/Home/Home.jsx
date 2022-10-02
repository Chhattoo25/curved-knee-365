
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FullDetailedCard } from "../../Components/FullDetailedCard/FullDetailedCard";
import { JobCard } from "../../Components/JobCard/JobCard";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Footer } from "../CompanyReview/Footer";

const Home = () => {
 const [cardsList, setCardsList] = useState([]);
 const [dynamicId, setDynamicId] = useState('633680fe4b9884293800bf66')


  const getAllData=()=>{
    axios.get("http://localhost:8080/jobs").then((res)=> setCardsList(res.data))
    .catch((err)=> console.log(err))
  }
 
  const handleDynamicId=(id)=>{
    if(id){
      setDynamicId(id);
    }
  }
  useEffect(()=>{
    getAllData();
    
  },[ setCardsList, ])

console.log(cardsList,dynamicId)


  return (
    <>

      <COMPONENT>
        
        <SearchBar cardsList={cardsList} setCardsList={setCardsList}/>

        <POST_RESUME_CONTAINER>
          <div>
          <Link to="/resume">Post your resume</Link>{" "}
            <span>-It only takes a few seconds</span>
          </div>
          <div>
            <a href="">Employers: Post a job</a>{" "}
            <span>- Your next hire is here</span>
          </div>
        </POST_RESUME_CONTAINER>

        <hr />

        <FeedBar>
          <FeedBar_TABS>
            <div>
              <h3>
                Job feed <span>New</span>
              </h3>
            </div>
            <div>
              <h3>Recent searches</h3>
            </div>
          </FeedBar_TABS>
          <div></div>
        </FeedBar>



        <CARDS_SECTION  >

          <JOBCARDS_CONTAINER >
            {
              cardsList.map((item)=> {
               return <JobCard setDynamicId={setDynamicId} handleDynamicId={handleDynamicId} item={item} />

              })
            }
          </JOBCARDS_CONTAINER>

          <FULLJOBCARD_CONTAINER>

            <FullDetailedCard dynamicId={dynamicId}   />
           
          </FULLJOBCARD_CONTAINER>

        </CARDS_SECTION>


       <Footer></Footer>
      </COMPONENT>
    </>
  );
};

export default Home;

// @media screen and (min-width: 400px) and (max-width: 768px){

// }
const COMPONENT = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FAF9F8;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 10rem;
  hr {
    width: 100%;
  }
`;

const POST_RESUME_CONTAINER = styled.div`
  padding: 1.5rem;
  div {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    a {
      text-decoration: none;
      color: #2557a7;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

//Jobfeed-Bar
const FeedBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FeedBar_TABS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div:nth-child(1){
    border-bottom: 5px solid #2557a7;
  }
  div {
    width: 17rem;
    display: flex;
    justify-content: center;
    border-bottom: 5px solid transparent;
    h3 {
      display: block;
      span {
        padding: 0.5rem;
        background-color: black;
        color: white;
        margin-left: 0.25rem;
        font-weight: 400;
        border-radius: 0.75rem;
      }
    }
  }
`;

const CARDS_SECTION = styled.div`
  display: flex;
  gap: 1rem;
  width: 60%;
  justify-content: center;
  position: relative;
  top: 3rem;
`;
const JOBCARDS_CONTAINER = styled.div`
 display: flex;
 flex-direction: column;
 border: 3px solid transparent;
 align-items: center;
 gap: 1rem;
 padding: 0 1rem;
 width: 501.7px;
 @media screen and (min-width: 769px) and (max-width: 1024px){
  width: 30rem;
 }
 @media screen and (min-width: 400px) and (max-width: 768px){
  width: 100%;
 }
`
const FULLJOBCARD_CONTAINER = styled.div`
 display: flex;
 flex-direction: column;
 border: 1px solid transparent;
 width: 50%;
 max-height: 90vh;
 position: sticky;
 top:0;

 @media screen and (min-width: 400px) and (max-width: 768px){
  display: none;
 }
`