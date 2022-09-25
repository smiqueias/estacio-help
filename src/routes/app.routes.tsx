import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Details } from "../screens/Details";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="signIn">
      <Screen name="signIn" component={SignIn} />
      <Screen name="home" component={Home} />
      <Screen name="register" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}
