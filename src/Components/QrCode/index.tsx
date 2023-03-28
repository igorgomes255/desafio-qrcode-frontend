import { Container } from "./styles";
import QRCode from "react-qr-code";
import { useQRCodeContext } from "../../contexts/qrCodeContext";

const QrCode = () => {
  const { link, handleCaptureClick } = useQRCodeContext();

  return (
    <Container>
      <div className="qr-code">
        <p>John</p>
        <p>Scan Me</p>
        <QRCode value={link} />
      </div>

      <button type="button" onClick={handleCaptureClick}>
        Download
      </button>
    </Container>
  );
};

export { QrCode };
