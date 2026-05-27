import './Linha4img.css'

export default function Linha4img(props) {
    return (
        <>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='card'>
                            <img src={props.foto1} alt="Banho e Tosa" class="img-fluid"/>
                            <p>Banho e Tosa</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='card'>
                            <img src={props.foto2} alt="Pet Care" class="img-fluid"/>
                            <p>Pet Care</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='card'>
                            <img src={props.foto3} alt="Adestramento" class="img-fluid"/>
                            <p>Adestramento</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div className='card'>
                            <img src={props.foto4} alt="Hotel Resort" class="img-fluid" />
                            <p>Hotel Resort</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}