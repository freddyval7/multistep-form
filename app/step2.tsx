"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormAtom } from "./step1";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

import arcade from "@/public/icon-arcade.svg";
import advanced from "@/public/icon-advanced.svg";
import pro from "@/public/icon-pro.svg";
import { useState } from "react";

type Step2 = {
  plan: "arcade" | "advanced" | "pro";
  typePlan: "monthly" | "yearly";
};

export default function Step2() {
  const [formAtom, setFormAtom] = useAtom(FormAtom);
  const [plan, setPlan] = useState<"arcade" | "advanced" | "pro">(
    formAtom.plan
  );
  const [typePlan, setTypePlan] = useState<"monthly" | "yearly">(
    formAtom.typePlan
  );
  const router = useRouter();

  const form = useForm<Step2>();

  const onSubmit = form.handleSubmit(() => {
    const params = new URLSearchParams();
    params.append("step", "3");

    router.push("?" + params.toString());

    setFormAtom({
      ...formAtom,
      plan: plan,
      typePlan: typePlan,
      pricePlan: plan === "arcade" ? 9 : plan === "advanced" ? 12 : 15,
      total: typePlan === "monthly" ? (plan === "arcade" ? 9 : plan === "advanced" ? 12 : 15) : (plan === "arcade" ? 90 : plan === "advanced" ? 120 : 150),
    });
  });

  return (
    <div className="w-1/2 mx-auto my-auto border-2 rounded-md shadow-lg p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-marine-blue">
          Select your Plan
        </h1>
        <p className="text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={onSubmit}>
          <FormField
            control={form.control}
            name="plan"
            defaultValue={formAtom.plan}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      onClick={() => {
                        form.setValue("plan", "arcade");
                        setPlan("arcade");
                      }}
                      className={`space-y-8 border shadow-lg p-4 cursor-pointer rounded-lg ${
                        plan === "arcade" && "border-purplish-blue"
                      }`}
                    >
                      <Image
                        src={arcade}
                        alt="Arcade"
                        className="w-8 h-8"
                        width={24}
                        height={24}
                      />
                      <div>
                        <p className="text-marine-blue font-bold">Arcade</p>
                        <p
                          className={`text-cool-gray text-sm ${
                            typePlan === "monthly" ? "block" : "hidden"
                          }`}
                        >
                          $9/mo
                        </p>
                        <p
                          className={`text-cool-gray text-sm ${
                            typePlan === "monthly" ? "hidden" : "block"
                          }`}
                        >
                          $90/mo
                        </p>
                        <p
                          className={`text-marine-blue text-sm ${
                            typePlan === "monthly" ? "hidden" : "block"
                          }`}
                        >
                          2 months free
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        form.setValue("plan", "advanced");
                        setPlan("advanced");
                      }}
                      className={`space-y-8 border shadow-lg p-4 cursor-pointer rounded-lg ${
                        plan === "advanced" && "border-purplish-blue"
                      }`}
                    >
                      <Image
                        src={advanced}
                        alt="Advanced"
                        className="w-8 h-8"
                        width={24}
                        height={24}
                      />
                      <div>
                        <p className="text-marine-blue font-bold">Advanced</p>
                        <p
                          className={`text-cool-gray text-sm ${
                            typePlan === "monthly" ? "block" : "hidden"
                          }`}
                        >
                          $12/mo
                        </p>
                        <p
                          className={`text-cool-gray text-sm ${
                            typePlan === "monthly" ? "hidden" : "block"
                          }`}
                        >
                          $120/mo
                        </p>
                        <p
                          className={`text-marine-blue text-sm ${
                            typePlan === "monthly" ? "hidden" : "block"
                          }`}
                        >
                          2 months free
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        form.setValue("plan", "pro");
                        setPlan("pro");
                      }}
                      className={`space-y-8 border shadow-lg p-4 cursor-pointer rounded-lg ${
                        plan === "pro" && "border-purplish-blue"
                      }`}
                    >
                      <Image
                        src={pro}
                        alt="Pro"
                        className="w-8 h-8"
                        width={24}
                        height={24}
                      />
                      <div>
                        <p className="text-marine-blue font-bold">Pro</p>
                        <p
                          className={`text-cool-gray text-sm ${
                            typePlan === "monthly" ? "block" : "hidden"
                          }`}
                        >
                          $15/mo
                        </p>
                        <p
                          className={`text-cool-gray text-sm ${
                            typePlan === "monthly" ? "hidden" : "block"
                          }`}
                        >
                          $150/mo
                        </p>
                        <p
                          className={`text-marine-blue text-sm ${
                            typePlan === "monthly" ? "hidden" : "block"
                          }`}
                        >
                          2 months free
                        </p>
                      </div>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typePlan"
            defaultValue={formAtom.typePlan}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <FormItem className="flex items-center gap-4 justify-center">
                <span
                  className={`text-marine-blue text-xs ${
                    field.value === "monthly" && "font-bold"
                  }`}
                >
                  Monthly
                </span>
                <FormControl>
                  <Switch
                    onCheckedChange={(checked) => {
                      setTypePlan(checked ? "yearly" : "monthly");
                      form.setValue("typePlan", checked ? "yearly" : "monthly");
                    }}
                  />
                </FormControl>
                <span
                  className={`text-marine-blue text-xs ${
                    field.value === "yearly" && "font-bold"
                  }`}
                >
                  Yearly
                </span>
              </FormItem>
            )}
          />
          <div className="flex justify-between mt-8">
            <Button
              size={"lg"}
              variant={"ghost"}
              type="button"
              className="text-purplish-blue"
              onClick={() => {
                const params = new URLSearchParams();
                params.append("step", "1");

                router.push("?" + params.toString());
              }}
            >
              Go Back
            </Button>
            <Button
              size={"lg"}
              onClick={onSubmit}
              className="bg-marine-blue text-white"
            >
              Next Step
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
