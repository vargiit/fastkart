import Layout from "./components/Layout";
import Context from "./Context/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Layout />
      </div>
    </Context>
  );
}

export default App;
