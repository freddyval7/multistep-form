import Sidebar from "@/components/sidebar";
import Form from "./form";
import SidebarMobile from "@/components/sidebar-mobile";

type SearchParams = {
  step: string;
  type: string;
}

export default function Page(props: {searchParams: SearchParams}) {
  return (
    <div className="flex md:flex-row flex-col">
      <SidebarMobile className="md:hidden block" step={props.searchParams.step} />
      <Sidebar className="md:block hidden" step={props.searchParams.step} />
      <Form step={props.searchParams.step} type={props.searchParams.type} />
    </div>
  )
}
