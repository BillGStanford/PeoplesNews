import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card bg-white propaganda-border">
      <div className="p-6">
        {article.category && (
          <span className="inline-block bg-red-700 text-white px-3 py-1 text-sm uppercase tracking-wider mb-3">
            {article.category}
          </span>
        )}
        <h2 className="text-2xl font-bold mb-2 uppercase">
          <Link to={`/article/${article.id}`} className="text-gray-900 hover:text-red-700">
            {article.title}
          </Link>
        </h2>
        <div className="text-gray-600 text-sm mb-4 uppercase tracking-wider">
          <span>{article.author}</span> • <span>{article.date}</span>
        </div>
        <p className="text-gray-700 mb-4">{article.excerpt}</p>
        <Link 
          to={`/article/${article.id}`}
          className="inline-block bg-red-700 text-white px-4 py-2 uppercase tracking-wider text-sm hover:bg-red-800 transition-colors"
        >
          Read More ►
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;