import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 bg-white shadow-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Hitme's Blog
        </Link>
        <div className="space-x-4">
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  )
}