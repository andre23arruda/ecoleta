import React, { useState } from 'react'
import {
	View, Text, Image,
	TouchableOpacity,
    TextInput, ImageBackground,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons'

import { postApi } from '../../services/api'
import { showAlert } from '../../utils'

import styles from './styles'
import logoImg from '../../assets/logo.png'
import backgroundImg from '../../assets/home-background.png'
import { RectButton } from 'react-native-gesture-handler'

import MapView, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'

function CollectPlaces() {

    const navigation = useNavigation()

    function navigateToHome() {
        navigation.goBack()
    }

    function handleNavigateToDetail() {
        navigation.navigate('Detail')
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

            <View style={ styles.mapContainer }>
                <MapView
                    style={ styles.map }
                    initialRegion={{
                        latitude: -19.0078964,
                        longitude: -57.6074291,
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014,
                    }}
                >
                    <Marker
                        onPress={ handleNavigateToDetail }
                        style={ styles.mapMarker}
                        coordinate={{
                            latitude: -19.0078964,
                            longitude: -57.6074291,
                        }}
                    >
                        <View style={ styles.mapMarkerContainer }>
                            <Image
                                style={ styles.mapMarkerImage }
                                source={{ uri: "https://res.cloudinary.com/utils-cloudinary/image/upload/v1/nlw1_media/uploads/places/2021/05/14/ex1_gsq3jf" }}
                            />
                            <View style={ styles.mapMarkerTitleContainer }>
                                <Text style={ styles. mapMarkerTitle }>Mercado</Text>
                            </View>

                            <View style={ styles.mapMarkerArrow }></View>

                        </View>

                    </Marker>
                </MapView>
            </View>

            <View style={ styles.itemsContainer }>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    >
                    <TouchableOpacity style={ styles.item } onPress={ () => {} }>
                        <SvgUri width={ 42 } height={ 42 } uri="https://res.cloudinary.com/utils-cloudinary/image/upload/v1/nlw1_media/uploads/items/2021/05/16/images/baterias_yvyjsx" />
                        <Text style={ styles.itemTitle }>Lâmpadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.item } onPress={ () => {} }>
                        <SvgUri width={ 42 } height={ 42 } uri="https://res.cloudinary.com/utils-cloudinary/image/upload/v1/nlw1_media/uploads/items/2021/05/16/images/baterias_yvyjsx" />
                        <Text style={ styles.itemTitle }>Lâmpadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.item } onPress={ () => {} }>
                        <SvgUri width={ 42 } height={ 42 } uri="https://res.cloudinary.com/utils-cloudinary/image/upload/v1/nlw1_media/uploads/items/2021/05/16/images/baterias_yvyjsx" />
                        <Text style={ styles.itemTitle }>Lâmpadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.item } onPress={ () => {} }>
                        <SvgUri width={ 42 } height={ 42 } uri="https://res.cloudinary.com/utils-cloudinary/image/upload/v1/nlw1_media/uploads/items/2021/05/16/images/baterias_yvyjsx" />
                        <Text style={ styles.itemTitle }>Lâmpadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.item } onPress={ () => {} }>
                        <SvgUri width={ 42 } height={ 42 } uri="https://res.cloudinary.com/utils-cloudinary/image/upload/v1/nlw1_media/uploads/items/2021/05/16/images/baterias_yvyjsx" />
                        <Text style={ styles.itemTitle }>Lâmpadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.item } onPress={ () => {} }>
                        <SvgUri width={ 42 } height={ 42 } uri="https://res.cloudinary.com/utils-cloudinary/image/upload/v1/nlw1_media/uploads/items/2021/05/16/images/baterias_yvyjsx" />
                        <Text style={ styles.itemTitle }>Lâmpadas</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>


        </ImageBackground>
  	)
}

export default CollectPlaces
