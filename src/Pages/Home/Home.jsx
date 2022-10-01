
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FullDetailedCard } from "../../Components/FullDetailedCard/FullDetailedCard";
import { JobCard } from "../../Components/JobCard/JobCard";
import { SearchBar } from "../../Components/SearchBar/SearchBar";




const Home = () => {
  const [cardsList, setCardsList] = useState([]);
 const [detailedCard, setDetailedCard] = useState( {})
 

const UpdateFullDetailedCard=(val)=>{
   setDetailedCard(val);
   console.log(val);
   console.log(detailedCard);
}
  const getAllData=()=>{
    axios.get("http://localhost:8080/jobs").then((res)=> setCardsList(res.data))
    .catch((err)=> console.log(err))
  }


  useEffect(()=>{
    getAllData();
    
  },[detailedCard, setCardsList])
  
console.log(cardsList,detailedCard)



const Home = () => {
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
        <CARDS_SECTION>
          <JOBCARDS_CONTAINER>
            {
              cardsList.map((item)=> {
                return <JobCard item={item} UpdateFullDetailedCard={UpdateFullDetailedCard}/>
              })
            }
          </JOBCARDS_CONTAINER>

          <FULLJOBCARD_CONTAINER>
            <FullDetailedCard  />
           
            {/* <FullDetailedCard card={cardsList[1]}/> */}
          </FULLJOBCARD_CONTAINER>

        </CARDS_SECTION>
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
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 10rem;
  hr {
    width: 100%;
  }
`;
// const SEARCHBAR_CONTAINER = styled.div`
//  display: flex;
//  gap: 1.5rem;
//  justify-content: center;
//  align-items: center;

//  @media screen and (min-width: 400px) and (max-width: 768px){
//   flex-direction: column;
//  }
// `
// const SEARCHBAR_CONTAINER_WRAPPER = styled.div`
// border: 1px solid black;
// display: flex;
// align-items: center;
// border-radius: 0.5rem;
// width: 22rem;
// height: 2.5rem;
// padding: 0 0.5rem;
// h4{
//   font-weight: bold;
//   margin-right: 15px;
// }
// div{
//   display: flex;
//   input{
//     width: 14rem;
//     border-style: hidden;
//     font-size: 14px;
//     &:focus {
//       outline: none;
//     }
//     @media screen and (min-width: 400px) and (max-width: 768px){
//       width: 30rem;
//      }
//   }
// }
// @media screen and (min-width: 400px) and (max-width: 768px){
//   width: 35rem;
//  }

// `
// const SEARCHBUTTON_WRAPPER = styled.div`
//  button{
//   align-self: end;
//    padding: 0.75rem 1rem;
//    background-color: #2557a7;
//    border: 1px solid transparent;
//    border-radius: 0.5rem;
//    color: white;
//    font-weight: 700;
//    @media screen and (min-width: 400px) and (max-width: 768px){
//     padding: 0.75rem 16rem;
//    }
//  }
// `
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
  div {
    width: 17rem;
    display: flex;
    justify-content: center;
    border-bottom: 5px solid #2557a7;
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
 width: 42%;
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
 border: 1px solid black;
 width: 50%;
 max-height: 70vh;
 position: sticky;
 top:0;

 @media screen and (min-width: 400px) and (max-width: 768px){
  display: none;
 }
`