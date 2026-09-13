export default function Navbar() {
  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 py-3 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <span className="text-xl">☰</span>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className="text-[#d92671] font-bold"><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
          </ul>
        </div>
        {/* Logo: larger (h-8) and moved right (ml-4 lg:ml-8) */}
        <a className="text-2xl font-bold ml-4 lg:ml-8 flex items-center gap-2">
          <img src="/logo-text.png" alt="DevStack" className="h-8 lg:h-9 object-contain" />
        </a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600 gap-2">
          {/* Home colored pink */}
          <li className="text-[#d92671] font-bold"><a>Home</a></li>
          <li><a className="hover:text-gray-900">Technologies</a></li>
          <li><a className="hover:text-gray-900">Projects</a></li>
          <li><a className="hover:text-gray-900">About</a></li>
          <li><a className="hover:text-gray-900">Contact</a></li>
        </ul>
      </div>
      
      <div className="navbar-end gap-5">
        <button className="text-[#64748b] font-medium hover:text-gray-900">Sign In</button>
        <button className="bg-[#d92671] text-white px-7 py-2.5 rounded-full font-medium hover:bg-[#b81d5f] transition-colors">Sign Up</button>
      </div>
    </div>
  );
}