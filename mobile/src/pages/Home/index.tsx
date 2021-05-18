import React, { useState } from 'react'
import {
	View, Text, Image,
	TouchableOpacity, TextInput, ImageBackground
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { FiArrowRight } from 'react-icons/fi'

import { postApi } from '../../services/api'
import { showAlert } from '../../utils'

import styles from './styles'
import logoImg from '../../assets/logo.png'
import backgroundImg from '../../assets/home-background.png'

function Home() {

    const navigation = useNavigation()

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

                <TextInput
                    style={ styles.input }
                    placeholder="Selecione a cidade"
                    onChangeText={ () => {} }
                >
                </TextInput>

                <TextInput
                    style={ styles.input }
                    placeholder="Selecione o estado"
                    onChangeText={ () => {} }
                >
                </TextInput>

                <TouchableOpacity
                    style={ styles.button }
                    onPress={ () => {} }
                >
                    <Text style={ styles.buttonText }>Entrar</Text>
                </TouchableOpacity>

            </View>

        </ImageBackground>
  	)
}

export default Home
