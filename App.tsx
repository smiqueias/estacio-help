import { Box, NativeBaseProvider, StatusBar } from "native-base";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
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
