import "./App.css";
import ArticlePage from "./components/ArticlePage";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [keywords, setKeywords] = useState("");

  return (
    <>
      <Navbar keywords={keywords} setKeywords={setKeywords} />

      <ArticlePage keywords={keywords} setKeywords={setKeywords}/>
    </>
  );
}

export default App;
