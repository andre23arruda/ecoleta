import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'


import './Home.css'

function Home() {

  	return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={ logoImg } alt="Ecoleta"/>
                </header>

                <main>
                    <h1>
                        Seu marketplace de coleta de resíduos.
                    </h1>

                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <Link to='/'>
                        <span>
                            <FiLogIn />
                        </span>

                        <strong>
                            Cadastre um ponto de coleta
                        </strong>

                    </Link>
                </main>

            </div>

        </div>
  	)
}

export default Home
