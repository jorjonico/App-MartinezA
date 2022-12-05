import {COLORS, FONTSIZE} from '../assets/constant/colors';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CART } from '../data/cart'
import CartItem from '../components/CartItem'
import React from 'react'

const CartScreen = () => {

    const items = CART
    const total = 120
    
    const handleConfirmCart = () => {
        console.log('Confirmar Carrito')
    };
    const handleDeleteItem = () => {
        console.log('Eliminar Item')
    };

    const renderItem = ({item}) => {
        <CartItem item={item} onDelete={handleDeleteItem}/>
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirm}>
                    <Text>Confirmar</Text>
                    <View style={styles.total}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
        backgroundColor: COLORS.gris,
        paddingBottom: 120,
    },
    list:{
        flex: 1,
    },
    footer:{
        padding: 12,
        borderTopColor: COLORS.primary,
        borderTopWidth: 1,
    },
    confirm:{
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total:{
        flexDirection: 'row',
    },
    text:{
        fontSize: FONTSIZE.h5,
        padding: 8,
    }
})