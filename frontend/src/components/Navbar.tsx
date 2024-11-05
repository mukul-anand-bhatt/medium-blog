
const Navbar = () => {
  return (
    <header className="flex flex-row h-[100px] items-center border-b-2 border-black">
      <a href="/" className="ml-[220px] text-3xl font-bold">Medium</a>
      <nav>
        <ul className="flex flex-row ml-[840px] space-x-12">
          <li className="hover:bg-black hover:text-white p-3 rounded-full">
            <a href="/signin">Sign In</a>
          </li>
          <li className="hover:bg-black hover:text-white p-3 rounded-full">
            <a href="/signup">Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;