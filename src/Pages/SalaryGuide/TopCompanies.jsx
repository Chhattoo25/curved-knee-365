import React from 'react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure} from "@chakra-ui/react";
import { Button } from "@mui/material";
import Footer from './Footer';

const TopCompanies = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
   <>
   <br />
    <div style={{marginLeft: "30px","display":"grid",
    "grid-template-columns": "repeat(4,1fr)",
    "grid-template-rows":"repeat(2,140px)",
    "height":"auto",
    "grid-gap":"15px","marginRight":"30px"
    }}>
        <div style={{ "border":"1px solid lightgrey" ,"height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer" }}>
          <h3>Elementary School Teacher</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹2,47,739 per year</span></p>
        <hr/>
        <p>Job Openings</p>     
        </div>

        <div style={{"border":"1px solid lightgrey" ,
        "height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Human Resources Specialist</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹2,47,788 per year</span></p>
         <hr />
        <p>Job Openings</p>     
        </div>

        <div style={{ "border":"1px solid lightgrey" ,
        "height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Accountant</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹2,73,902 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        
        <div style={{"border":"1px solid lightgrey" ,
        "height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Customer Care Specialist</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹2,25,720 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Office Assistant</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹1,89,332 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Back Office Executive</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹2,47,739 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Graphic Designer</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹2,61,496 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"140px","width":"310px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Data Entry Clerk</h3>
          <p>Average Salary <span style={{"marginLeft":"50px","fontWeight":"bolder" }}>₹3,42,095 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
    </div>

      {/* TOP PAYING COMPANIES BY COMPANY */}
      <br />
      <br />
  <h1 style={{ marginLeft: "50px" }}>Browse top-paying jobs by industry</h1>
  {/* button  */}
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
                width: "100%",
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
      <br />
      <br />
      {/*  Browse top-paying jobs by industry */}
      <div style={{marginLeft: "30px","display":"grid",
    "grid-template-columns": "repeat(3,1fr)",
    "grid-template-rows":"repeat(2,140px)",
    "height":"auto",
    "grid-gap":"5px","marginRight":"30px"}}>  

        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/064eff7aab72cb84fbb7f92b82f6ac4a"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Capgemini</h4> 
        <p style={{"marginLeft":"50px"}}>8.8k Reviews</p>
        </div>
        </div>

        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/13b693b4dcc055d2344351b4c9a148e9"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Tata Consultancy Services(TCS)</h4> 
        <p style={{"marginLeft":"50px"}}>21.2k Reviews</p>
        </div>
        </div>
        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/fff3cc32d7e908a657ea1da5a4a1732b"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Accenture</h4> 
        <p style={{"marginLeft":"50px"}}>22.3k Reviews</p>
        </div>
        </div>
        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/ce43c82fedc38bf5739f8c90376c3b98"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Cognizant Technology Solution</h4> 
        <p style={{"marginLeft":"50px"}}>14.9k Reviews</p>
        </div>
        </div>
        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/349d1c5aed5c3943dadc47139a21b79d"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Byju's</h4> 
        <p style={{"marginLeft":"50px"}}>407 Reviews</p>
        </div>
        </div>
        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/e33d1816f29251d95814fd99eae809df"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>IBM</h4> 
        <p style={{"marginLeft":"50px"}}>31.7k Reviews</p>
        </div>
        </div>
        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/3e9d43f5c277de169808abdcaf49ba2c"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Amazon.com</h4> 
        <p style={{"marginLeft":"50px"}}>88k Reviews</p>
        </div>
        </div>
        <div style={{ "border":"1px solid lightgrey" ,"height":"120px",
        "width":"410px","borderRadius":"10px",
        "cursor":"pointer","display":"flex", }}>
          <div>
            <img style={{"height":"80px","width":"80px","marginTop":"20px","marginLeft":"20px"}} 
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/5335229f1b22e90f1e5eafb892704339"/>  
        </div>
        <div>
        <h4 style={{"marginLeft":"50px"}}>Indigo Airlines</h4> 
        <p style={{"marginLeft":"50px"}}>418 Reviews</p>
        </div>
        </div>
    </div>    
    {/* How much Shoul be Earning data */}
    <br />
    <br />
    <br />
<div style={{"display":"flex","width":"95%","height":"16rem","marginLeft": "30px","border":"1px solid lightgrey","padding":"5px","borderRadius":"10px"}}>
  <div style={{"width":"80%"}}>
 <h1 style={{"marginLeft":"2rem"}}>How much should you be earning?</h1>
 <p style={{"marginLeft":"2rem"}}>Get an estimated calculation of how much you should be earning and insight into  your career options.</p>
 <br />
 <button style={{"padding":"1rem","marginLeft":"2rem","borderRadius":"10px",
 "backgroundColor":"#085ff7","color":"white","fontSize":"17px","border":"none","fontStyle":"bold","cursor":"pointer"}}>
  {/* <a href="https://in.indeed.com/career/salary-calculator/details/step1?context=desktop-careerpages-career-salaries-landing-button&pageSource=career-salaries-landing&noRedirect="> */}
  Get Estimated pay range 
  {/* </a> */}
  </button>
 <span style={{"marginLeft":"4rem","color":"#085ff7","textDecoration":"underline","cursor":"pointer"}}>See more details</span>
  </div>
  <div style={{"width":"80%","height":"12rem","marginLeft": "160px"}}>
    <img src="https://d3fw5vlhllyvee.cloudfront.net/mosaic-provider-salary-calculator-entries/dist/images/src/components/ResponsiveDefaultEntry/chart_desktop_janish-36baaa.svg"/>
  </div>
</div>
<br />
<br />
<br />

{/* Was this Helpful */}

<div style={{"display":"flex","width":"95%","height":"8rem","marginLeft": "30px","border":"1px solid lightgrey","padding":"5px","borderRadius":"10px"}}>
  <div style={{"width":"80%"}}>
 <h1 style={{"marginLeft":"2rem"}}>Was this page helpful?</h1>
 <br />
  </div>
  <div style={{"width":"50%","height":"12rem","marginLeft": "260px",
  "marginTop":"30px","display":"flex","justifyContent":"space-between"}}>
    <div style={{"padding":"2px"}}>
      <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjA
      wMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2Rk
      Ij48Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiByPSIxNiIgZmlsbD0iIzI1NTdBNyIgc3Ryb2tlPSIjMjU1N0E3
      IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQgMjVjMC0zLjMxNC0zLjEzNC02L
      TctNnMtNyAyLjY4Ni03IDZoMTR6Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxNCIgcj0iMyIgZmlsbD0iI0ZGRi
      IvPjxjaXJjbGUgY3g9IjI0IiBjeT0iMTQiIHI9IjMiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+'/>
   
      <p style={{"fontSize":"13px","marginLeft": "-10px"}}>Not Helpful</p>
    </div>
    <div style={{"padding":"2px"}}>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PGcgZmls
      bD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiByPSIxNiIgZmlsbD0iIzI1NTdBNyIgc3Ryb2tlPSIjMjU1N0E3IiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjE0IiByPSIzIiBmaWxsPSIjRkZGIi8+PGNpcmNsZSBjeD0iMjQiIGN5PSIxNCIgcj0iMyIgZmlsbD0iI0ZGRiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjMuNSAyNS4
      1ODVDMjIuMjk1IDIzLjQ4IDE5Ljk4MiAyMiAxNy4zOCAyMmE2Ljk5OSA2Ljk5OSAwIDAwLTYuMTc1IDMuNzAyIi8+PC9nPjwvc3ZnPg==" />
    </div>
    <div style={{"padding":"2px"}}>
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVp
      Z2h0PSIzNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiByPSIxNiIgc3Ryb2tlPS
      IjMjU1N0E3IiBmaWxsPSIjMjU1N0E3IiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjE0IiByPSIzIiBmaWxsPSIjRkZGIi8+P
      GNpcmNsZSBjeD0iMjQiIGN5PSIxNCIgcj0iMyIgZmlsbD0
      iI0ZGRiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTEgMjQuNWgxMiIvPjwvZz48L3N2Zz4=" />
      <p style={{"fontSize":"13px","marginLeft": "-5px"}}> Helpful</p>
    </div>
    <div style={{"padding":"2px"}}>
      <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdm
      ciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSI
      xNyIgY3k9IjE3IiByPSIxNiIgc3Ryb2tlPSIjMjU1N0E3IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiMyNTU3QTciLz48Y2lyY2xlIGN4PSIxMSI
      gY3k9IjE0IiByPSIzIiBmaWxsPSIjRkZGIi8+PGNpcmNsZSBjeD0iMjQiIGN5PSIxNCIgcj0iMyIgZmlsbD0iI0ZGRiIvPjxwYXRoIHN0cm9rZT0iI
      0ZGRiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTEgMj
      IuMTE3YzEuMjA3IDIuMTA1IDMuNTIgMy41ODUgNi4xMiAzLjU4NUE2Ljk5OSA2Ljk5OSAwIDAwMjMuMjk2IDIyIi8+PC9nPjwvc3ZnPg=='/>     
    </div>
    <div style={{"padding":"2px"}}>
      <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdm
      ciIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSI
      xNyIgY3k9IjE3IiByPSIxNiIgc3Ryb2tlPSIjMjU1N0E3IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiMyNTU3QTciLz48Y2lyY2xlIGN4PSIxMSI
      gY3k9IjE0IiByPSIzIiBmaWxsPSIjRkZGIi8+PGNpcmNsZSBjeD0iMjQiIGN5PSIxNCIgcj0iMyIgZmlsbD0iI0ZGRiIvPjxwYXRoIHN0cm9rZT0iI
      0ZGRiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTEgMj
      IuMTE3YzEuMjA3IDIuMTA1IDMuNTIgMy41ODUgNi4xMiAzLjU4NUE2Ljk5OSA2Ljk5OSAwIDAwMjMuMjk2IDIyIi8+PC9nPjwvc3ZnPg=='/>
      <p style={{"fontSize":"13px","marginLeft": "-10px"}}>Very Helpful</p>
    </div>
  </div>
</div>
<br />
<br />
<br />
<Footer/>
    </>
  )
}

export default TopCompanies