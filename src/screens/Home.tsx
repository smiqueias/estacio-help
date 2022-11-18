import {
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { VStack } from "native-base";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";
import { Order, OrderProps } from "../components/Order";
import { Loading } from "../components/Loading";
import { CircleWavyCheck, ClockAfternoon } from "phosphor-react-native";

export function Home() {
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );

  const navigation = useNavigation();

  const [requestsStatus, setRequestsStatus] = useState("A");
  const [responseData, setResponseData] = useState<OrderProps[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  function navigateToRegisterScreen() {
    navigation.navigate("register");
  }
  function navigateToDetailsScreen() {
    navigation.navigate("details");
  }

  useEffect(() => {
    getRequests("A");
  }, []);

  async function getRequests(status: string) {
    setIsLoading(true);

    return axios({
      method: "get",
      url: `https://appestacioapi.herokuapp.com/api/called/findAllByStatus?status=${status}`,
    })
      .then((response: AxiosResponse) => {
        setResponseData(response.data);
        setRequestsStatus(String(response.data[0].calledStatus));
      })
      .catch((error) => {
        return Alert.alert("Ops!", "Não foi possível recuperar seus pedidos");
      })
      .finally(() => {
        setIsLoading(false);
      });
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

          <Text color="gray.200">{responseData.length}</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            title="em andamento"
            type="open"
            onPress={() => {
              setStatusSelected("closed");
              getRequests("A");
            }}
            isActive={requestsStatus === "A"}
          />
          <Filter
            title="finalizados"
            type="closed"
            onPress={() => {
              setStatusSelected("closed");
              getRequests("F");
            }}
            isActive={requestsStatus === "F"}
          />
        </HStack>
        <HStack flex={1}>
          {isLoading ? (
            <Loading />
          ) : (
            <FlatList
              data={responseData}
              renderItem={({ item }) => (
                <Box
                  bg="gray.600"
                  shadow={2}
                  rounded="lg"
                  w="full"
                  h={160}
                  paddingX={4}
                  paddingY={2}
                  marginBottom={4}
                >
                  <VStack>
                    <Text color="gray.100">
                      {item.calledCreatedDescription.substring(0, 200)}
                    </Text>
                    <Text color="gray.100">{item.calledDtCreated}</Text>
                  </VStack>
                </Box>
              )}
              contentContainerStyle={{ paddingBottom: 80 }}
            ></FlatList>
          )}
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
