export default function TechCard({ tech, handleAdd, isAdded }) {
  return (
    <div className={`rounded-2xl p-6 flex flex-col h-full transition-all ${
      isAdded 
        ? 'bg-gray-50 border-2 border-[#d92671] shadow-sm' 
        : 'bg-white border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-lg'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
        <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-[#d92671] rounded-full">{tech.badge}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{tech.name}</h3>
      <p className="text-sm text-gray-500 mb-4 flex-grow">{tech.description}</p>
      
      <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-6">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="text-yellow-400">⭐ {tech.rating}</span>
      </div>
      
      <button 
        onClick={() => handleAdd(tech)} 
        disabled={isAdded}
        className={`w-full py-2.5 rounded-xl text-sm font-bold transition-colors ${
          isAdded 
            ? 'bg-pink-50 text-[#d92671] cursor-not-allowed' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}