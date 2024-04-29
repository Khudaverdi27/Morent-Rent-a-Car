import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Chakra.theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
);
