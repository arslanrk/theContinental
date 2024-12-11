import Image from "next/image";
import logo from "../../public/assets/logofinal.png";

export default function TextLogo() {
  return (
    <>
      <Image src={logo} width={65} height={55} alt="logo"></Image>
    </>
  );
}
