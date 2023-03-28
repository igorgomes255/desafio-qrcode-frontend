import { createContext, useContext, useState } from "react";
import { IProvider } from "../interfaces/qrCode";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";

interface IProviderQRCode {
  link: string;
  setLink: (value: string) => void;
  handleQRCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCaptureClick: () => void;
}

export const QRCodeContext = createContext({} as IProviderQRCode);

const QRCodeProvider = ({ children }: IProvider) => {
  const [link, setLink] = useState<string>("");

  const handleQRCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleCaptureClick = async () => {
    const qrCode = document.querySelector<HTMLElement>(".qr-code");
    if (!qrCode) return;

    const canvas = await html2canvas(qrCode);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "qr-code.png", "image/png");
  };

  return (
    <QRCodeContext.Provider
      value={{ link, setLink, handleQRCode, handleCaptureClick }}
    >
      {children}
    </QRCodeContext.Provider>
  );
};

// AVISO

export function useQRCodeContext() {
  const context = useContext(QRCodeContext);

  return context;
}

export default QRCodeProvider;
