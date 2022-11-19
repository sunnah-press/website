import { ReactNode } from "react";

export default function Main(props) {
  return <main className={props.margin}>{props.container}</main>;
}
