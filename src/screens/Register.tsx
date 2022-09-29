import { Box, VStack } from "native-base";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Register() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");
  async function handleNewOrderRegister() {
    if (!patrimony || !description) {
      return Alert.alert("Cadastrar", "Informe o patrimônio e a descrição.");
    }
    return (
      console.log(patrimony),
      Alert.alert("Solicitação", "Solicitação registrada com sucesso"),
      navigation.goBack()
    );
  }
  return (
    <VStack flex={1} p={6} bg="gray.600">
    
      <Header title="Solicitação" />
      <Input
        placeholder="Numéro do Património"
        mt={2}
        onChangeText={setPatrimony}
      />
      <Input
        placeholder="Descrição do problema"
        flex={1}
        mt={6}
        multiline
        textAlignVertical="top"
        onChangeText={setDescription}
        minH={24}
      />
      <Box p={4}>
        <Button
          title="Cadastrar"
          mt={5}
          onPress={handleNewOrderRegister}
          isLoading={isLoading}
        />
      </Box>
    </VStack>
  );
}
