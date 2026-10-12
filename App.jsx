import React, { useState, useEffect } from 'react';
import { Compass, MessageSquare, Bot, Phone, Sun, Moon, PlusCircle, Heart, Send, Video, Mic, Sparkles, X, User } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');
  const [posts, setPosts] = useState([
    { id: 1, user: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', content: 'Embracing minimalist architecture in downtown Tokyo today. Less is truly more.', likes: 42, time: '2h ago' },
    { id: 2, user: 'Julian Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', content: 'Just wrapped up a new generative design experiment using React and Tailwind.', likes: 19, time: '5h ago' }
  ]);
  const [newPostContent, setNewPostContent] = useState('');
  
  // AI Bot state
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiMessages, setAiMessages] = useState([{ sender: 'ai', text: 'Hello, I am Aura AI. How can I inspire your day or assist your workflow?' }]);
  const [aiLoading, setAiLoading] = useState(false);

  // Call simulation state
  const [activeCall, setActiveCall] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;
    const post = {
      id: Date.now(),
      user: 'You',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      content: newPostContent,
      likes: 0,
      time: 'Just now'
    };
    setPosts([post, ...posts]);
    setNewPostContent('');
  };

  const handleSendAi = async (e) => {
    e.preventDefault();
    if (!aiPrompt.trim() || aiLoading) return;
    const userMsg = aiPrompt;
    setAiMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setAiPrompt('');
    setAiLoading(true);

    // Simulate AI response or call backend API
    setTimeout(() => {
      setAiMessages(prev => [...prev, { sender: 'ai', text: `Reflecting on "${userMsg}": Simplicity is the ultimate sophistication. Consider breaking down your thoughts into foundational principles.` }]);
      setAiLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-aura-50 dark:bg-aura-900 text-aura-800 dark:text-aura-50 flex flex-col md:flex-row transition-colors duration-300">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl font-bold tracking-widest uppercase">Aura</h1>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <nav className="space-y-2">
            <button onClick={() => setActiveTab('feed')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'feed' ? 'bg-gray-200 dark:bg-gray-800 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}>
              <Compass size={20} /> Feed
            </button>
            <button onClick={() => setActiveTab('chat')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'chat' ? 'bg-gray-200 dark:bg-gray-800 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}>
              <MessageSquare size={20} /> Messages
            </button>
            <button onClick={() => setActiveTab('ai')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'ai' ? 'bg-gray-200 dark:bg-gray-800 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}>
              <Bot size={20} /> Aura AI
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-semibold">Alex Rivers</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl mx-auto w-full p-6 md:p-10 overflow-y-auto">
        {activeTab === 'feed' && (
          <div className="space-y-8">
            {/* Create Post */}
            <form onSubmit={handleCreatePost} className="bg-white dark:bg-aura-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <textarea 
                rows="3" 
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Share your minimalist thoughts..."
                className="w-full bg-transparent resize-none focus:outline-none text-sm placeholder-gray-400"
              ></textarea>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                <button type="button" className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1">
                  <PlusCircle size={14} /> Add Media
                </button>
                <button type="submit" className="bg-aura-800 text-white dark:bg-white dark:text-aura-900 text-xs px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
                  Publish
                </button>
              </div>
            </form>

            {/* Posts List */}
            <div className="space-y-6">
              {posts.map(post => (
                <div key={post.id} className="bg-white dark:bg-aura-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="text-sm font-semibold">{post.user}</h4>
                        <span className="text-xs text-gray-400">{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{post.content}</p>
                  <div className="flex items-center gap-6 pt-2 text-xs text-gray-500">
                    <button className="flex items-center gap-1.5 hover:text-red-500 transition">
                      <Heart size={16} /> {post.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="flex flex-col h-[80vh] bg-white dark:bg-aura-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Sparkles size={18} className="text-amber-500" />
              <h3 className="text-sm font-semibold">Aura AI Assistant</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {aiMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-aura-800 text-white dark:bg-white dark:text-aura-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {aiLoading && <div className="text-xs text-gray-400 animate-pulse">Aura AI is thinking...</div>}
            </div>
            <form onSubmit={handleSendAi} className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
              <input 
                type="text" 
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Ask Aura AI anything..."
                className="flex-1 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-xl text-sm focus:outline-none"
              />
              <button type="submit" className="bg-aura-800 text-white dark:bg-white dark:text-aura-900 px-4 py-2 rounded-xl text-sm font-medium">
                <Send size={16} />
              </button>
            </form>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="bg-white dark:bg-aura-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 h-[80vh] flex flex-col justify-between">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold">Direct Message: Elena Rostova</h3>
              <div className="flex gap-2">
                <button onClick={() => setActiveCall('voice')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Phone size={16} /></button>
                <button onClick={() => setActiveCall('video')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"><Video size={16} /></button>
              </div>
            </div>
            <div className="flex-1 py-4 space-y-3 overflow-y-auto">
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl text-sm max-w-[70%]">Hi Alex, loved your recent design layout!</div>
              </div>
              <div className="flex justify-end">
                <div className="bg-aura-800 text-white dark:bg-white dark:text-aura-900 p-3 rounded-xl text-sm max-w-[70%]">Thanks Elena! Working on keeping it minimal and clean.</div>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
              <input type="text" placeholder="Type a message..." className="flex-1 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-xl text-sm focus:outline-none" />
              <button className="bg-aura-800 text-white dark:bg-white dark:text-aura-900 px-4 py-2 rounded-xl text-sm">Send</button>
            </div>
          </div>
        )}
      </main>

      {/* Call Modal Simulation */}
      {activeCall && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-aura-800 p-8 rounded-3xl w-96 flex flex-col items-center space-y-6 shadow-2xl">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Caller" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Elena Rostova</h3>
              <p className="text-xs text-gray-500">{activeCall === 'video' ? 'Video calling...' : 'Voice calling...'}</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setActiveCall(null)} className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition">
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
