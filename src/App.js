function App() {
  return (
    <div className="app text-center">
      <h1 className="text-orange-900 text-xl">AdaBrain.tv</h1>
      <p className="text-lg text-red-500 md:text-xl md:text-emerald-500 mb-5">
        Ada De Sions and AdaBrain
      </p>

      <div className="grid grid-cols-4 gap-x-6 gap-y-7">
        <div className="box outline outline-2 h-52">0</div>
        <div className="box outline outline-2 h-52">1</div>
        <div className="box outline outline-2 h-52">2</div>
        <div className="box outline outline-2 h-52">3</div>

        <div 
          className="box outline outline-2 h-52 p-4 bg-red-300 hover:bg-green-300 text-white hover:text-neutral-900"
        >4</div>
      </div>

      <div 
      className="
      section w-screen border border-2 border-neutral-900 h-32 mt-5 text-left p-4"
      >Welcome to my commmunity!</div>
    </div>
  );
}

export default App;