import Image from "next/image"
import {TbArrowNarrowRight} from "react-icons/tb"


export default function CatalogueSetction(){
    const items = [
        {
          id: "01",
          category: "BEDROOM SETUP", 
          title:"Cossy Bedroom Setup",
          image: "/image/badroom.jpg",
          description: "Family drowing room with a clean and comfortable design for our family",
        },
        {
          id: "02",
          category: "KITCHEN SETUP", 
          title:"Neat a Clean Kitchen",
          image: "/image/kitchen1.jpg",
          description: "Family drowing room with a clean and comfortable design for our family",
        },
        {
          id: "03",
          category: "DROWING SETUP", 
          title:"Family Drowing Room",
          image: "/image/drowing.jpg",
          description: "Family drowing room with a clean and comfortable design for our family",
        },
        {
          id: "04",
          category: "LIVING SETUP", 
          title:"Clean Family Room",
          image: "/image/living.jpg",
          description: "Family drowing room with a clean and comfortable design for our family",
        },
    ]
    return (
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
            {items.map(item=>(
                <div key={item.id} className="relative overflow-hidden group">
                   <div>
                       <Image 
                       src={item.image}
                       width={380}
                       height={100}
                       className="w-full"
                       />
                   </div>

                   <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
                       <div className="flex justify-between pb-4">
                          <p className="text-sm">{item.category}</p>
                          <span className="text-sm">{item.id}</span>
                       </div>
                       <a className="block text-xl font-semibold" href="">{item.title}</a>
                       <p className="py-4">{item.description}</p>
                       <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2"/> </a>
                   </div>

                   <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl
                   transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
                      <p className="tracking-wider -rotate-90">{item.category}</p>
                      <span>{item.id}</span>
                   </div>
                </div>
            ))}
        </div>
    )
}