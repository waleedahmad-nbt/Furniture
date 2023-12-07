import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-400 text-white">
      <header className="border-b">
        <div className="container">
          <ul className="flex gap-3">
            <li>
              <Link href="#">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="#">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </header>
        Navbar
    </div>
  )
}

export default Navbar;
