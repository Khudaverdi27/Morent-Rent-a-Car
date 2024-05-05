import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://example.com/user")
      .then((res) => res.json()) // JSON yanıtını parse et
      .then((data) => {
        console.log(data); // İşlenmiş verileri konsola yaz
      })
      .catch((error) => {
        console.error("Hata oluştu:", error); // Hata durumunda konsola yaz
      });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
