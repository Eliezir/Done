import "./App.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

  return (
    <ThemeProvider>
      <div className="w-full h-screen flex items-center justify-center">
        <Button>Teste</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
