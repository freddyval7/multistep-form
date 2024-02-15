import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";

export default function Form(props: { step: string, type: string}) {
    if (props.step === "1") {
        return <Step1 />
      }
      if (props.step === "2") {
        return <Step2 />
      }
      if (props.step === "3") {
        return <Step3 />
      }
      if (props.step === "4") {
        return <Step4 />
      }
      if (props.step === "5") {
        return <Step5 />
      }
      return <Step1 />
}
