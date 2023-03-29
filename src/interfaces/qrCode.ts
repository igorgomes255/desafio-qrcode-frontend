import { ReactNode } from "react";

export interface IProvider {
  children: ReactNode;
}

export interface IData {
  name: string;
  linkedin: string;
  github: string;
}

export interface IDataAPI {
  id: number;
  name: string;
  linkedin: string;
  github: string;
}

export interface IDataRetorned {
  data: IDataAPI;
}
