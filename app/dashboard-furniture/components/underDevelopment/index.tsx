import Image from "next/image";

import underDevelopment from "@/app/assets/images/underDevelopment.webp";

const UnderDevelopment = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Image src={underDevelopment} alt="image" width={200} height={200} className="w-full h-auto" />
        <h1 className="text-[60px] text-gray-900 font-black">Under Development</h1>
        <p className="text-lg text-gray-900">We're making lots of improvements and will be back soon.</p>
      </div>
    </div>
  )
}

export default UnderDevelopment
