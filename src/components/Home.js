import React from "react";
import { Link } from "react-router-dom";
import {Img} from 'react-image';

const myComponent = () => <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/512px-NASA_Wormball_logo.svg.png" />

export default function Home() {
 
  return (
    <div className="home">
      <Link className="link" to="/nasaphoto" >See into the stars!</Link>
      <Link className="home">created by Andre Shkurko</Link>
      <div><img className="nasa-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/512px-NASA_Wormball_logo.svg.png" width="100px" height="100px"></img></div>
    </div>
  );
}