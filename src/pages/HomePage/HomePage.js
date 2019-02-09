import React, { Component } from 'react';
import logo from "./logo.webp"
import "./HomePage.css"

class HomePage extends Component {
    render() {
        return (
            <div class="flex-container">
                <div>
                    <div>
                        <h1>Super cartera virtual</h1>
                        <div className="App_Icon">
                            <img src="https://lh3.googleusercontent.com/LBIyqZbsxXWWQWjsWD5moPJhQQ5L0OKUFNNEbNfUAyJR8vBhPTNll4m2Z2-Lu6reuU4=s180-rw" alt="App Icon" />
                        </div>
                        <br />
                        <h3>¿A donde fue tu dinero?</h3>
                        <p>Comienza a organizar tus finanzas y descubrelo</p>
                    </div>
                    <br />
                    <div>
                        <h3>Facil de usar !</h3>
                        <p>Registra tus nuevos gastos en menos de 10 segundos</p>
                    </div>
                    <br />
                    <div>
                        <button>Descargar para Android</button>
                        <button>Descargar para IOS</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;