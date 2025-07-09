import React, { useState } from 'react';
import { Send, Copy, Loader2, CheckCircle, AlertCircle, Mail, Settings } from 'lucide-react';
import axios from 'axios';

const EmailGenerator = () => {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const toneOptions = [
    { value: '', label: 'Auto-detect tone', icon: '🤖' },
    { value: 'professional', label: 'Professional', icon: '👔' },
    { value: 'casual', label: 'Casual', icon: '😊' },
    { value: 'friendly', label: 'Friendly', icon: '🤝' },
    { value: 'formal', label: 'Formal', icon: '🎩' },
    { value: 'apologetic', label: 'Apologetic', icon: '🙏' }
  ];

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
      
    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('❌ Failed to generate email reply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="email-generator" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Generate Your Email Reply
          </h2>
          <p className="text-xl text-gray-600">
            Paste your email content and let AI craft the perfect response
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
          <div className="space-y-6">
            {/* Email Content Input */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                <Mail className="w-5 h-5 text-blue-600" />
                Original Email Content
              </label>
              <textarea
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                placeholder="Paste the email you want to reply to here..."
                className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400 transition-all duration-200"
              />
            </div>

            {/* Tone Selection */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                <Settings className="w-5 h-5 text-purple-600" />
                Reply Tone
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {toneOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTone(option.value)}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 text-left hover:scale-105 ${
                      tone === option.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <span className="text-lg mr-2">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleSubmit}
              disabled={!emailContent.trim() || loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Reply...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Generate Reply
                </>
              )}
            </button>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            {/* Generated Reply */}
            {generatedReply && (
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Generated Reply</span>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-200 mb-4">
                  <pre className="whitespace-pre-wrap text-gray-700 font-medium leading-relaxed">
                    {generatedReply}
                  </pre>
                </div>
                
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    copied 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-100 hover:bg-green-200 text-green-800'
                  }`}
                >
                  <Copy className="w-4 h-4" />
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailGenerator;