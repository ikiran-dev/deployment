import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between align-middle items-center">
      <h1 className="text-3xl  mx-6">Welcome to next js</h1>
      <Link className="mr-5 text-slate-400 hover:text-white" href="/new">
        New
      </Link>
    </div>
  );
}
