import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-green-500 font-mono p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dsa">DSA</Link>
        <Link href="/se">SE</Link>
        <Link href="/whoami">Whoami</Link>
      </div>
      <div className="space-x-4">
        <a
          href="https://github.com/iamabdulmozid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/iamabdulmozid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-300"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
