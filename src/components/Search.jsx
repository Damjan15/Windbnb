import { AiOutlineSearch } from "react-icons/ai"

const Search = () => {
  return (
    <div className="flex items-center justify-between p-4 border border-slate-300 shadow-md rounded-xl w-full cursor-pointer md:w-80">
      <div>
        <span className="text-sm text-dark font-mulish">Helsinki, Finland</span>
      </div>
      <div className="border-x-2 border-slate-300 px-6 md:px-3">
        <span className="text-sm text-[#BDBDBD]">Add guests</span>
      </div>
      <div>
        <AiOutlineSearch className="text-3xl text-primary" />
      </div>
    </div>
  )
}

export default Search