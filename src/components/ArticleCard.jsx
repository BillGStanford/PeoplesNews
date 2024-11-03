import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <article className="bg-white border border-red-700 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 mb-6">
      <div className="p-6">
        {article.category && (
          <span className="inline-block bg-red-700 text-white px-3 py-1 text-xs uppercase tracking-wider mb-3 rounded-full">
            {article.category}
          </span>
        )}
        <h2 className="text-2xl font-bold mb-2 uppercase text-red-700">
          <Link to={`/article/${article.id}`} className="hover:underline">
            {article.title}
          </Link>
        </h2>
        <div className="text-gray-600 text-sm mb-4 uppercase tracking-wide">
          <span>{article.author}</span> • <span>{article.date}</span>
        </div>
        <p className="text-gray-700 mb-4">{article.excerpt}</p>
        <Link 
          to={`/article/${article.id}`}
          className="inline-block bg-red-700 text-white px-4 py-2 uppercase tracking-wider text-xs hover:bg-red-800 transition-colors rounded"
        >
          Read More ►
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
