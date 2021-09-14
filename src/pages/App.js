import "./App.css";
import { Routes, store } from "../config";
import { Provider } from "react-redux";

function App() {
  return (
    // setUp redux
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
