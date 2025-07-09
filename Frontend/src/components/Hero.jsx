import React from 'react';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToGenerator = () => {
    document.getElementById('email-generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm">
              <Mail className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Generate Perfect
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Email Replies
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transform any email into a professional, perfectly-toned response in seconds. 
            Powered by advanced AI to match your desired communication style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToGenerator}
              className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Start Generating
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-2 text-blue-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm">Trusted by 50,000+ professionals</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
};

export default Hero;