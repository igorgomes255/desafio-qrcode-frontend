import { Container } from "./styles";
import QRCode from "react-qr-code";
import { useQRCodeContext } from "../../contexts/qrCodeContext";
import { Card, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";

const QrCode = () => {
  const { link, dataAPI } = useQRCodeContext();

  let { user } = useParams();

  user = link;

  console.log(dataAPI);

  return (
    <Container>
      {dataAPI ? (
        <Card className="qr-code">
          <CardBody>
            <h4>{link}</h4>
            <h5>Scan Me</h5>
            <QRCode value={`http://127.0.0.1:5173/user/${user}`} />
          </CardBody>
        </Card>
      ) : (
        <></>
      )}
    </Container>
  );
};

export { QrCode };
