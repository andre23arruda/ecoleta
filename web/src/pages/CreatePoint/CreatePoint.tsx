import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import { Map , TileLayer, Marker } from 'react-leaflet'

import logoImg from '../../assets/logo.svg'
import { getApi } from '../../services/api'
import { title } from '../../utils'

import './CreatePoint.css'

interface CollectItem {
	id: number
	image: string
	name: string
}

interface Uf {
	id: number
	sigla: string
}

interface City {
	id: number
	nome: string
}

function CreatePoint() {

    useEffect(() => title(document, 'Criar ponto de coleta'), [])

    const [collectItems, setCollectItems] = useState<CollectItem[]>([])
    const [ufList, setUfList] = useState<Uf[]>([])
    const [currentUf, setCurrentUf] = useState<string>('MS')
    const [cityList, setCityList] = useState<City[]>([])

    async function loadItems() {
        const response = await getApi(`items/`)
		setCollectItems(response)
	}
    useEffect(() => {
        loadItems()
    }, [])

    async function loadUfList() {
        const urlUfApi = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
        const response = await getApi(urlUfApi, '', false)
		setUfList(response)
        console.log(response)
	}
    useEffect(() => {
        loadUfList()
    }, [])


    async function handleUfChange(uf: string){
        setCurrentUf(uf)
        const urlCityApi = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ uf }/municipios`
        const response = await getApi(urlCityApi, '', false)
        setCityList(response)
    }
    useEffect(() => {
        handleUfChange(currentUf)
    }, [])


  	return (
        <div id="page-create-point">
            <div className="content">
                <header>
                    <img src={ logoImg } alt="Ecoleta"/>

                    <Link to='/'>
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </header>

                <form>
                    <h1>
                        Cadastro do <br /> ponto de coleta
                    </h1>

                    <fieldset>
                        <legend>
                            <h2>Dados</h2>
                        </legend>

                        <div className="field">
                            <label htmlFor="name">Nome da entidade</label>
                            <input type="text" name="name" id="name" />
                        </div>

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className="field">
                                <label htmlFor="name">Whatsapp</label>
                                <input type="text" name="whatsapp" id="whatsapp" />
                            </div>
                        </div>
                    </fieldset>


                    <fieldset>
                        <legend>
                            <h2>Dados</h2>
                            <span>Selecione o endereço no mapa</span>
                        </legend>

                        <Map center={ [-19.0049858,-57.605919] }
                            style={ {width: '100%', height: 400} }
                            zoom={ 16 }
                            onclick={ () => {} }
                        >
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker position={ [-19.0049858,-57.605919] } />
                        </Map>

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="uf">Estado (UF)</label>
                                <select value={ currentUf } name="uf" id="uf" onChange={ event => handleUfChange(event.target.value) }>
                                    { ufList.map(uf => (
                                        <option key={ uf.id } value={ uf.sigla }>{ uf.sigla }</option>
                                    ))}
                                </select>
                            </div>

                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <select name="city" id="city">
                                    { cityList.map(city => (
                                        <option key={ city.id } value={ city.nome }>{ city.nome }</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Itens</h2>
                            <span>Selecione um ou mais itens abaixo</span>
                        </legend>

                        <ul className="items-grid">
                            { collectItems.map(colletctItem => (
                                <li key={ colletctItem.id }>
                                    <img src={ colletctItem.image } alt="" />
                                    <span>{ colletctItem.name }</span>
                                </li>
                            )) }
                        </ul>

                    </fieldset>

                    <button>Cadastrar ponto de coleta</button>


                </form>

            </div>

        </div>
  	)
}

export default CreatePoint
