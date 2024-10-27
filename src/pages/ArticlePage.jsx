import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-700">
          <h2 className="text-2xl font-bold">ARTICLE NOT FOUND</h2>
          <p>The requested propaganda material has been moved or redistributed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-block mb-8 text-red-700 hover:text-red-800 font-bold uppercase">
          ← Return to The People's Gazette
        </Link>
        
        <article className="propaganda-article">
          <div className="text-center mb-12">
            <div className="border-b-4 border-red-700 mb-6 pb-6">
              <span className="inline-block bg-red-700 text-white px-4 py-2 text-sm uppercase tracking-wider mb-6">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
                {article.title}
              </h1>
              <div className="text-gray-600 uppercase tracking-wider text-sm">
                By {article.author} • {article.date}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 text-red-700 text-2xl mb-6">
              <span>☭</span>
              <span>★</span>
              <span>☭</span>
            </div>
          </div>

          <div className="article-content prose max-w-none">
            <div className="bg-red-50 border-l-4 border-red-700 p-4 mb-8">
              <p className="text-lg italic">
                "From each according to their ability, to each according to their needs."
              </p>
            </div>

            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>


        </article>
      </div>
      

    </div>
  );
};

export default ArticlePage;