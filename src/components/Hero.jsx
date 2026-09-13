export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Build Your Ideal <br/>
          <span className="text-gradient">Development Stack</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        
        {/* Updated Buttons Section */}
        <div className="flex gap-4">
          <button className="brand-gradient text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="bg-white border border-gray-200 text-[#475569] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Learn More
          </button>
        </div>
        
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src="/banner-stack.png" alt="Tech Stack" className="max-w-full h-auto drop-shadow-2xl" />
      </div>
    </div>
  );
}