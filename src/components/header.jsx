import Blob1 from "./blob1";

const Header = () => {
  return (
    <header className="z-1 flex items-center justify-between px-30 py-8 bg-white">
      <Blob1 cssClass="absolute w-140 -top-85 -left-17 -rotate-170 z-2"></Blob1>
      <div className="z-3">
        <h3 className="text-white text-3xl font-bold">BtoGo</h3>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li className="hover:scale-110 transition-transform">
            <a href="/" className="font-bold text-gray-800 hover:text-blue-600">
              ABOUT
            </a>
          </li>
          <li className="hover:scale-110 transition-transform">
            <a
              href="/about"
              className="font-bold text-gray-800 hover:text-blue-600"
            >
              PRICING
            </a>
          </li>
          <li className="hover:scale-110 transition-transform">
            <a
              href="/services"
              className="font-bold text-gray-800 hover:text-blue-600"
            >
              CONTACT
            </a>
          </li>
          <li className="hover:scale-110 transition-transform">
            <a
              href="/contact"
              className="gradient-border text-white font-bold hover:bg-blue-100 rounded-sm py-3 px-14 "
            >
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
