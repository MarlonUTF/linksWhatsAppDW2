import Header from "./Header/Header";
import Main from "./Corpo/Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Main />
      </div>
    </div>
  );
}
