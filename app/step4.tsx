"use client";

import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FormAtom } from "./step1";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type Step4 = {
  online?: boolean;
  largeStorage?: boolean;
  customProfile?: boolean;
};

export default function Step4() {
  const [formAtom, setFormAtom] = useAtom(FormAtom);

  const router = useRouter();

  return (
    <div className="md:w-1/2 mx-auto my-auto border-2 rounded-md shadow-lg p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-marine-blue">Finishing up</h1>
        <p className="text-cool-gray">
          Double check if everything is correct before confirming.
        </p>
      </div>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-marine-blue capitalize">
              {formAtom.plan} {`(${formAtom.typePlan})`}
            </p>
            <Link href="?step=2">
              <span className="text-cool-gray hover:border-b hover:border-b-cool-gray cursor-pointer">
                Change plan
              </span>
            </Link>
          </div>
          <p className="text-marine-blue font-bold">
            $
            {formAtom.typePlan === "yearly"
              ? formAtom.pricePlan * 10 + "/yr"
              : formAtom.pricePlan + "/mo"}
          </p>
        </div>
        <div className="space-y-4">
          <div
            className={`flex items-center justify-between ${
              formAtom.online ? "block" : "hidden"
            }`}
          >
            <p className="text-cool-gray">Online service</p>
            <p>{formAtom.typePlan === "monthly" ? "+$1/mo" : "+$10/yr"}</p>
          </div>
          <div
            className={`flex items-center justify-between ${
              formAtom.largeStorage ? "block" : "hidden"
            }`}
          >
            <p className="text-cool-gray">Larger Storage</p>
            <p>{formAtom.typePlan === "monthly" ? "+$2/mo" : "+$20/yr"}</p>
          </div>
          <div
            className={`flex items-center justify-between ${
              formAtom.customProfile ? "block" : "hidden"
            }`}
          >
            <p className="text-cool-gray">Custom Profile</p>
            <p>{formAtom.typePlan === "monthly" ? "+$2/mo" : "+$20/yr"}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-marine-blue">
            Total{" "}
            {formAtom.typePlan === "monthly" ? "(per month)" : "(per year)"}
          </p>
          <p className="text-lg text-purplish-blue font-bold">
            +${formAtom.total}/{formAtom.typePlan === "monthly" ? "mo" : "yr"}
          </p>
        </div>
        <div className="flex justify-between mt-8">
          <Button
            size={"lg"}
            variant={"ghost"}
            type="button"
            className="text-purplish-blue"
            onClick={() => {
              const params = new URLSearchParams();
              params.append("step", "3");

              router.push("?" + params.toString());
            }}
          >
            Go Back
          </Button>
          <Button
            size={"lg"}
            onClick={() => {
              const params = new URLSearchParams();
              params.append("step", "5");

              router.push("?" + params.toString());
            }}
            className="bg-purplish-blue text-white"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
