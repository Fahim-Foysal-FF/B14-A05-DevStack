export default function TechCard({ tech, handleAdd, isAdded }) {
  return (
    <div className="card bg-base-100 shadow-md border border-gray-100">
      <div className="card-body p-5">
        <div className="flex justify-between items-start mb-2">
          <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
          <div className="badge badge-neutral text-xs">{tech.badge}</div>
        </div>
        <h2 className="card-title text-lg">{tech.name}</h2>
        <div className="flex gap-2 text-xs font-semibold mb-2">
          <span className="text-blue-500 bg-blue-50 px-2 py-1 rounded">{tech.category}</span>
          <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded">{tech.difficulty}</span>
        </div>
        <p className="text-sm text-gray-500 flex-grow">{tech.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-bold text-yellow-500 flex items-center gap-1">⭐ {tech.rating}</span>
          <button 
            onClick={() => handleAdd(tech)} 
            disabled={isAdded}
            className={`btn btn-sm ${isAdded ? 'btn-disabled bg-gray-200 text-gray-500' : 'brand-gradient text-white border-none'}`}
          >
            {isAdded ? '✓ Added' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
}