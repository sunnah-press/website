import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layout(props: LayoutsProps) {
  const { children } = props;
  return (
    <div className="flex flex-col h-screen">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
