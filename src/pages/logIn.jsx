import React, { useState } from "react";

export default function LogIn({ setUserId, userId}) {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("⚠️ Username cannot be empty, my darling.");
      return;
    }

    try {
      const response = await fetch("/API/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`❌ Error: ${data.error || "Something went wrong."}`);
      } else {
        alert(`✅ ${data.message} (User ID: ${data.userId})`);
        setUserId(data.userId); // Save logged-in user ID in state
      }

      setUsername("");
    } catch (error) {
      console.error("Error:", error);
      alert("💥 The network is not turned on.");
    }
  };


  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ backgroundColor: "#a1eafb" }}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
