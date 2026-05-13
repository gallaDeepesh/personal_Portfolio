import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

  }, [darkMode]);

  return (

    <button
      onClick={() => setDarkMode(!darkMode)}
      className="theme-toggle"
    >

      {
        darkMode
          ? <Sun size={20} />
          : <Moon size={20} />
      }

    </button>

  );
}

export default ThemeToggle;