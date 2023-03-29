import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import { useQRCodeContext } from "../../contexts/qrCodeContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IData } from "../../interfaces/qrCode";
import { schemaData } from "../../validators/schemas";

import { Container } from "./styles";

const Form = () => {
  const { link, handleQRCode, handleCaptureClick, saveData } =
    useQRCodeContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schemaData),
  });

  return (
    <Container onSubmit={handleSubmit(saveData)}>
      <Stack spacing={6}>
        <InputGroup size="lg">
          <InputLeftAddon
            style={{
              display: "flex",
              justifyContent: "center",
              width: 120,
            }}
            children="Name"
          />
          <Input
            placeholder="Digite seu nome"
            {...register("name")}
            value={link}
            onChange={(e) => handleQRCode(e)}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputLeftAddon
            style={{
              display: "flex",
              justifyContent: "center",
              width: 120,
            }}
            children="Linkedin URL"
          />
          <Input {...register("linkedin")} placeholder="Digite seu linkedin" />
        </InputGroup>

        <InputGroup size="lg">
          <InputLeftAddon
            style={{
              display: "flex",
              justifyContent: "center",
              width: 120,
            }}
            children="GitHub URL"
          />
          <Input {...register("github")} placeholder="Digite seu github" />
        </InputGroup>

        <Button
          colorScheme="teal"
          variant="outline"
          size="lg"
          type="submit"
          onClick={handleCaptureClick}
        >
          Generate Image
        </Button>
      </Stack>
    </Container>
  );
};

export { Form };
