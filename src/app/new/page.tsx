import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";

async function createTodo(data : FormData) {
  "use server"

  const title = data.get("title")?.valueOf();

  if(typeof title !== 'string' || title.length === 0 ){
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({data:{title:title, completed:false}});

  redirect("/");

}

export default function page() {
  return (
    <>
    <Header />

    <form action={createTodo} className="flex flex-col gap-3">
        <input type="text" name="title"
        className="px-3 py-2 bg-transparent border rounded outline-none border-slate-300" />

        <div className="flex items-center justify-end gap-2">
          <Link href=".." className="px-3 py-2 border rounded border-slate-200 hover:bg-slate-500 outerline-none"> Cancel</Link>

          <button type="submit" className="px-3 py-2 border rounded border-slate-200 hover:bg-slate-500 outerline-none"> Create</button>
        </div>
    </form>
    </>
  )
}
