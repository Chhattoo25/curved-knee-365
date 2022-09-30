import React from "react";

const Footer = () => {
  return (
    <>
    <div style={{"display":"flex","width":"100%","backgroundColor":"#eff2f6"}}>
      <div style={{"display":"flex","height":"8rem","marginLeft": "60px"}}>
        <h2>Frequently searched careers</h2>
      </div>
      <div style={{"marginLeft":"220px"}}>
        <br />
        <br />
        <p style={{"cursor":"pointer"}}>Security Guard</p>
        <p style={{"cursor":"pointer"}}>Software Engineer</p>
        <p style={{"cursor":"pointer"}}>Accountant</p>
        <p style={{"cursor":"pointer"}}>Driver</p>
        <p style={{"cursor":"pointer"}}>Data Entry Clerk</p>
        <p style={{"cursor":"pointer"}}>Teacher</p>
        <p style={{"cursor":"pointer"}}>Nurse</p>
        <p style={{"cursor":"pointer"}}>Laboratory Technician</p>
        <p style={{"cursor":"pointer"}}>Computer Operator</p>
        <p style={{"cursor":"pointer"}}>Pharmacist</p>
        <p style={{"cursor":"pointer"}}>Graphic Designer</p>
        <p style={{"cursor":"pointer"}}>Mechanical Engineer</p>
        <p style={{"cursor":"pointer"}}>High School Teacher</p>
        <p style={{"cursor":"pointer"}}>Full Stack Developer</p>
      </div>
      <div style={{"marginLeft":"120px"}}>
        <br />
        <br />
        <p style={{"cursor":"pointer"}}>Architect</p>
        <p style={{"cursor":"pointer"}}>Police Officer</p>
        <p style={{"cursor":"pointer"}}>CNC Operator</p>
        <p style={{"cursor":"pointer"}}>Physiotherapist</p>
        <p style={{"cursor":"pointer"}}>Medical Representative</p>
        <p style={{"cursor":"pointer"}}>Electrical Engineer</p>
        <p style={{"cursor":"pointer"}}>Web Developer</p>
        <p style={{"cursor":"pointer"}}>Assistant Professor</p>
        <p style={{"cursor":"pointer"}}>Engineer</p>
        <p style={{"cursor":"pointer"}}>Electrician</p>
        <p style={{"cursor":"pointer"}}>Computer Engineer</p>
        <p style={{"cursor":"pointer"}}>Data Analyst</p>
        <p style={{"cursor":"pointer"}}>Office Assistant</p>
        <p style={{"cursor":"pointer"}}>Data Scientist</p>
      </div>
      <div style={{"marginLeft":"100px"}}>
        <br />
        <br />
        <p style={{"cursor":"pointer"}}>Flight Attendant</p>
        <p style={{"cursor":"pointer"}}>Radiologist</p>
        <p style={{"cursor":"pointer"}}>Accountant</p>
        <p style={{"cursor":"pointer"}}>Registered Nurse</p>
        <p style={{"cursor":"pointer"}}>Bus Driver</p>
        <p style={{"cursor":"pointer"}}>Veterinarian</p>
        <p style={{"cursor":"pointer"}}>Nurse</p>
        <p style={{"cursor":"pointer"}}>School Teacher</p>
        <p style={{"cursor":"pointer"}}>Counselor</p>
        <p style={{"cursor":"pointer"}}>Housekeeper</p>
        <p style={{"cursor":"pointer"}}>Medical Officer</p>
        <p style={{"cursor":"pointer"}}>Collector</p>
        <p style={{"cursor":"pointer"}}>Elementary School Teacher</p>
        <p style={{"cursor":"pointer"}}>Stenographer</p>
      </div>
    </div>
    {/* End footer */}
  
    <div style={{"display":"flex","width":"100%","backgroundColor":"black"}}>
      <div style={{"height":"18rem","marginLeft": "40px","cursor":"pointer"}}>
       <a href="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zQ_T79aGjA9-5fERCl3Ys1zVO36s5eTJQA&usqp=CAU"/>     
        </a>
        <br />
        <br />
        </div> 

        <div style={{"height":"10rem","marginLeft": "40px"}}>
          <br />
        <h3 style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Explore Indeed</h3>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Career Explore</p>
        <a href="https://in.indeed.com/career-advice?from=gnav-title-webapp&ikw=jsfooter&isid=jasx_us-en">
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white","textDecoration":"none"}}>Career Advice</p>
        </a>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Brows Jobs</p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Brows Companies</p>
        </div>

        <div style={{"height":"10rem","marginLeft": "60px"}}>
          <br />
          <br />
          <br />
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Salaries</p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Indeed Events</p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Work at Indeed </p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Countries</p>
        </div>
        <div style={{"height":"10rem","marginLeft": "70px"}}>
          <br />
          <br />
          <br />  
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>About</p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Help Centre</p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>ESG at Indeed</p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Guidlines for safe jobs </p>
        <p style={{"cursor":"pointer","fontWeight":"bold","color":"white"}}>Search</p>
        </div>

        {/* follow us div */}
        <div style={{"marginLeft": "70px","width":"250px"}}>
            <br />
             <h3 style={{"cursor":"pointer","fontWeight":"bold","color":"white","marginLeft": "30px"}}>Folllow Us</h3>  
             <div style={{"display":"flex","padding":"5px","justifyContent":"space-evenly"}}>
             <a href="https://twitter.com/Indeed?from=gnav-title-webapp">
                <img style={{"width":"30px","height":"30px" ,"cursor":"pointer"}} src="data:image/png;base64,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"/>
              </a>
              <a href="https://www.facebook.com/Indeed?from=gnav-title-webapp">
                <img style={{"width":"30px","height":"30px" ,"cursor":"pointer"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///9bW1urq6uAgIDV1dViYmLS0tL4+Pji4uLZ2dmjo6Po6OjExMTe3t7IyMi+vr6ZmZm2trYXFxe3t7fs7OwJCQkhISF2dnaPj4+lpaVeXl5ISEiUlJR4eHhoaGgyMjIuLi47OztCQkInJydTU1MxMTGfLaxiAAADgUlEQVR4nO3d21IiMRSFYZvG4SxnOYMyOu//iDMXWtpFI+x0Zq+V1PrvvLHyFdJg0kk/POBanVvr9mazOUyng4+2ZVluP3+YfrYDDjKs5/16Ouovi3sboAds6zTo3G9LTrjaPBpxSQnn7U4ILxnha2n92/xqix78PZXdYF9RlOjR367dxJeA8Bx0eUlIuG72Av5rhib83KCpj104ag7kFo4jAIsFWvFDkxhAZuEsCpBYuIkDLCZoyLX2kYC8wvAvookII3wQfjRCU+o7RwMWY7Slvhgf9dTCaJcZWmHEl5BT+BYRWHTQmroO2QuHuQsjflSQCqP+kRaPaE5NTWdm6IXzxlMz7MJTVCCjMO7bsOijPZdFmZ356gntuayXu3AV90JDKPwdF1j00KCLWpGFQzToomP2wliziLzCBnNQ3br4rjSlGdYfrM/oUVuyTub33tEjtrawAZdz9IDNGVecTujx2rPNsy3Rww3I9sWbd+3serZ7nzbo4QZkEyb4NjTO0uzRww2obxK+oIcbkE34hh5uQE8m4Qo93IBswvS+0VinafIXPqOHG5CEEvJnWx7NXtjNX4gebUgSSsifSZjiNI2EEiaQSci3sHRHElbiW8K+Iwkr8S1/fut116rNtNFi+F7/S76FW15sWyQNwl2MvIS4/YdewkP2wnb2Qtz6m5cQt/7mJcSt3XgJYUAvIfD/Kych8HudkxC4dc1JCLzhxkkIPIDHSQi8pchJeMxe2Mpe+JK9ELjA6CTEAZ2EyMUpHyFyutFHiNzn7CNEnmziI0Se9OUjRJ586SPEzbR5CZF3uvsIkXe6+wiRm9pchF3kne4uwiXyzj4XIXQF1UUIPTLCRQg9js5FCD3q2kUI3bznIlwnL+x26huPx6NJOThCt9T8Of2qa2e72wQpCM2030JCyiSUkD+TMMm7LyWUkD8JJeTPdOKAhJRJKCF/Elai3hV0LQkl5E/C9IWm08wkpExCCfmTsBLhwytuJ6GE/EkoIX+ms6AlpExCCfmTsBLhg/FuJ6GE/EmYvtD0FBYJKZNQQv4krMT44PSbSSghfxJKyJ+EEvJnEgJPtgxPwvSFpucBS0iZhBLyJ6GE/OUvHEkoIX0SSsifhJWgZ+qFlr9wIqGE9EkoIX8SSsjfQkIJ6ZNQQv4krDRBjzakmYQS0iehhPzlL8z/E/9YGvrfD477C47JUcbglne0AAAAAElFTkSuQmCC"/>
              </a>
              <a href="https://www.instagram.com/indeedworks/?from=gnav-title-webapp">
                <img style={{"width":"30px","height":"30px" ,"cursor":"pointer"}} src="data:image/png;base64,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"/>
                </a>
                <a href="https://www.youtube.com/user/IndeedJobs">
                <img style={{"width":"30px","height":"30px" ,"cursor":"pointer"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dea8d27-a9ef-4484-9c20-51f212ebe10f/dd65tbb-545c4f6d-1c6a-4b6f-a19e-499d41142d7d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkZWE4ZDI3LWE5ZWYtNDQ4NC05YzIwLTUxZjIxMmViZTEwZlwvZGQ2NXRiYi01NDVjNGY2ZC0xYzZhLTRiNmYtYTE5ZS00OTlkNDExNDJkN2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UDmSajghmsdnZgTrAwZoVpIBOmiiJS5tSn3mK8S584Y"/>
                </a>
                </div> 
        </div>
        </div>
        <div  style={{"display":"flex","width":"100%","backgroundColor":"black"}}>
            <p style={{"cursor":"pointer","color":"white","marginLeft":"50px"}}>© 2021 Indeed-Accessibility at Indeed-Privacy Center-Cookies-Privacy</p>
        </div>
    </>
  );
};

export default Footer;
