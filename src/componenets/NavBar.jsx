import { Link } from 'react-router-dom'
import logo from '../img/pet-shop-logo.png'
import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img className='logo' src={ logo } alt='logo petshop' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/banho-e-tosa">Banho e Tosa</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/adestramento">Adestramento</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}