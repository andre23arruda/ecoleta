import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import CollectPlaces from "./pages/CollectPlaces";
import Detail from "./pages/Detail";


const AppStack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={ Home } />
                <AppStack.Screen name="CollectPlaces" component={ CollectPlaces } />
                <AppStack.Screen name="Detail" component={ Detail } />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes