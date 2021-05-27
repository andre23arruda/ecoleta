import React, { useState } from 'react'
import {
	View, Text, Image,
	TouchableOpacity, TextInput, ImageBackground
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons'

import { showAlert } from '../../utils'

import styles from './styles'
import logoImg from '../../assets/logo.png'
import backgroundImg from '../../assets/home-background.png'
import { RectButton } from 'react-native-gesture-handler'


function Detail() {

    const navigation = useNavigation()

    function navigateToHome() {
        navigation.goBack()
    }

  	return (
        <ImageBackground
            style={ styles.container }
            source={ backgroundImg }
            imageStyle={{ width: 274, height: 368 }}
            resizeMode="contain"
        >

            <View style={ styles.header }>
                <TouchableOpacity
                    style={ styles.headerButton }
                    onPress={ navigateToHome }
                >
                    <Feather name="chevron-left" size={ 28 } color="#34CB79"/>
                </TouchableOpacity>

                <View style={ styles.headerTitle } >
                    <Text style={ styles.headerTitleStrong }>
                        😃 Bem vindo.
                    </Text>

                    <Text style={ styles.headerTitleText }>
                        Encontre no mapa um ponto de coleta.
                    </Text>
                </View>
            </View>


        </ImageBackground>
  	)
}

export default Detail
