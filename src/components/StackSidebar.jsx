export default function StackSidebar({ stack, handleRemove, handleRemoveAll }) {
  return (
    <div className="bg-base-100 rounded-2xl shadow-md p-5 sticky top-24">
      <h2 className="text-xl font-bold mb-1">Your Stack</h2>
      <p className="text-sm text-gray-500 mb-4">{stack.length} Technologies Selected</p>

      {stack.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-400 font-semibold">Your stack is empty</p>
          <p className="text-xs text-gray-400 mt-1">Add items from the left</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                  <span className="text-[10px] text-gray-500 uppercase font-semibold">{item.category}</span>
                </div>
              </div>
              <button 
                onClick={() => handleRemove(item.id)}
                className="btn btn-ghost btn-xs text-red-400 text-lg p-0"
              >
                ✕
              </button>
            </div>
          ))}
          
          <button 
            onClick={handleRemoveAll} 
            className="btn btn-outline btn-error btn-sm w-full mt-4"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}