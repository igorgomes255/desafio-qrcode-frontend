import { Container } from "./styles";
import QRCode from "react-qr-code";
import { useQRCodeContext } from "../../contexts/qrCodeContext";
import { Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";

const QrCode = () => {
  const { link, handleCaptureClick } = useQRCodeContext();

  return (
    <Container>
      <Card className="qr-code">
        <CardBody>
          <h4>{link}</h4>
          <h5>Scan Me</h5>
          <QRCode value={`https://desafio-qrcode-phi.vercel.app/${link}`} />
        </CardBody>
      </Card>

      <button type="button" onClick={handleCaptureClick}>
        Download
      </button>
    </Container>
  );
};

export { QrCode };
