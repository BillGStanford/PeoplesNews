import React from 'react';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="bg-red-700 text-white py-8 px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            GLORY TO THE WORKERS' STRUGGLE!
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
           We Stand with Palestine
          </h2>
          <p className="text-xl">Today's Truth for Tomorrow's Victory</p>
        </div>
        
        <div className="flex justify-center space-x-8 text-red-700 text-2xl">
          <span>☭</span>
          <span>★</span>
          <span>☭</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-red-50 border-2 border-red-700 p-8">
          <h3 className="text-2xl font-bold uppercase mb-4">REVOLUTIONARY QUOTATION OF THE DAY</h3>
          <p className="text-lg italic mb-4">
            "The history of all hitherto existing society is the history of class struggles."
          </p>
          <p className="text-red-700 uppercase tracking-wider">- Karl Marx</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
