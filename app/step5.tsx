import Image from "next/image";

import check from "../public/icon-thank-you.svg";

export default function Step5() {
  return (
    <div className="text-center flex flex-col items-center md:w-1/2 mx-auto my-auto p-8 space-y-8">
      <Image className="w-16 h-16" width={24} height={24} src={check} alt="check" />
      <h1 className="text-2xl font-bold text-marine-blue">Thank you!</h1>
      <p className="text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
