import { StyleSheet, Text, View } from 'react-native';

import {COLORS} from '../assets/constant/colors';
import CartNavigator from './CartNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrderNavigator from './OrderNavigator';
import ShopNavigator from './ShopNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BootomTabs = createBottomTabNavigator();

export default BootomTabNavigator = () => {
    return (
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
                            <Ionicons name='ios-home-outline' size={25} color={COLORS.white}/>
                            <Text style={styles.textIcon}>Tienda</Text>
                        </View>
                    )
                }}/>
                <BootomTabs.Screen name='CartTab' component={CartNavigator}
                                options={{
                    tabBarIcon: ({focus}) =>(
                        <View style={styles.item}>
                            <Ionicons name='ios-cart-outline' size={25} color={COLORS.white}/>
                            <Text style={styles.textIcon}>Carrito</Text>
                        </View>
                    )
                }}/>
                <BootomTabs.Screen
                    name='OrdersTab'
                    component={OrderNavigator}
                    options={{
                    tabBarIcon: ({focus}) =>(
                        <View style={styles.item}>
                            <Ionicons name='list' size={25} color={COLORS.white}/>
                            <Text style={styles.textIcon}>Ordenes</Text>
                        </View>
                    )
                }}/>
            </BootomTabs.Navigator>
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
        backgroundColor: COLORS.primary,
    },
    item:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIcon:{
        color: COLORS.white,
    }
    
})