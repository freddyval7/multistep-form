export default function Sidebar(props: { step: string, className?: string}) {
  return (
    <div className={`${props.className} sidebar w-1/5 h-screen flex flex-col gap-8 space-y-8 py-6 px-8`}>
      <div className="flex items-center gap-4">
        <div
          className={`${
            props.step === "1"
              ? "bg-light-blue text-marine-blue"
              : "text-white"
          } border rounded-full px-3 py-1 border-white`}
        >
          1
        </div>
        <div className="flex flex-col">
          <span className="pastel-blue">STEP 1</span>
          <span className="text-white font-bold">YOUR INFO</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`${
            props.step === "1"
              ? "bg-light-blue text-marine-blue"
              : "text-white"
          } border rounded-full px-3 py-1 border-white`}
        >
          2
        </div>
        <div className="flex flex-col">
          <span className="pastel-blue">STEP 2</span>
          <span className="text-white font-bold">SELECT PLAN</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`${
            props.step === "1"
              ? "bg-light-blue text-marine-blue"
              : "text-white"
          } border rounded-full px-3 py-1 border-white`}
        >
          3
        </div>
        <div className="flex flex-col">
          <span className="pastel-blue">STEP 3</span>
          <span className="text-white font-bold">ADD-ONS</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`${
            props.step === "1"
              ? "bg-light-blue text-marine-blue"
              : "text-white"
          } border rounded-full px-3 py-1 border-white`}
        >
          4
        </div>
        <div className="flex flex-col">
          <span className="pastel-blue">STEP 4</span>
          <span className="text-white font-bold">SUMMARY</span>
        </div>
      </div>
    </div>
  );
}
