import "./App.css";
import Counter from "./pages/counter";
import Parent from "./pages/parent";
import ToggleLogin from "./pages/toggleLogin";
import Todo from "./pages/todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <Parent /> */}
        {/* <Todo /> */}
        <ToggleLogin />
      </header>
    </div>
  );
}

export default App;
