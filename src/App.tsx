import Main from "./components/Main";

function App() {
  return (
    <div className="relative w-full h-[200px] lg:h-[300px] bg-cafe-image bg-cover bg-no-repeat bg-center">
      <div className="absolute top-32 lg:top-40 inset-x-0 w-[90%] h-full mx-auto lg:max-w-6xl">
        <Main />
      </div>
    </div>
  );
}

export default App;
