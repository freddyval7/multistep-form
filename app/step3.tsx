"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormAtom } from "./step1";
import { Checkbox } from "@/components/ui/checkbox";

type Step3 = {
  online?: boolean;
  largeStorage?: boolean;
  customProfile?: boolean;
};

export default function Step3() {
  const [formAtom, setFormAtom] = useAtom(FormAtom);

  const router = useRouter();

  const form = useForm<Step3>();

  const onSubmit = form.handleSubmit((data) => {
    const params = new URLSearchParams();
    params.append("step", "4");

    router.push("?" + params.toString());

    const onlinePrice = data.online ? (formAtom.typePlan === "monthly" ? 1 : 10) : 0;
    const largeStoragePrice = data.largeStorage ? (formAtom.typePlan === "monthly" ? 2 : 20) : 0;
    const customProfilePrice = data.customProfile ? (formAtom.typePlan === "monthly" ? 2 : 20) : 0;

    const totalAddPlan = onlinePrice + largeStoragePrice + customProfilePrice;

    setFormAtom({ ...formAtom, ...data, total: formAtom.total + totalAddPlan});
  });

  return (
    <div className="md:w-1/2 mx-auto my-auto border-2 rounded-md shadow-lg p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-marine-blue">Pick add-ons</h1>
        <p className="text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={onSubmit}>
          <FormField
            defaultValue={formAtom.online}
            control={form.control}
            name="online"
            render={({ field }) => (
              <FormItem
                className={`flex items-center justify-between border shadow-lg p-4 rounded-md ${
                  field.value && "border-purplish-blue"
                }`}
              >
                <div className="flex items-center gap-8">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-marine-blue font-bold">
                      Online Service
                    </FormLabel>
                    <FormDescription className="text-cool-gray">
                      Access to multiplayer games
                    </FormDescription>
                  </div>
                </div>
                <div>
                  <p
                    className={`text-xs text-purplish-blue ${
                      formAtom.typePlan === "monthly" ? "block" : "hidden"
                    }`}
                  >
                    +$1/mo
                  </p>
                  <p
                    className={`text-xs text-purplish-blue ${
                      formAtom.typePlan === "monthly" ? "hidden" : "block"
                    }`}
                  >
                    +$10/yr
                  </p>
                </div>
              </FormItem>
            )}
          />
          <FormField
            defaultValue={formAtom.largeStorage}
            control={form.control}
            name="largeStorage"
            render={({ field }) => (
              <FormItem
                className={`flex items-center justify-between border shadow-lg p-4 rounded-md ${
                  field.value && "border-purplish-blue"
                }`}
              >
                <div className="flex items-center gap-8">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-marine-blue font-bold">
                      Larger Store
                    </FormLabel>
                    <FormDescription className="text-cool-gray">
                      Extra 1TB storage of cloud save
                    </FormDescription>
                  </div>
                </div>
                <div>
                  <p
                    className={`text-xs text-purplish-blue ${
                      formAtom.typePlan === "monthly" ? "block" : "hidden"
                    }`}
                  >
                    +$2/mo
                  </p>
                  <p
                    className={`text-xs text-purplish-blue ${
                      formAtom.typePlan === "monthly" ? "hidden" : "block"
                    }`}
                  >
                    +$20/yr
                  </p>
                </div>
              </FormItem>
            )}
          />
          <FormField
            defaultValue={formAtom.customProfile}
            control={form.control}
            name="customProfile"
            render={({ field }) => (
              <FormItem
                className={`flex items-center justify-between border shadow-lg p-4 rounded-md ${
                  field.value && "border-purplish-blue"
                }`}
              >
                <div className="flex items-center gap-8">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-marine-blue font-bold">
                      Customizable Profile
                    </FormLabel>
                    <FormDescription className="text-cool-gray">
                      Custom theme on your profile
                    </FormDescription>
                  </div>
                </div>
                <div>
                  <p
                    className={`text-xs text-purplish-blue ${
                      formAtom.typePlan === "monthly" ? "block" : "hidden"
                    }`}
                  >
                    +$2/mo
                  </p>
                  <p
                    className={`text-xs text-purplish-blue ${
                      formAtom.typePlan === "monthly" ? "hidden" : "block"
                    }`}
                  >
                    +$20/yr
                  </p>
                </div>
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
                params.append("step", "2");

                router.push("?" + params.toString());
              }}
            >
              Go Back
            </Button>
            <Button
              size={"lg"}
              type="submit"
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
