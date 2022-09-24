import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  NativeBaseProvider,
  Stack,
  StatusBar,
  Text,
  Image,
} from "native-base";
import React from "react";
import { THEME } from "../../styles/theme";
import { SignIn } from "../SignIn";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <SignIn />
    </NativeBaseProvider>
  );
}
