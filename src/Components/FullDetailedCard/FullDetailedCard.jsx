import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const FullDetailedCard = () => {
  // console.log(card);
  const {id} = useParams();
  console.log(id);
  const [card,setCard]=useState({})
  return (
    <FULLDETAILSCARD key={card._id}>
      <FULLCARD_HEAD>
        <h3>{card.position}</h3>
        <a href="">{card.company}</a>
        <p>{card.address}</p>
        <p>{ ` ₹${card.min_salary*1000} - ₹${card.max_salary*1000}`} a month</p>
        <div>
          <button>Apply now</button>
          <button>io</button>
        </div>
      </FULLCARD_HEAD>
      <hr />
      <FULLCARD_BODY>
        <h3>Job details</h3>
        <h4>Salary</h4>
        <small>{ ` ₹${card.min_salary*1000} - ₹${card.max_salary*1000}`} a month</small>
        <h4>Benefits & Perks</h4>
        <small>Lorem, ipsum dolor.</small>
        <h4>Job Type</h4>
        <small>{card.job_type}</small>

        <hr />

        <h3>Responsibility and Duties</h3>
        <ul>
        {/* {card.resp_and_duties.map((item, index)=>{
            return <li key={index}>{item.responsibility}</li>
          })} */}
        </ul>
        <hr />

        <h3>Benefits</h3>
        <small>Pulled from the full job description</small>
        <hr />

        <h3>Full Job Description</h3>
        <ul>
          {/* {card.job_desc.map((item, index)=>{
            return <li key={index}>{item.job_desc_item}</li>
          })} */}
        </ul>

        <hr />

        <h3>Hiring Insights</h3>
        <small>
          Hiring <b>{card.req_candidates}</b> candidates for this role
        </small>
        <small>Urgent hiring</small>

        <h4>Job activity</h4>
        <ul>
          <li>
            Employer reviewed job <b> 3</b> days ago
          </li>
          <li>Posted {Math.random(1,9)*10} days ago</li>
        </ul>

        <hr />

        <button>Report job</button>
      </FULLCARD_BODY>
    </FULLDETAILSCARD>
  );
};

const FULLDETAILSCARD = styled.div`
  width: 100%;
  border: 2px solid;
  border-radius: 0.5rem;
  position: sticky;
  div::-webkit-scrollbar{
    display: hidden;
  }
`;
const FULLCARD_HEAD = styled.div`
 h3{
    margin: 1.5rem 0 0 1rem;
 }
 a{
    margin: 0 0 0 1rem;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
 }
 p{
    margin: 0.5rem 0 0 1rem;
    color: grey;
 }
 div{
    display: flex;
    gap: 1rem;
    padding: 1rem;
    button{
        padding: 1rem;
        font-weight: bold;
        color: white;
        background-color: blue;
        border: 1px solid transparent;
        border-radius: 0.5rem;
     }
 }
 
`;

const FULLCARD_BODY = styled.div`
  height: 70%;
  padding: 1rem 0;
  overflow: scroll;
  
  hr {
    margin: 2rem 0 2rem 0;
    color: red;
  }
 small{
    margin: 1rem;
    display: block;
 }
  h3 {
    margin: 0 1rem;
  }

  h4 {
    margin: 1rem 0 0 1rem;
  }

  ul {
    margin: 0;
    li {
      padding: 0.75rem 0;
      font-weight: 300;
    }
  }

`;
