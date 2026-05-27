import './Descricao.css'

export default function Descricao(props) {
    return (
        <>
            <div class="container my-5">
                <div class="row">

                    <div class="col-lg-8">
                        <h3>Relação com o cliente</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, excepturi tempora maiores
                            distinctio nobis quisquam possimus reprehenderit architecto tenetur exercitationem illo magnam
                            libero quos repudiandae. Numquam officia rerum consequuntur ab? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nemo id, dicta labore delectus impedit maiores cumque sunt culpa
                            ex itaque ut quo sequi facere et veniam, quam molestias corporis at.</p>
                    </div>

                    <div class="col-lg-4">
                        <img className='rottweiller' src={props.foto1} alt="Rottweiller" />
                    </div>

                </div>
            </div>

        </>
    )
}