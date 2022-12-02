import {COLORS, FONTSIZE} from '../assets/constant/colors'
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'

import {EMULSIONS} from '../data/emulsions'
import EmulsionsItem from '../components/EmulsionsItem'
import React from 'react'

const CategoryEmulsionsScreen = ({navigation, route}) => {
    
    const emulsions = EMULSIONS.filter(emul => emul.category === route.params.categoryID)
    
    const handleSelectedCategory = (item) =>{
        navigation.navigate('Details',{ 
            productID: item.id,
            name: item.name,
        })
    }

    const renderEmulsionsItem = ({ item }) => (
        <EmulsionsItem item={item} onSelected={handleSelectedCategory}/>
        );
        
    const image = {uri: "https://raw.githubusercontent.com/jorjonico/App-MartinezA/main/src/assets/img/logo-og.png"};

    return (
        <View style={styles.cardContainer}>
            <ImageBackground style={styles.image} source={image} resizeMode='cover'>
                <FlatList 
                        data={emulsions}
                        keyExtractor={(item) => item.id}
                        renderItem={renderEmulsionsItem}
                        />
            </ImageBackground>
        </View>    
    )
}

export default CategoryEmulsionsScreen

const styles = StyleSheet.create({
    cardContainer:{
        flex: 1,
        backgroundColor: COLORS.back,
    },
    container:{
        flex: 1,
        backgroundColor: COLORS.back,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color: COLORS.primary,
        fontSize:FONTSIZE.h1,
    },
})