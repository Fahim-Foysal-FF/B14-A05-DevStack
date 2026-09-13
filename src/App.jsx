import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';

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
    <div className="min-h-screen bg-base-200 font-sans pb-10">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Grid: Left Side */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold mb-6">Explore Technologies</h2>
            
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner loading-lg text-secondary"></span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}