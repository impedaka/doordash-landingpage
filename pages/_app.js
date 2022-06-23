// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
