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
      <div className="container">
        <nav>
          <div className="flex gap-3 justify-start items-center py-5">
            <div className="shrink-0">
              <h1 className="text-primary text-xl font-black text-center">Guideline</h1>
              <p className="text-sm text-white">group of companies</p>
            </div>
            <button className="hidden lg:block px-[20px] py-[10px] bg-sliver text-white rounded-md shrink-0">
              Menu
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
