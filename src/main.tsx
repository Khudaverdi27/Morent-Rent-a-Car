import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Chakra.theme.ts";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </>
  );
});
