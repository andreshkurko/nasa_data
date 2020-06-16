import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
 
  return (
    <div className="home">
      <Link className="link" to="/nasaphoto" >See into the stars!</Link>
      <Link className="home">created by Andre Shkurko</Link>
    </div>
  );
}