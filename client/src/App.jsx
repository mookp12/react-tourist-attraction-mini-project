import "./App.css";
import ArticlePage from "./components/ArticlePage";
import { useState } from "react";


function App() {

const [keywords, setKeywords] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-500 text-center mb-8">เที่ยวไหนดี</h1>
          <div className="max-w-2xl mx-auto">
            <p>ค้นหาที่เที่ยว</p>
            <input
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน ..."
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-lg"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
        </div>
      </header>

      
      
        
        <ArticlePage keywords={keywords}/>

   
    </div>
  );
}

export default App;
