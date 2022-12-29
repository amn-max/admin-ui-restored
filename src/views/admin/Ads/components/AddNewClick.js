import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdAdd } from "react-icons/md";

const AddNewClick = (props) => {
  const { ...rest } = props;
  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "white");
  return (
    <Box
      {...rest}
      align="center"
      justify="center"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      bg={bg}
      borderRadius="16px"
      w="100%"
      h="max-content"
      p={"60px"}
      cursor="pointer"
      borderColor={borderColor}
    >
      <Flex direction={"column"} justify="center" align={"center"}>
        <Icon as={AiOutlineFileAdd} w="60px" h="60px" color={brandColor} />
        <Text fontSize="xl" fontWeight="700" color={brandColor}>
          Click here to add new advertisement
        </Text>
      </Flex>
    </Box>
  );
};

export default AddNewClick;
