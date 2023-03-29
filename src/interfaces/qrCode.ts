import { ReactNode } from "react";

export interface IProvider {
  children: ReactNode;
}

export interface IData {
  name: string;
  linkedin: string;
  github: string;
}
