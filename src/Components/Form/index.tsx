import { InputGroup, InputGroupText, Input, Button } from "reactstrap";
import { useQRCodeContext } from "../../contexts/qrCodeContext";

import { Container } from "./styles";

const Form = () => {
  const { link, handleQRCode } = useQRCodeContext();
  return (
    <Container>
      <InputGroup size="lg">
        <InputGroupText
          style={{
            display: "flex",
            justifyContent: "center",
            width: 150,
          }}
        >
          Nome
        </InputGroupText>
        <Input
          placeholder="Digite seu nome"
          value={link}
          onChange={(e) => handleQRCode(e)}
        />
      </InputGroup>
      <br />

      <InputGroup size="lg">
        <InputGroupText
          style={{
            display: "flex",
            justifyContent: "center",
            width: 150,
          }}
        >
          Linkedin URL
        </InputGroupText>
        <Input placeholder="Digite seu linkedin" />
      </InputGroup>
      <br />

      <InputGroup size="lg">
        <InputGroupText
          style={{
            display: "flex",
            justifyContent: "center",
            width: 150,
          }}
        >
          GitHub URL
        </InputGroupText>
        <Input placeholder="Digite seu github" />
      </InputGroup>
      <br />

      <Button outline size="lg">
        Generate Image
      </Button>
    </Container>
  );
};

export { Form };
