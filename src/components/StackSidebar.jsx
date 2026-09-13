export default function StackSidebar({ stack, handleRemove, handleRemoveAll }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-800">Your Stack</h2>
      <p className="text-xs text-gray-400 mb-6">{stack.length} Technology Selected</p>

      {stack.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-400 text-sm font-medium">Your stack is empty</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <h4 className="font-bold text-sm text-gray-700">{item.name}</h4>
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                ✕
              </button>
            </div>
          ))}
          <button onClick={handleRemoveAll} className="w-full mt-4 py-3 border border-red-200 text-red-500 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors">
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}