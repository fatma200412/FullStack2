import "./App.css";
import Mount from "./pages/async/Mount";
// import Mount from "./pages/lifeCyclrMethod/Mount";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Mount />
      </ChakraProvider>
    </>
  );
}

export default App;
