import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;