'use client'
import { useEffect, useState } from "react";

const CookiesPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    useEffect(() => {
      try {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        if (!cookiesAccepted) {
          setShowPopup(true);
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    }, []);
  
    const handleAccept = () => {
      try {
        localStorage.setItem("cookiesAccepted", "true");
        setShowPopup(false);
      } catch (error) {
        console.error("Error setting localStorage:", error);
        setShowPopup(false);
      }
    };
  
    if (!showPopup) return null;
  
    return (
      <div className="fixed bottom-4 right-4 bg-white p-6 rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-4 z-50 max-w-[90%] md:max-w-[400px]">
        <p className="text-sm text-gray-700">
          We use cookies to improve your experience. By using our site, you accept our{' '}
          <a 
            href="/privacy-policy" 
            className="text-orange-600 hover:text-orange-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Accept
        </button>
      </div>
    );
  };

  export default CookiesPopup;