import { createContext, useContext, useState } from "react";
import { IData, IDataRetorned, IProvider } from "../interfaces/qrCode";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
import api from "../services/api";
import { AxiosError, AxiosResponse } from "axios";

interface IProviderQRCode {
  link: string;
  setLink: (value: string) => void;
  handleQRCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCaptureClick: () => void;
  saveData: (value: IData) => void;
  dataAPI: Partial<IDataRetorned>;
}

export const QRCodeContext = createContext({} as IProviderQRCode);

const QRCodeProvider = ({ children }: IProvider) => {
  const [link, setLink] = useState<string>("");
  const [dataAPI, setDataAPI] = useState({});

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

  const saveData = (data: IData) => {
    api
      .post("/api/data", data)
      .then((response: AxiosResponse) => {
        console.log(response);
        setDataAPI(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <QRCodeContext.Provider
      value={{
        link,
        setLink,
        handleQRCode,
        handleCaptureClick,
        saveData,
        dataAPI,
      }}
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
