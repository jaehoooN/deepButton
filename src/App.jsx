import links from "./data/links.json";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {links.slice(0, 10).map((entry, idx) => (
          <a
            key={idx}
            href={entry.url}
            className="bg-black text-white py-4 px-6 text-center text-lg font-medium rounded hover:opacity-80 transition"
          >
            {entry.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
