import { type PageProps } from "fresh";
import Navbar from "@/islands/navbar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}
