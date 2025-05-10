import heroImage from "./assets/heroImg.svg";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="hidden md:flex md:justify-center md:w-1/2">
        <img
          src={heroImage}
          alt="Login Visual"
          className="object-contain w-[80%] h-full"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md border border-gray-200 shadow-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login to BtoGo
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
