'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  let router = useRouter()

  const onClickGoToHomePage = () => {
    router.push('/Pages/HomePage');
  }

  return (
    <div className="w-screen h-screen">

      <div onClick={onClickGoToHomePage} className=" rounded-md bg-red-400 w-40 h-5">
        go to home screen
      </div>

    </div>
  );
}
