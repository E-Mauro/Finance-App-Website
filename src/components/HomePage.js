import React, { Component } from 'react';
// import './components/homePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="p-3 mb-2 bg-success text-white">
                    <div>
                        <h1>Super cartera virtual</h1>
                        <img src="https://lh3.googleusercontent.com/LBIyqZbsxXWWQWjsWD5moPJhQQ5L0OKUFNNEbNfUAyJR8vBhPTNll4m2Z2-Lu6reuU4=s180-rw"/>

                        <h3>¿A donde fue tu dinero?</h3>
                        <p>Comienza a organizar tus finanzas y descubrelo</p>
                        
                    </div>
                    <div>
                        <h3>Facil de usar</h3>
                        <p>Registra tus nuevos gastos    en menos de 10 segundos</p>
                    </div>
                    <div>
                        <button class="btn btn-info">Descargar para Android</button>
                        <button class="btn btn-info">Descargar para IOS</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;