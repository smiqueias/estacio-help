import { Box, NativeBaseProvider, StatusBar } from "native-base";
import React from "react";
import { THEME } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Box alignSelf="center" mt={32}>
        Hello Estacio Help
      </Box>
    </NativeBaseProvider>
  );
}
