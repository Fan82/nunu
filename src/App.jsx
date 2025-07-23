import React from "react";
import "./App.sass";
import Header from "../src/component/Header.jsx";
import Main from "../src/component/Main.jsx";
import ScrollTopIndicator from "../src/component/ScrollTopIndicator.jsx";
import Footer from "../src/component/Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <ScrollTopIndicator></ScrollTopIndicator>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
