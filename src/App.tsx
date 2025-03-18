import "./App.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/ThemeProvider";
import { WelcomeScreen } from "./components/WelcomeScreen";

function App() {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  const handleWelcomeComplete = () => {
    // TODO: Save user's showWelcome preference
    setShowWelcome(false);
  };

  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

  return (
    <ThemeProvider>
      <div>
      {showWelcome ? (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <Button>Teste</Button>
        </div>
      )}
      </div>
    </ThemeProvider>
  );
}

export default App;
