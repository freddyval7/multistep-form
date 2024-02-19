export default function SidebarMobile(props: { step: string, className: string}) {
    return (
      <div className={`${props.className} sidebar-mobile flex items-center gap-4 justify-center pt-8 pb-16`}>
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
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`${
              props.step === "2"
                ? "bg-light-blue text-marine-blue"
                : "text-white"
            } border rounded-full px-3 py-1 border-white`}
          >
            2
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`${
              props.step === "3"
                ? "bg-light-blue text-marine-blue"
                : "text-white"
            } border rounded-full px-3 py-1 border-white`}
          >
            3
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`${
              props.step === "4"
                ? "bg-light-blue text-marine-blue"
                : "text-white"
            } border rounded-full px-3 py-1 border-white`}
          >
            4
          </div>
        </div>
      </div>
    );
  }
  