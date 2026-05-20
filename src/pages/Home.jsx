import Banner from "../componenets/Banner"
import banner1 from "../img/Banner-01.jpg"
import banner2 from "../img/banner.jpg"
import banner3 from "../img/vacina-cachorro.jpg"

export default function Home(){
    return(
        <>
        <Banner foto1={banner1} 
        descricao1="foto1"
        foto2={banner2} 
        descricao2="foto2"
        foto3={banner3} 
        descricao3="foto3"
        />
        </>
    )
}