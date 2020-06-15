import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home";
import NasaVisual from "./components/NasaVisual";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaVisual} path="/nasavisual" />
      </div>
    </BrowserRouter>
  );
}