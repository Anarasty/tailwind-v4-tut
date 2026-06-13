function App() {
  return (
    <>
      <div className="min-h-screen bg-teal-100">
        <div className="flex justify-between bg-teal-500 px-6 py-4 text-teal-100 mb-8">
          <h1 className="text-lg font-bold tracking-widest">Tailwind</h1>
          <nav className="flex gap-4">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        <div className="space-y-8">
          <section className="text-center">
            <h2 className="font-semibold text-2xl mb-4">Welcome</h2>
            <p>This is the main content area of the webside</p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-4 text-center">
              Features
            </h2>
            <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-teal-300 p-4">Feature 1</div>
              <div className="bg-teal-300 p-4">Feature 2</div>
              <div className="bg-teal-300 p-4">Feature 3</div>
              <div className="bg-teal-300 p-4">Feature 4</div>
              <div className="bg-teal-300 p-4">Feature 5</div>
              <div className="bg-teal-300 p-4">Feature 6</div>
              <div className="bg-teal-300 p-4">Feature 7</div>
              <div className="bg-teal-300 p-4">Feature 8</div>
              <div className="bg-teal-300 p-4">Feature 9</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
