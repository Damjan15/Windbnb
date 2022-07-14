import logo from "../assets/logo.svg"
import Search from "./Search"

const Navbar = () => {
  return (
    <div className="flex flex-col space-y-8 px-5 py-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:p-6">
        <img src={logo} className="w-36" alt="Windbnb Logo" />

        <Search />
    </div>
  )
}

export default Navbar