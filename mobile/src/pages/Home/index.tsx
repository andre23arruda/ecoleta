import React, { useState } from 'react'
import {
	View, Text, Image,
	TouchableOpacity, TextInput, ImageBackground
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons'

import { postApi } from '../../services/api'
import { showAlert } from '../../utils'

import styles from './styles'
import logoImg from '../../assets/logo.png'
import backgroundImg from '../../assets/home-background.png'
import { RectButton } from 'react-native-gesture-handler'

function Home() {

    const navigation = useNavigation()

    function navigateToCollectPlaces() {
        navigation.navigate('CollectPlaces')
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
