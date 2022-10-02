import React from "react";

const Notification = () => {
  return (
    <>
      <br />
      <br />
      <div style={{ display: "flex" ,marginTop:'8vh'}}>
        <div
          style={{
            width: "60%",
            height: "550px",
            border: "1px solid lightgrey",
            margin: "auto",
            borderRadius: "10px",
            "text-align": "center",
            marginRight: "260px",
            margin: "auto",
          }}
        >
          <div>
            <img
              style={{ width: "200px", height: "200px", marginTop: "80px" }}
              src="https://in.indeed.com/notifications/static/images/NotificationBell-6babc1.png"
            />{" "}
          </div>
          <h1>Nothing right now. Check back later!</h1>
          <p style={{ marginTop: "-10px", fontSize: "18px" }}>
            This is where we’ll notify you about your job applications and other{" "}
            <br />
            useful information to help you with your job search.
          </p>

          <button
            style={{
              padding: "8px",
              width: "230px",
              fontSize: "20px",
              color: "white",
              fontStyle: "bold",
              backgroundColor: "#2557a7",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Find jobs
          </button>
          <br />
        </div>
      </div>
    </>
  );
};

export default Notification;
