import {COLORS, FONTSIZE} from '../assets/constant/colors';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import OrderItem from '../components/OrderItem'
import { getOrders } from '../store/actions/order.action'

const OrdersScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.orders.list)

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const handleDalateItem = () => {
        console.log('Eliminar');
    };
    
    const renderItem = ({item}) => (
        <OrderItem  item={item} onDelete={handleDalateItem}/>
    );
    
    const handlePhoto = () => {
        console.log("photo")
    }
    
    return (
        <View style={styles.container}>
            <View>
                <FlatList 
                    data={orders}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Foto')}>
                    <Text style={styles.text}>Tomar foto</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default connect()(OrdersScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
    },
    boton: {
        backgroundColor: COLORS.secondary,
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'RobotoRegular',
        fontSize: FONTSIZE.h4,
        textAlign:'center',
        color:COLORS.white,
    }
});