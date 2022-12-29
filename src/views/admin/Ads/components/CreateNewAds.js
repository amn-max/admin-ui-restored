import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";
import AddNewClick from "./AddNewClick";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const CreateNewAds = (props) => {
  const { ...rest } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const modelColor = useColorModeValue("#ffffff", "navy.800");
  const iconColor = useColorModeValue("secondaryGray.500", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card {...rest}>
      <Text
        color={textColor}
        fontSize="22px"
        fontWeight="700"
        lineHeight="100%"
        mb="20px"
      >
        Create New Ad
      </Text>
      <AddNewClick onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent bg={modelColor}>
          <ModalHeader>Add Advertisement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={3} direction="column">
              <Input placeholder="Campaign Name" textColor={textColor} />
              <Input placeholder="Owner" textColor={textColor} />
              <Input placeholder="Goals" textColor={textColor} />
              <Input placeholder="Budget" textColor={textColor} />
              <Input
                placeholder="Date Created"
                type={"datetime-local"}
                textColor={textColor}
              />
              <Textarea placeholder="Description" textColor={textColor} />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>CREATE</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default CreateNewAds;
