import React from "react";
import "./App.sass";
import Header from "../src/component/Header.jsx";
import Main from "../src/component/Main.jsx";
import Component from "../src/component/Component.jsx";
import Footer from "../src/component/Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Component></Component>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
