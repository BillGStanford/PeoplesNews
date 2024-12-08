import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const organizations = [
    { name: "1. Communist Party of Ethiopia", url: "https://ecp-tau.vercel.app/" },
  ];

  return (
    <header className="bg-red-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-3xl">☭</span>
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-wider">The People's Gazette</h1>
              <p className="text-sm tracking-widest">WORKERS OF THE WORLD, UNITE!</p>
            </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm uppercase tracking-wider">
              <li><Link to="/" className="hover:text-red-200">Home</Link></li>
              <li>
                <button 
                  onClick={() => setModalOpen(true)} 
                  className="hover:text-red-200"
                >
                  ORGANIZATIONS
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h2 className="text-xl text-black font-bold mb-4">ORGANIZATIONS WE SUPPORT</h2>
            <ul className="list-disc pl-5">
              {organizations.map((org, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={org.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-black hover:underline"
                  >
                    {org.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setModalOpen(false)} 
              className="mt-4 bg-red-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
