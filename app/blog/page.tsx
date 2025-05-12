"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function BlogTemplate() {
  // State for articles that would normally be fetched from backend
  const [articles, setArticles] = useState<Article[]>([]);
  interface Article {
    id: number;
    category: string;
    title: string;
    description: string;
    imageUrl: string;
  }

  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API fetch
  useEffect(() => {
    // This would be replaced with your actual API call
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data that would come from your backend
        const mockFeatured = {
          id: 1,
          category: "CATEGORY",
          title: "Ensuring medicine for all the children.",
          description: "Facilisis diam ex augue lorem placerat dignissim feugiat amet orci. Urna, ante feugiat diam in dui, nulla praesent. Dignissim feugiat amet orci. Urna, ante feugiat diam in dui, nulla praesent.",
          imageUrl: "/api/placeholder/480/360"
        };
        
        const mockArticles = [
          {
            id: 2,
            category: "CATEGORY",
            title: "Empower the Kids of Burma",
            description: "Tincidunt arcu imperdiet nulla dolor at. Leo tellus nisi imperdiet mollis sagittis, lectus. Lorem ultricies adipiscing...",
            imageUrl: "/api/placeholder/400/250"
          },
          {
            id: 3,
            category: "CATEGORY",
            title: "Empower the Kids of Burma",
            description: "Tincidunt arcu imperdiet nulla dolor at. Leo tellus nisi imperdiet mollis sagittis, lectus. Lorem ultricies adipiscing...",
            imageUrl: "/api/placeholder/400/250"
          },
          {
            id: 4,
            category: "CATEGORY",
            title: "Empower the Kids of Burma",
            description: "Tincidunt arcu imperdiet nulla dolor at. Leo tellus nisi imperdiet mollis sagittis, lectus. Lorem ultricies adipiscing...",
            imageUrl: "/api/placeholder/400/250"
          }
        ];
        
        setFeaturedArticle(mockFeatured);
        setArticles(mockArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  // Card component for reusability
  const ArticleCard = ({ article }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] group">
      <div className="overflow-hidden">
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-5">
        <div className="uppercase text-xs font-medium text-gray-500 mb-2 tracking-wider">{article.category}</div>
        <h3 className="text-blue-500 font-medium mb-3 transition duration-300 group-hover:text-blue-600">{article.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{article.description}</p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="text-blue-500 font-medium text-sm flex items-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section with subtle animation */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Stay Up To <span className="text-blue-500">Date</span></h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Mattis et aliaquam fermentum sed sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.
        </p>
      </div>

      {isLoading ? (
        // Loading state with skeleton UI
        <div className="animate-pulse">
          {/* Featured skeleton */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
          
          {/* Cards skeleton */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-5">
                  <div className="h-3 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Featured Article with hover effects */}
          {featuredArticle && (
            <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
              <div className="transform transition duration-500 hover:translate-x-2">
                <div className="uppercase text-sm font-medium text-blue-500 mb-2 tracking-wider">{featuredArticle.category}</div>
                <h2 className="text-2xl font-bold mb-4 transition duration-300 hover:text-blue-500">{featuredArticle.title}</h2>
                <p className="text-gray-600 mb-6">
                  {featuredArticle.description}
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                  Read More
                </button>
              </div>
              <div className="overflow-hidden rounded-lg transform transition duration-500 hover:shadow-xl hover:scale-105">
                <Image 
                  src={featuredArticle.imageUrl} 
                  alt={featuredArticle.title} 
                  className="rounded-lg w-full h-64 object-cover transition duration-700 hover:scale-110" 
                />
              </div>
            </div>
          )}

          {/* Article Cards with dynamic data and animations */}
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}