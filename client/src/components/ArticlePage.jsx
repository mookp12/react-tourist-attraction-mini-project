
import axios from "axios";
import { useState, useEffect } from "react";

const ArticlePage = (props) => {

    const [articles, setArticles] = useState([]);
    const keywords = props.keywords;

    const fetchArticles = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/trips?keywords=${keywords}`);
            setArticles(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [keywords]);

  return (
    
    <article className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
        {articles.map((article) => (
            <div  key={article.eid}>
                 <div className="flex flex-col md:flex-row">
                 <div className="md:w-1/3">
                   <img
                     src={article.photos[0]}
                     alt={article.title}
                     className="w-full h-64 md:h-full object-cover"
                   />
                 </div>
                 <div className="md:w-2/3 p-6">
                   <h2 className="text-xl font-bold text-gray-800 mb-3">
                     {article.title}
                   </h2>
                   <p className="text-gray-600 mb-4 leading-relaxed">
                     {article.description} ...
                     <span className="text-blue-500 cursor-pointer">อ่านต่อ</span>
                   </p>
                   <div className="mb-4">
                     <span className="text-gray-500 text-sm">หมวด </span>
                     {article.tags.map((tag) => (
                           <span className="text-blue-500 underline cursor-pointer text-sm mr-2">
                           {tag}
                         </span>
                        ))}
                     
                     <span className="text-gray-500 text-sm">และ </span>
                     <span className="text-blue-500 underline cursor-pointer text-sm">
                       ตราด
                     </span>

                   </div>
                   <div className="flex justify-between items-center">
                     <div className="flex space-x-2">
                        {article.photos.map((photo) => (
                            <img
                            src={photo}
                            alt="Gallery image 1"
                            className="w-16 h-12 object-cover rounded"
                          />
                        ))}
                     </div>
                     <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                       <svg
                         className="w-5 h-5 text-gray-600"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                         />
                       </svg>
                     </button>
                   </div>
                 </div>
               </div>
               </div>
        ))}

 
    </article>
  );
};

export default ArticlePage;
