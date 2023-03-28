import { Form } from "../../Components/Form";
import { QrCode } from "../../Components/QrCode";
import { Main } from "./styles";

const GeneratePage = () => {
  return (
    <Main>
      <h2>QR Code Image Generator</h2>
      <br />
      <Form />
      <QrCode />
    </Main>
  );
};

export { GeneratePage };
