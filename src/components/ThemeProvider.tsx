import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface SystemTheme {
  theme: "light" | "dark";
  accent_color: string;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const updateTheme = async () => {
      try {
        const { theme, accent_color } = await invoke<SystemTheme>("get_system_theme");
        
        // Set the theme class on root element
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add('light');
        
        // Convert accent color to HSL for the primary color
        const rgba = accent_color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
        if (rgba) {
          const [_, r, g, b] = rgba.map(Number);
          
          const r1 = r / 255;
          const g1 = g / 255;
          const b1 = b / 255;
          
          const max = Math.max(r1, g1, b1);
          const min = Math.min(r1, g1, b1);
          let h = 0;
          let s = 0;
          const l = (max + min) / 2;
          
          if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            
            switch (max) {
              case r1:
                h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
                break;
              case g1:
                h = (b1 - r1) / d + 2;
                break;
              case b1:
                h = (r1 - g1) / d + 4;
                break;
            }
            h /= 6;
          }
          
          const hDeg = Math.round(h * 360);
          const sPercent = Math.round(s * 100);
          const lPercent = Math.round(l * 100);
          
          const hslValue = `hsl(${hDeg} ${sPercent}% ${lPercent}%)`;
          
          // Set the primary color
          root.style.setProperty("--primary", hslValue);
          
          // Set the foreground color based on luminance
          const foreground = l > 0.6 
            ? "hsl(240 10% 3.9%)" 
            : "hsl(0 0% 98%)";
          root.style.setProperty("--primary-foreground", foreground);
        }
      } catch (error) {
        console.error("Failed to get system theme:", error);
      }
    };

    // Update theme when component mounts
    updateTheme();
    

    // TODO: Use windows system events to update the theme
    const interval = setInterval(updateTheme, 1000);

    return () => clearInterval(interval);
  }, []);

  return children;
}
