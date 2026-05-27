import Banner from "../componenets/Banner"
import banner1 from "../img/Banner-01.jpg"
import banner2 from "../img/banner.jpg"
import banner3 from "../img/vacina-cachorro.jpg"
import Linha4img from "../componenets/Linha4img"
import cachorro1 from "../img/banho-tosa.jpg"
import cachorro2 from "../img/vacina-cachorro.jpg"
import cachorro3 from "../img/adestramento.jpg"
import cachorro4 from "../img/hotel-para-cachorros.jpg"
import Subtitulo from "../componenets/Subtitulo"
import Descricao from "../componenets/Descricao"
import rottweiller from "../img/rottweiller.jpg"

export default function Home() {
    return (
        <>
            <Banner foto1={banner1}
                descricao1="foto1"
                foto2={banner2}
                descricao2="foto2"
                foto3={banner3}
                descricao3="foto3"
            />

            <Linha4img foto1={cachorro1}
                descricao1="BanhoTosa"
                foto2={cachorro2}
                descricao2="Vacina"
                foto3={cachorro3}
                descricao3="Adestramento"
                foto4={cachorro4}
                descricao4="Hotel"
            />

            <Subtitulo />

            <Descricao 
            foto1={rottweiller} />

        </>
    )
}