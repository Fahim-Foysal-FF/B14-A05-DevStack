import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

export default function App() {
  const [techs, setTechs] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch JSON Data
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechs(data);
        setLoading(false);
      });
  }, []);

  // Handle Add to Stack
  const handleAdd = (tech) => {
    const exists = stack.find((item) => item.id === tech.id);
    if (exists) {
      toast.warn(`${tech.name} is already in your stack!`);
    } else {
      setStack([...stack, tech]);
      toast.success(`${tech.name} added to stack!`);
    }
  };

  // Handle Remove Single Item
  const handleRemove = (id) => {
    const updatedStack = stack.filter((item) => item.id !== id);
    setStack(updatedStack);
    toast.info('Technology removed.');
  };

  // Handle Remove All
  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared your entire stack.');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Explore the <span className="text-gradient">Technologies</span></h2>
          <p className="text-gray-500 mt-3 text-lg">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Grid: Left Side */}
          <div className="lg:w-3/4">
            {loading ? (
              <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techs.map((tech) => (
                  <TechCard 
                    key={tech.id} 
                    tech={tech} 
                    handleAdd={handleAdd}
                    isAdded={!!stack.find((t) => t.id === tech.id)} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar: Right Side */}
          <div className="lg:w-1/4">
            <StackSidebar 
              stack={stack} 
              handleRemove={handleRemove} 
              handleRemoveAll={handleRemoveAll} 
            />
          </div>
          
        </div>
      </div>
      
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}