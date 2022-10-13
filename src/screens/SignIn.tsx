import React, { useState } from "react";
import { Alert } from "react-native";

import { Box, Image, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Icon, useTheme } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  function handleSignIn() {
    const i = "admin"
    const s = '12345'
    if (!email || !password) {
      setIsLoading(false);
      return Alert.alert("Entrar", "Informe e-mail e senha")
    }

    if(email == i && password == s){
           return navigation.navigate("home");
 
    }
      return Alert.alert("Insira o email e senha");

    // return (
    //   Alert.alert("Solicitação", "Solicitação registrada com sucesso"),
    //   navigation.goBack()
    // )

  }
  return (
    <Center w="100%">
      <Box safeArea p="2" py="2" w="90%" mt="20%" maxW="290">
        <VStack alignItems="center">
          {/* <Image
            mt="12"
            source={require('../../assets/estacio.png')}
            style={{ width: 80, height: 80 }}
          /> */}
          <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="high" size="md">
            Estacio-Help
          </Heading>
        </VStack>
        <VStack alignItems="center">
          <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="high" size="md">
            Acesse sua conta!
          </Heading>
        </VStack>

        <VStack space={1} mt="4">
          <FormControl>
            <FormControl.Label></FormControl.Label>
            <Input type="" onChangeText={setEmail} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} placeholder="Email" />
          </FormControl>
          <FormControl>
            <FormControl.Label></FormControl.Label>
            <Input type="password" onChangeText={setPassword} InputLeftElement={<Icon as={<MaterialIcons name="key-variant" />} size={5} ml="2" color="muted.400" />} placeholder="Senha" />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "primary.800"
            }} alignSelf="flex-end" mt="1">
              Esqueceu a senha?
            </Link>
          </FormControl>
          <Button onPress={handleSignIn} mt="2" color="primary.400">
            Entrar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              Crie sua conta.{" "}
            </Text>
            <Link _text={{
              color: "primary.900",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
              Nova conta
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}