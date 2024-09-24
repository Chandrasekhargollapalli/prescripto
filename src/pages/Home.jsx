import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SpecalityMenu from "../components/specialitymenu"
import TopDoctors from "../components/TopDoctors"

const Home = ()=>{
    return(
        <div>
         <Header/>
         <SpecalityMenu/>
         <TopDoctors/>
         <Banner/>
     
        </div>
    )
}

export default Home