import { FaRegHospital } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          <FaRegHospital/>
            <h1 className="text-2xl font-bold text-gray-900">Jarurat Care</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/patients"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Patients
              </a>
              <a
                href="/About"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header