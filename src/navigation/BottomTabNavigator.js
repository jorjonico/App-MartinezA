import { StyleSheet, Text, View } from 'react-native';

import {COLORS} from '../assets/constant/colors';
import CartNavigator from './CartNavigator';
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from './ShopNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BootomTabs = createBottomTabNavigator();

export default BootomTabNavigator = () => {
    return (
        <NavigationContainer>
            <BootomTabs.Navigator 
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false, 
                tabBarStyle: styles.tabBar
                }}>
                <BootomTabs.Screen name='ShopTab' component={ShopNavigator}
                options={{
                    tabBarIcon: ({focus}) =>(
                        <View style={styles.item}>
                            <Text>Tienda</Text>
                        </View>
                    )
                }}/>
                <BootomTabs.Screen name='CartTab' component={CartNavigator}
                                options={{
                    tabBarIcon: ({focus}) =>(
                        <View style={styles.item}>
                            <Text>Carrito</Text>
                        </View>
                    )
                }}/>
            </BootomTabs.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabBar:{
        shadowColor: COLORS.primary,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: 'absolute',
        bottom: 10, 
        left: 10,
        right: 10,
        borderRadius: 5,
        height: 70,
    },
    item:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})