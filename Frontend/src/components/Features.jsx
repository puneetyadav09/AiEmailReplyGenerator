import React from 'react';
import { Zap, Shield, Clock, Sparkles, Users, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate professional replies in under 3 seconds with our optimized AI engine.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your emails are processed securely and never stored on our servers.',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Save Hours Daily',
      description: 'Reduce email writing time by 90% while maintaining professional quality.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Sparkles,
      title: 'Multiple Tones',
      description: 'Choose from professional, casual, friendly, or let AI decide the best tone.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Users,
      title: 'Team Friendly',
      description: 'Perfect for customer service, sales, HR, and executive communications.',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Supports multiple languages and cultural communication styles.',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Email Generator?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for professionals who value efficiency without compromising quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;