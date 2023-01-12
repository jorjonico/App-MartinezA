import {COLORS, FONTSIZE} from '../assets/constant/colors'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { addItem } from '../store/actions/cart.action'

const EmulsionsDetailsScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const emulsion = useSelector((state) => state.emulsions.selected);
    
    const handleAddItemCart = () => {
        dispatch(addItem(emulsion))
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                    <Image source={{uri: emulsion.img}} style={styles.image} />
                    <Text style={styles.title}>{emulsion.name}</Text>
                    <Text style={styles.description}>{emulsion.description}</Text>
                    <Text style={styles.price}>Precio: ${emulsion.price}</Text>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.boton} onPress={handleAddItemCart}>
                        <Text style={styles.text}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.boton} onPress={() => navigation.popToTop()}>
                        <Text style={styles.text}>Volver a Categorías</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default EmulsionsDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor:COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
        flex: 0.9,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color:COLORS.secondary,
        fontSize:FONTSIZE.h1,
    },
    description: {
        fontSize:FONTSIZE.h5
    },
    price: {
        fontFamily: 'DancingBold',
        fontSize:FONTSIZE.h3
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        padding: 10,
    },
    image:{
        width: 220, 
        height: 250,
    },
    boton: {
        backgroundColor: COLORS.secondary,
        marginTop: 5,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'RobotoRegular',
        fontSize: FONTSIZE.h5,
        textAlign:'center',
        color:COLORS.white,
    }
})