import React from "react";
import styled from "styled-components";

export const FullDetailedCard = () => {
  return (
    <FULLDETAILSCARD>
      <FULLCARD_HEAD>
        <h3>Lorem, ipsum dolor.</h3>
        <a href="">Lorem ipsum dolor sit amet.</a>
        <p>Lorem ipsum dolor sit.</p>
        <p>4000-70000 a month</p>
        <div>
          <button>Apply now</button>
          <button>io</button>
        </div>
      </FULLCARD_HEAD>
      <hr />
      <FULLCARD_BODY>
        <h3>Job details</h3>
        <h4>Salary</h4>
        <small>35000 - 50000 a month</small>
        <h4>Benefits & Perks</h4>
        <small>Lorem, ipsum dolor.</small>
        <h4>Job Type</h4>
        <small>Full-time</small>

        <hr />

        <h3>Qualifications</h3>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Atque nesciunt sapiente magnam?</li>
          <li>Odit dignissimos dolorem est.</li>
          <li>Quas assumenda iusto quia.</li>
        </ul>
        <hr />

        <h3>Benefits</h3>
        <small>Pulled from the full job description</small>
        <hr />

        <h3>Full Job Description</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            velit consectetur impedit.
          </li>
          <li>
            Animi quae temporibus dolorem amet corporis iure quod reprehenderit
            dolor maxime incidunt.
          </li>
          <li>
            Id ad sapiente necessitatibus accusamus similique expedita earum
            amet repellendus quam alias.
          </li>
          <li>
            Necessitatibus modi eveniet sint adipisci aperiam quo quis nihil,
            error quisquam cum!
          </li>
          <li>
            Exercitationem eos delectus ea quos assumenda. Veritatis ducimus
            adipisci alias omnis velit.
          </li>
          <li>
            Cum quaerat laboriosam iure incidunt eveniet? Quo delectus unde iure
            fugiat dolores.
          </li>
          <li>
            Praesentium, sunt ea! Accusamus aut, nemo aperiam sed labore amet
            suscipit omnis.
          </li>
          <li>
            Nesciunt praesentium eum aspernatur error quas quibusdam sequi
            necessitatibus porro unde numquam!
          </li>
          <li>
            Ullam exercitationem iusto accusamus dolores repudiandae eveniet
            porro iure est deleniti libero.
          </li>
          <li>
            Nulla dicta totam animi fugiat in at perferendis vel quibusdam optio
            quo?
          </li>
        </ul>

        <hr />

        <h3>Hiring Insights</h3>
        <small>
          Hiring <b>2</b> candidates for this role
        </small>
        <small>Urgent hiring</small>

        <h4>Job activity</h4>
        <ul>
          <li>
            Employer reviewed job <b>4</b> days ago
          </li>
          <li>Posted 12 days ago</li>
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
