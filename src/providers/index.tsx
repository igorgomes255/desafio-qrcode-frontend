import QRCodeProvider from "../contexts/qrCodeContext";
import { IProvider } from "../interfaces/qrCode";

const Providers = ({ children }: IProvider) => {
  return <QRCodeProvider>{children}</QRCodeProvider>;
};

export { Providers };
