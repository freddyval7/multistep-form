"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  pricePlan: number;
  typePlan: "monthly" | "yearly";
  online?: boolean;
  largeStorage?: boolean;
  customProfile?: boolean;
  total: number;
};

type Step1 = {
  name: string;
  email: string;
  phone: string;
};

export const FormAtom = atom<FormValues>({
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  pricePlan: 9,
  typePlan: "monthly",
  online: false,
  largeStorage: false,
  customProfile: false,
  total: 9,
});

export default function Step1() {
  const [formAtom, setFormAtom] = useAtom(FormAtom);
  const router = useRouter();

  const form = useForm<Step1>();

  const onSubmit = form.handleSubmit((data) => {
    const params = new URLSearchParams();
    params.append("step", "2");

    router.push("?"+params.toString());

    setFormAtom({ ...formAtom, ...data });
  });

  return (
    <div className="md:w-1/2 h-screen mx-auto my-auto border-2 rounded-md shadow-lg p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-marine-blue">Personal Info</h1>
        <p className="text-cool-gray">
          Please provide your name, email, and phone number.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={onSubmit}>
          <FormField
            control={form.control}
            defaultValue={formAtom.name}
            name="name"
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-marine-blue">Name</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    className="text-marine-blue focus:border-purplish-blue"
                    placeholder="Introduce your name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            defaultValue={formAtom.email}
            name="email"
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-marine-blue">Email Adress</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    className="text-marine-blue focus:border-purplish-blue"
                    placeholder="Introduce your email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            defaultValue={formAtom.phone}
            name="phone"
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-marine-blue">Phone Number</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <PatternFormat
                    {...field}
                    className="text-marine-blue focus:border-purplish-blue"
                    placeholder="e.g. +1 (234) 567 890"
                    format="+1 (###) ### ####"
                    customInput={Input}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end mt-8">
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
