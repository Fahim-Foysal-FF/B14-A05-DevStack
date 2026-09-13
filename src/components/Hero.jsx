export default function Hero() {
  return (
    <div className="hero bg-base-100 py-12">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">Build Your Dream <br/><span className="text-gradient">Tech Stack</span></h1>
          <p className="py-6 text-gray-500 text-lg">
            Discover the best frontend, backend, and database technologies. Mix and match to create the perfect architecture for your next big project.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn brand-gradient text-white border-none rounded-full px-8">Explore Technologies</button>
            <button className="btn btn-outline rounded-full px-8">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}