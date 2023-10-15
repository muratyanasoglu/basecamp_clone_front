import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to Basecamp homepage!</h1>
      <Link href="/signup">Signup</Link> <br />      
      <Link href="/login">Login</Link> <br />    
      <Link href="/my/profile">My Profile</Link> <br />      
      <Link href="/my/devices">My Devices</Link> <br />      
    </div>
  );
};

export default HomePage;
