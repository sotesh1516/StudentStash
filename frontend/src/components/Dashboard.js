import Product from "./Product";
import Footer from "./Footer";
import Navbar from "./Navbar";
import itemData from "../items.json"

export default function Dashboard() {
    return (
        <>
        <Navbar/>
{/* a div to display products */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-5">
        {itemData.map((item, index) => (
            <Product 
            key={index}
            image={item.image}
            label={item.label}
            price={item.price}
            condition={item.condition}
            description={item.description}
            />
        ))}

</div>
<Footer/>
        
        </>
    )
}