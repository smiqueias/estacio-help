import { Box, Center, Text } from "native-base";
import React from "react";
import { VStack } from "native-base";
import { Button } from "../components/Button";
export function SignIn() {
  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <VStack space={4} alignItems="center" mt={48}>
        <Button
          width={300}
          title="Home"
          isLoading={false}
          onPress={() => {}}
          mt={5}
        />
        <Button
          width={300}
          title="Register"
          isLoading={false}
          onPress={() => {}}
          mt={5}
        />
        <Button
          width={300}
          title="Details"
          isLoading={false}
          onPress={() => {}}
          mt={5}
        />
      </VStack>
    </VStack>
  );
}
