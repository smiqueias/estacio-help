import {
  Box,
  HStack,
  Text,
  useTheme,
  VStack,
  Circle,
  Pressable,
  IPressableProps,
} from "native-base";
import {
  ClockAfternoon,
  Hourglass,
  CircleWavyCheck,
} from "phosphor-react-native";
import React from "react";

export type OrderProps = {
  calledId: number;
  calledCreatedDescription: string;
  calledSoluction: string;
  calledDtCreated: string;
  calledDtFinally: string;
  calledStatus: string;
  userEntity: number;
};

type Props = IPressableProps & {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={colors.secondary[700]} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Patrimômio {data.calledCreatedDescription}
          </Text>

          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {data.calledDtCreated}
            </Text>
          </HStack>
        </VStack>

        <CircleWavyCheck size={24} color={colors.secondary[700]} />
      </HStack>
    </Pressable>
  );
}
