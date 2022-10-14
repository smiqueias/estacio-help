import { Box, Center, Heading, HStack, IconButton, Text } from "native-base";
import React, { useState } from "react";
import { VStack } from "native-base";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
export function Home() {
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );

  const navigation = useNavigation();

  function navigateToRegisterScreen() {
    navigation.navigate("register");
  }
  function navigateToDetailsScreen() {
    navigation.navigate("details");
  }
  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <IconButton onPress={() => {}} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Solicitações</Heading>

          <Text color="gray.200">2</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            title="em andamento"
            type="open"
            onPress={() => {}}
            isActive={true}
          />
          <Filter
            title="finalizados"
            type="closed"
            onPress={() => {}}
            isActive={false}
          />
        </HStack>
        <HStack flex={1}>
          <Text color={"gray.300"} fontSize="lg">
            Você ainda não tem chamados criados
          </Text>
        </HStack>
        <Button
          mb={8}
          title="Nova solicitação"
          onPress={navigateToRegisterScreen}
        />
      </VStack>
    </VStack>
  );
}
