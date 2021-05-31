import React, { useEffect, useState } from 'react'
import {
	View, Text,
    Image, TextInput,
    ImageBackground
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons'

import { getApi, postApi } from '../../services/api'
import { showAlert } from '../../utils'

import styles from './styles'
import logoImg from '../../assets/logo.png'
import backgroundImg from '../../assets/home-background.png'
import { RectButton } from 'react-native-gesture-handler'


interface Uf {
	id: number
	sigla: string
}

interface City {
	id: number
	nome: string
}


function Home() {

    const navigation = useNavigation()

    const [ufList, setUfList] = useState<Uf[]>([])
    const [currentUf, setCurrentUf] = useState<string>('')
    const [cityList, setCityList] = useState<City[]>([])
    const [currentCity, setCurrentCity] = useState<string>('')

    function navigateToCollectPlaces() {
        navigation.navigate(
            'CollectPlaces',
            {
                uf: currentUf,
                city: currentCity,
            }
        )
    }

    async function loadUfList() {
        const urlUfApi = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
        const response = await getApi(urlUfApi, '', false)
		setUfList(response)
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

    async function handleCityChange(city: string){
        setCurrentCity(city)
    }


  	return (
        <ImageBackground
            style={ styles.container }
            source={ backgroundImg }
            imageStyle={{ width: 274, height: 368 }}
            resizeMode="contain"
        >
            <View style={ styles.main }>
                <Image source={ logoImg }/>

                <Text style={ styles.title }>
                    Seu marketplace de coleta de resíduos.
                </Text>

                <Text style={ styles.description }>
                    Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
                </Text>

            </View>

            <View style={ styles.footer }>
                <Text style={ styles.buttonLabel }>Selecione o estado</Text>
                <View style={ [styles.input, styles.select] }>
                    <Picker
                        selectedValue={ currentUf }
                        style={ styles.picker }
                        onValueChange={ (itemValue: string) => handleUfChange(itemValue) }
                    >
                        { ufList.map(uf => (
                            <Picker.Item key={ uf.sigla } label={ uf.sigla } value={ uf.sigla } />
                        ))}
                    </Picker>
                </View>

                <Text style={ styles.buttonLabel }>Selecione a cidade</Text>
                <View style={ [styles.input, styles.select] }>
                    <Picker
                        selectedValue={ currentCity }
                        style={ styles.picker }
                        onValueChange={ (itemValue: string) => handleCityChange(itemValue) }
                    >
                        { cityList.map(city => (
                            <Picker.Item key={ city.id } label={ city.nome } value={ city.nome } />
                        ))}
                    </Picker>
                </View>


                <RectButton
                    style={ styles.button }
                    onPress={ navigateToCollectPlaces }
                >
                    <View style={ styles.buttonIcon }>
                        <Feather name="arrow-right" size={ 22 } color="#FFF"/>
                    </View>

                    <Text style={ styles.buttonText }>Entrar</Text>
                </RectButton>
            </View>


        </ImageBackground>
  	)
}

export default Home
