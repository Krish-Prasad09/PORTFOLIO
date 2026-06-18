import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!window.Shery) return;
    Shery.makeMagnet('.a1');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{fontFamily: 'fh1'}} 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50' 
          : 'bg-gray-900/80 backdrop-blur-sm shadow-lg'
      }`}
    >
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo with Enhanced Styling */}
          <Link 
            to="/" 
            className="group relative text-2xl md:text-3xl font-bold tracking-wider transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">
              <span className="text-blue-400 drop-shadow-lg">K</span>
              <span className="text-white">rish </span>
              <span className="text-blue-400 drop-shadow-lg">P</span>
              <span className="text-white">rasad</span>
              <span className="text-blue-400">.</span>
            </span>
            
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 text-blue-400 blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10">
              <span>K</span>rish <span>P</span>rasad<span>.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div 
            style={{fontFamily:'fh2'}} 
            className="hidden md:flex gap-8 text-lg"
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name}
                onClick={() => {
                  window.scrollTo({top:0, behavior:'smooth'}); 
                }} 
                to={item.path} 
                className="a1 group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 text-blue-400 blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-20">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden group relative p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
          >
            <div className="relative z-10">
              {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </div>
            
            {/* Button Glow */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-800/90 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 shadow-2xl">
            {/* Mobile Menu Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl"></div>
            
            <div className="relative z-10 space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="group relative block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-700/50"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({top:0, behavior:'smooth'});
                  }}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.name}
                  </span>
                  
                  {/* Mobile Item Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-30"></div>
      
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;