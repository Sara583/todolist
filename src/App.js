import "./App.css";
import Header from "./components/Header";
import List from "./components/list";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  rel="stylesheet"
></link>;

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
