
import React from 'react'
import {FaSuitcase, FaUserPlus} from 'react-icons/fa';
import {BiMoney} from 'react-icons/bi';
import {BsFillClockFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import {FiMoreVertical} from 'react-icons/fi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const JobCard = ({item, setDynamicId }) => {
  
  return (
    <JOBCARD key={item.id} onClick={()=> setDynamicId(item.id) }>
      <JOBCARD_ROLE_WRAPPER>
        <div>
            <small>new</small>
            <h3>{item.position}</h3>
            <p>{item.company}</p>
            <p>{item.address}</p>
        </div>
        <div><FiMoreVertical/></div>
      </JOBCARD_ROLE_WRAPPER>

      <JOB_DETAILS>
        <h4><BiMoney/>{ ` ₹${item.min_salary*1000} - ₹${item.max_salary*1000}`} a month</h4>
        <h4><FaSuitcase/> {item.job_type}</h4>
        <h4> <BsFillClockFill/> {item.shift} shift</h4>
      </JOB_DETAILS>

      <JOB_DETAILS_EXTEND>
        <p> <BsFillArrowRightCircleFill style={{color:'blue', marginRight:'0.5rem'}} /> Apply securely with Indeed Resume</p>
        <p> <BsFillClockFill style={{color:'magenta', marginRight:'0.5rem'}} /> Urgently hiring</p>
        <p> <FaUserPlus style={{color:'brown', marginRight:'0.5rem'}} /> Hiring multiple candidates</p>
      </JOB_DETAILS_EXTEND>

      <JOB_DESC>
        <ul>
           {
            item.job_desc?.map((desc_item, index)=>{
              return index<4 ?
                <li key={index}>{desc_item.job_desc_item}</li>: ''
            })
           }
        </ul>
      </JOB_DESC>
    </JOBCARD>
  )
}

const JOBCARD = styled.div`
 border: 1px solid grey;
 border-radius: 0.5rem;
 width: 100%;
 padding: 1rem;

 &:hover{
  div{
    div{
      h3{
        text-decoration: underline;
      }
    }
  }
 }
`
const JOBCARD_ROLE_WRAPPER = styled.div`
 display: flex;
 div:nth-child(1){
    width: 95%;
    display: flex;
    flex-direction: column;
    small{
      color: darkred;
    }
    h3{
        margin: 0px;
    }
    p{
        margin: 0px;
        font-size: 16px;
        font-weight: 400;
    }
 }
 div:nth-child(2){
    width: 5%;
    font-size: 20px;
 }
`
const JOB_DETAILS = styled.div`
 display: flex;
 flex-wrap: wrap;
 padding: 1rem 0;
 gap: 0.5rem;
 h4{
    margin: 0px;
    padding: 0.25rem 0.5rem;
    background-color: #e4e2e0!important;
    border-radius: 0.2rem;
    display: inline-block;
 }
`
const JOB_DETAILS_EXTEND = styled.div`
 display: flex;
 gap: 0.25rem 1rem;
 flex-wrap: wrap;
 p{
   display: flex;
   margin: 0px;
   align-items: center;
   padding: 0.25rem 0;
 }
`
const JOB_DESC = styled.div`
 ul{
    li{
        font-size: 14px;
        color: grey;
        margin-left: -1.5rem;
    }
 }
`