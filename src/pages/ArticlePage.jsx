import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X, Twitter } from 'lucide-react';
import { articles } from '../data/articles';

const SocialMediaPopup = ({ onClose, showCloseButton, countdown }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg relative shadow-2xl">
        {/* Header */}
        <div className="bg-gray-100 p-4 rounded-t-lg border-b flex justify-between items-center">
          <div className="font-serif text-xl">Stay Connected</div>
          <div className="flex items-center">
            {!showCloseButton && (
              <span className="text-gray-500 font-medium mr-2">
                {countdown}s
              </span>
            )}
            {showCloseButton ? (
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>
            ) : (
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold mb-3">Never Miss Breaking News</h3>
            <p className="text-gray-600 text-lg">
              Follow The People's Gazette on social media to stay informed with the latest updates.
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-4">
          <a 
  href="https://x.com/ECPMain" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded hover:bg-opacity-90 transition duration-200 font-medium"
>
  <Twitter size={20} />
  <span>Follow on Twitter</span>
</a>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              Join our growing community of informed readers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticlePage = () => {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const article = articles.find(a => a.id === parseInt(id));

  useEffect(() => {
    // Show popup immediately on mount and every 4 minutes
    const showPopupWithDelay = () => {
      setShowPopup(true);
      setShowCloseButton(false);
      setCountdown(4);
      
      // Start countdown
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            setShowCloseButton(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return countdownInterval;
    };

    // Initial popup
    let countdownInterval = showPopupWithDelay();

    // Set interval for subsequent popups
    const popupInterval = setInterval(() => {
      countdownInterval = showPopupWithDelay();
    }, 4 * 60 * 1000);

    // Cleanup
    return () => {
      clearInterval(popupInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="bg-white">
      {showPopup && (
        <>
          <div className="fixed inset-0 backdrop-blur-sm z-40" />
          <SocialMediaPopup 
            onClose={() => setShowPopup(false)} 
            showCloseButton={showCloseButton}
            countdown={countdown}
          />
        </>
      )}
      
      <div className={`container mx-auto px-4 py-8 max-w-4xl ${showPopup ? 'blur-sm' : ''}`}>
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
                "History repeats itself, first as tragedy, second as farce"
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
