import React, { useState } from "react";
import { Alert } from "react-native";

import { Heading, VStack, useTheme } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
export function SignIn() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  function handleSignIn() {
    const correctEmail = "admin";
    const corretPassword = "12345";
    if (!email || !password) {
      setIsLoading(false);
      return Alert.alert("Entrar", "Informe e-mail e senha");
    }

    if (email == correctEmail && password == corretPassword) {
      return navigation.navigate("home");
    }
    return Alert.alert("e-mail ou senha incorretos.");
  }
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        value={email}
        onChangeText={setEmail}
        mb={4}
        placeholder="E-mail"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        mb={8}
        placeholder="Senha"
        secureTextEntry
      />

      <Button
        title="Entrar"
        w="full"
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </VStack>
  );
}
