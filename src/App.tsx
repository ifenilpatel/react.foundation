import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full px-10 py-4 fixed top-0 left-0 bg-white/20 backdrop-blur-lg shadow-md flex justify-between items-center z-50 border-b border-white/10 transition-all duration-300">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
          Backoffice
        </div>
        <Link
          to="/auth/signin"
          className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]"
        >
          Sign In
        </Link>
      </header>
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 mt-20">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          Elevate Your Experience with <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Backoffice</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">The ultimate platform designed to make your life easier. Sign in and start exploring!</p>
        <Link
          to="/auth/signin"
          className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
export default App;
