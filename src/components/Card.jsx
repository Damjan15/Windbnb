import { AiFillStar } from "react-icons/ai"

const Card = () => {
  return (
    <div className="w-full md:w-1/4 cursor-pointer">
        <div className="h-60 md:h-[270px]">
            <img src="https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80" className="w-full h-full rounded-xl" alt="" />
        </div>

        <div className="pt-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                <span className="block border boder-darkGray text-darkGray font-bold py-1 px-3 rounded-full text-xs md:text-sm">Super Host</span>
                <span className="block text-xs text-gray md:text-sm">Entire apartment .2 beds</span>
                </div>
                <span className="flex items-center text-xs text-[#4F4F4F] md:text-sm">
                    <AiFillStar className="text-primary" />
                    4.40
                </span>
            </div>
            <h3 className="pt-3 text-dark font-semibold text-base md:text-lg">Stylist apartment in center of the city</h3>
        </div>
    </div>
  )
}

export default Card