import Image from "next/image";
import loader from "../assets/loader.gif";

const LoadingPage = () => {
  return <div className="flex justify-center items-center h-screen w-screen">
    <Image src={loader} height={20} width={20} alt="Loading..." />
  </div>
};

export default LoadingPage;
