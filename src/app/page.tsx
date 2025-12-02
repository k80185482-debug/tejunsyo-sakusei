import Link from "next/link";
import ProcedureList from "./components/component/ProcedureList";

export default function Home() {
  return (
   <div className="md:flex">
     <section className="w-full md:w-3/4">
       <ProcedureList />
     </section>
     <aside className="bg-blue-200 w-full md:w-1/4 flex items-center flex-col">
       <Link href="/procedure/new">新規作成</Link>
       <Link href="/procedure/new">編集</Link>
     </aside>
   </div>
  );
}