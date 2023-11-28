import Link from "next/link";


export default function Header() {
  return (
    <header className="flex items-center justify-between mb-4">
      <Link href="/" className="text-2xl">Todos</Link>
      <Link href="/new" className="px-3 py-2 border rounded border-slate-200 hover:bg-slate-500 outerline-none">New</Link>
    </header>
  )
}
