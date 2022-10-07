import * as React from "react";
import { Box, Image, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Icon } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
export function SignIn() {

  return (
    <Center w="100%">
      <Box safeArea p="2" py="2" w="90%" mt="20%" maxW="290">
      <VStack alignItems="center">
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
            <Input type="" InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} placeholder="Email" />
          </FormControl>
          <FormControl>
            <FormControl.Label></FormControl.Label>
            <Input type="password" InputLeftElement={<Icon as={<MaterialIcons name="key-variant" />} size={5} ml="2" color="muted.400" />} placeholder="Senha" />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "primary.800"
            }} alignSelf="flex-end" mt="1">
              Esqueceu a senha?
            </Link>
          </FormControl>
          <Button mt="2" color="primary.400">
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
