import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full bg-[#121212] backdrop-blur-lg z-10">
      <nav className="container mx-auto px-6 py-6">
        <ul className="flex justify-center space-x-10">
          <li><Link href="#home" className="text-white hover:text-yellow-300 transition-colors text-xl font-normal">Home</Link></li>
          <li><Link href="#about" className="text-white hover:text-yellow-300 transition-colors text-xl font-normal">About</Link></li>
          <li><Link href="#projects" className="text-white hover:text-yellow-300 transition-colors text-xl font-normal">Projects</Link></li>
          <li><Link href="#contact" className="text-white hover:text-yellow-300 transition-colors text-xl font-normal">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

