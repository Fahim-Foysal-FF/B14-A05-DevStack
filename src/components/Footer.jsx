export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-12 mt-20 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1">
          {/* Logo updated to h-10 for larger size */}
          <img src="/logo-text.png" alt="DevStack Logo" className="h-10 mb-4 object-contain" />
          <p className="text-gray-500 text-sm">Curated tools, technologies, and resources for development building modern software.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">Product</h4>
          <ul className="text-sm text-gray-500 space-y-3"><li>Home</li><li>Technologies</li><li>Projects</li></ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">Company</h4>
          <ul className="text-sm text-gray-500 space-y-3"><li>About</li><li>Contact</li><li>Careers</li></ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">Legal</h4>
          <ul className="text-sm text-gray-500 space-y-3"><li>Privacy Policy</li><li>Terms of Service</li></ul>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400">
        <p>© 2026 DevStack. All rights reserved.</p>
        <div className="flex gap-4"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
      </div>
    </footer>
  );
}