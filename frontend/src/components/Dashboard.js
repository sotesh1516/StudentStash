import Product from "./Product";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Dashboard() {
    return (
        <>
        <Navbar/>
{/* a div to display products */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>

</div>
<Footer/>
        
        </>
    )
}