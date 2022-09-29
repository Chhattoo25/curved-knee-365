import React from 'react'

const TopCompanies = () => {
  return (
   <>
   <br />
    <div style={{marginLeft: "50px","display":"grid",
    "grid-template-columns": "repeat(4,1fr)",
    "grid-template-rows":"repeat(2,170px)",
    "height":"auto",
    // "grid-gap":"5px"
    }}>
        {/* <h3 style={{ marginLeft: "50px" }}>TopCompanies</h3> */}
        <div style={{ "border":"1px solid lightgrey" ,"height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer" }}>
          <h3>Elementary School Teacher</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹2,47,739 per year</span></p>
        <hr/>
        <p>Job Openings</p>     
        </div>

        <div style={{"border":"1px solid lightgrey" ,
        "height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Human Resources Specialist</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹2,47,788 per year</span></p>
         <hr />
        <p>Job Openings</p>     
        </div>

        <div style={{ "border":"1px solid lightgrey" ,
        "height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Accountant</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹2,73,902 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        
        <div style={{"border":"1px solid lightgrey" ,
        "height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Customer Care Specialist</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹2,25,720 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Office Assistant</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹1,89,332 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Back Office Executive</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹2,47,739 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Graphic Designer</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹2,61,496 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
        <div style={{"border":"1px solid lightgrey" ,
        "height":"150px","width":"335px","borderRadius":"10px","cursor":"pointer"}}>
          <h3>Data Entry Clerk</h3>
          <p>Average Salary <span style={{"marginLeft":"70px","fontWeight":"bolder" }}>₹3,42,095 per year</span></p>
        <hr />
        <p>Job Openings</p>     
        </div>
    </div>

      {/* TOP PAYING COMPANIES BY COMPANY */}
  <h1 style={{ marginLeft: "50px" }}>Browse top-paying jobs by industry</h1>
    </>
  )
}

export default TopCompanies