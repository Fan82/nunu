import React, { useState, useEffect } from "react"; // 補上 hook 引入
import "./App.sass";
import LoadingScreen from "../src/component/LoadingScreen.jsx";
import Header from "../src/component/Header.jsx";
import Main from "../src/component/Main.jsx";
import ScrollTopIndicator from "../src/component/ScrollTopIndicator.jsx";
import Footer from "../src/component/Footer.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <LoadingScreen
          isLoading={loading}
          onFadeOutComplete={() => setShowLoader(false)}
        />
      )}

      {!showLoader && (
        <>
          <Header />
          <ScrollTopIndicator />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
