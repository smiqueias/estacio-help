import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "../components/Loading";
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";
import React from "react";

export function Routes() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
