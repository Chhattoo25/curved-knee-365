import React from "react";


const Message = () => {
  return (
    <>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "30%",
            height: "600px",
            border: "1px solid lightgrey",
            margin: "auto",
            borderRadius: "10px",
            marginLeft: "50px",
          }}
        >
          <h2 style={{ marginLeft: "50px" }}>Messages</h2>
          <select
            style={{
              marginLeft: "50px",
              width: "300px",
              height: "50px",
              fontSize: "15px",
              padding: "8px",
              borderRadius: "10px",
            }}
          >
            <option style={{ fontSize: "15px" }}> Inbox</option>
            <option> Archieve</option>
            <option> Spam</option>
          </select>
          <br />
          <br />
          <hr />
        </div>
        <div
          style={{
            width: "58%",
            height: "600px",
            border: "1px solid lightgrey",
            margin: "auto",
            borderRadius: "10px",
            "text-align": "center",
            "marginRight":"70px"
          }}
        >
          <div>
            <img
              style={{ width: "200px", height: "200px", marginTop: "100px" }}
              src="https://icon-library.com/images/pink-messages-icon/pink-messages-icon-15.jpg"
            />{" "}
          </div>
          <h1 style={{ marginTop: "0px" }}>Welcome to messages</h1>
          <p style={{ marginTop: "-10px", fontSize: "18px" }}>
            When an employer contacts you,
            <br />
            you will see messages here.{" "}
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
          <br />
          <button
            style={{
              padding: "8px",
              width: "230px",
              fontSize: "20px",
              color: "#2557a7",
              fontStyle: "bold",
              border: "1px solid grey",
              borderRadius: "10px",
            }}
          >
            Upload your resume{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
