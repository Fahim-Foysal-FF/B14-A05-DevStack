export default function Navbar() {
  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <span className="text-xl">☰</span>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
          </ul>
        </div>
        <a className="text-2xl font-bold ml-2 flex items-center gap-2">
          <img src="/logo-text.png" alt="DevStack" className="h-6 object-contain" />
        </a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
          <li><a className="hover:text-gray-900">Home</a></li>
          <li><a className="hover:text-gray-900">Technologies</a></li>
          <li><a className="hover:text-gray-900">Projects</a></li>
          <li><a className="hover:text-gray-900">About</a></li>
          <li><a className="hover:text-gray-900">Contact</a></li>
        </ul>
      </div>
      
      {/* Updated Sign In / Sign Up Section */}
      <div className="navbar-end gap-5">
        <button className="text-[#64748b] font-medium hover:text-gray-900">Sign In</button>
        <button className="bg-[#d92671] text-white px-7 py-2.5 rounded-full font-medium hover:bg-[#b81d5f] transition-colors">Sign Up</button>
      </div>
    </div>
  );
}