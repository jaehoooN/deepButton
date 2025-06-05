import links from "./data/links.json";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">딥링크 접속 버튼</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {links.slice(0, 10).map((entry, idx) => (
          <a
            key={idx}
            href={entry.url}
            className="bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition"
          >
            {entry.name} 접속
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
