import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen flex-col bg-background text-primary">
        {/* Navbar */}
        <header className="mb-8 flex justify-between px-6 py-4 shadow-lg dark:bg-gray-900">
          <h1 className="text-lg font-bold">TailwindCSS</h1>

          <nav className="flex gap-4 items-center">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>

            <button
              className="text-sm underline cursor-pointer border-red"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              Toggle Theme
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex grow items-center justify-center px-6 py-12">
          <div className="max-w-2xl text-center space-y-6">
            <h2 className="text-4xl font-bold">Create. Launch. Grow.</h2>
            <p className="text-lg">
              A beautiful and modern starter page build with Tailwind CSS v4 and
              themes and dark mode support.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="btn"
              >
                Get Started
              </a>
              <a
                href="#"
                className="btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-16 bg-gray-100 dark:bg-gray-800 text-primary">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
            <div className="grid gap-8 md:grid-cols-3 text-left">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Fast Setup</h4>
                <p>
                  Launch your site in minutes with our easy-to-use templates and
                  components.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Dark Mode</h4>
                <p>
                  Built-in dark mode using Tailwind's custom theming - just
                  toggle and go!
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Fully Responsive</h4>
                <p>
                  Optimized layouts that adapt beautifully across all devices
                  and screen sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h3 className="text-3xl font-semibold">What People Are Saying</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded border p-6 bg-white dark:bg-gray-900">
                <p className="italic">
                  "This landing page template saved me hours of work. It's
                  beautiful and easy to customize!"
                </p>
                <p className="mt-4 font-bold">- Alex J.</p>
              </div>
              <div className="rounded border p-6 bg-white dark:bg-gray-900">
                <p className="italic">
                  "I love the dark mode and how easy it is to switch themes.
                  Tailwind v4 is amazing!"
                </p>
                <p className="mt-4 font-bold">- Samira L.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t border-gray-300 dark:border-gray-700 px-6 py-6 text-center text-sm">
          <p>&copy; 2026 Tailwind testing website. All rights reserved.</p>
          <p className="mt-2">Build with ❤️ using Tailwind CSS v4</p>
        </footer>
      </div>
    </div>
    //!Started block
    // <>
    //   <div className="min-h-screen bg-teal-100 flex flex-col">
    //     <div className="flex justify-between bg-teal-500 px-6 py-4 text-teal-100 mb-8">
    //       <h1 className="text-lg font-bold tracking-widest">Tailwind</h1>
    //       <nav className="flex gap-4">
    //         <a href="#">Home</a>
    //         <a href="#">Blog</a>
    //         <a href="#">Contact</a>
    //       </nav>
    //     </div>

    //     <div className="space-y-8 flex-grow">
    //       <section className="text-center">
    //         <h2 className="font-semibold text-2xl mb-4">Welcome</h2>
    //         <p>This is the main content area of the webside</p>
    //       </section>

    //       <section>
    //         <h2 className="font-semibold text-2xl mb-4 text-center">
    //           Features
    //         </h2>
    //         <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 1
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 2
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 3
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 4
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 5
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 6
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 7
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 8
    //           </div>
    //           <div className="rounded-xl bg-teal-300 p-4 hover:bg-teal-300/80 hover:cursor-pointer hover:text-teal-100 hover:shadow-lg">
    //             Feature 9
    //           </div>
    //         </div>
    //       </section>
    //     </div>

    //     <footer className="bg-teal-500 py-6 text-center text-sm text-teal-100 mt-4">
    //       &copy; 2026 Testing Tailwind. All rights reserved.
    //     </footer>
    //   </div>
    // </>
  );
}

export default App;
