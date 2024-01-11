import FloatingCardButton from "./components/FloatingCardButton";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-800">
        <div className="max-w-4xl pt-14 mx-auto">
          <ProductsList />
        </div>
      </div>
      <FloatingCardButton />
    </>
  );
}

export default App;
