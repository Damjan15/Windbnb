import Card from "./Card"

const Container = () => {
  return (
    <div className="p-3 md:p-8">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-dark text-lg font-bold md:text-2xl">Stays in Finland</h2>

            <span className="text-sm text-[#4F4F4F] font-medium">12+ stays</span>
        </div>

        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:flex-wrap md:gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    </div>
  )
}

export default Container