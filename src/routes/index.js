import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator, createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import SplashScreen from '../modules/splash/view';
import HomeScreen from '../modules/home/view';

const HomeStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title:'sadf'
        }
    }
},
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerForceInset: true,
            headerStyle: {
                backgroundColor: color.themeBackgroundColor,
            },
            headerTintColor: color.white,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    })

const MainNavigator = createSwitchNavigator({
    SplashScreen: { screen: SplashScreen },
    HomeStack: { screen: HomeStack }
}, {
    initialRouteName: 'SplashScreen'
})

const App = createAppContainer(MainNavigator);


export default App;