import { Container } from "./styles";
import QRCode from "react-qr-code";
import { useQRCodeContext } from "../../contexts/qrCodeContext";
import { Card, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";

const QrCode = () => {
  const { link, handleCaptureClick } = useQRCodeContext();

  let { user } = useParams();

  user = link;

  return (
    <Container>
      <Card className="qr-code">
        <CardBody>
          <h4>{link}</h4>
          <h5>Scan Me</h5>
          <QRCode value={`https://desafio-qrcode-phi.vercel.app/${user}`} />
        </CardBody>
      </Card>

      <button type="button" onClick={handleCaptureClick}>
        Download
      </button>
    </Container>
  );
};

export { QrCode };
