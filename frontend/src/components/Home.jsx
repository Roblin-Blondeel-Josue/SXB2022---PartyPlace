import React from "react";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFF5EC",
          width: "80%",
        }}
      />
      <div
        style={{
          backgroundColor: "#D9C46B",
          width: "20%",
          alignItems: "flex-end",
        }}
      />
    </div>
  );
}

export default Home;
