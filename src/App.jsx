import "./App.css";
import Skips from "./pages/Skips";
import { SkipProvider } from "./context/SkipContext";
function App() {
  return (
    <SkipProvider>
      <Skips />
    </SkipProvider>
  );
}

export default App;
