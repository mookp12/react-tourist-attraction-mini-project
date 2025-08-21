import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "lucide-react";

const ArticlePage = ({ keywords, setKeywords }) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${keywords}`
      );
      setArticles(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [keywords]);

  const handleTagClick = (tag) => {
    setKeywords(tag);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    <article className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      {articles.map((article) => (
        <div key={article.eid}>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="md:w-1/3 p-6 mt-2">
              <img
                src={article.photos[0]}
                alt={article.title}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.description.slice(0, 100)} ...
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <span className="text-blue-500 cursor-pointer">อ่านต่อ</span>
                </a>
              </p>
              <div className="mb-4">
                <span className="text-gray-500 text-sm">หมวด </span>
                {article.tags.map((tag, index) => (
                  <span key={index}>
                    {article.tags.length - 1 === index && (
                      <span className="text-gray-500 text-sm">และ </span>
                    )}
                    <span 
                      className="text-blue-500 underline cursor-pointer text-sm mr-2"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </span>
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {article.photos.map(
                    (photo, index) =>
                      index !== 0 && (
                        <img
                          key={index}
                          src={photo}
                          alt={`Gallery image ${index}`}
                          className="w-16 h-16 object-cover rounded"
                        />
                      )
                  )}
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center justify-center"
                >
                  <Link className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
    </div>
  );
};

export default ArticlePage;
