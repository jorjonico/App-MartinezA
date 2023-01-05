import {COLORS, FONTSIZE} from '../assets/constant/colors'
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {filteredEmulsions, selectEmulsions} from "../store/actions/emulsions.action"

import {EMULSIONS} from '../data/emulsions'
import EmulsionsItem from '../components/EmulsionsItem'

const CategoryEmulsionsScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories.selected)
    const categoryEmulsions = useSelector((state) => state.emulsions.filteredEmulsions)
    
    

    useEffect(() => {
        dispatch(filteredEmulsions(category.id));
    }, [])
    
    
    /* const emulsions = EMULSIONS.filter(emul => emul.category === route.params.categoryID) */
    
    const handleSelectedCategory = (item) =>{
        dispatch(selectEmulsions(item.id))
        
        navigation.navigate('Details',{ 
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
                        data={categoryEmulsions}
                        keyExtractor={(item) => item.id}
                        renderItem={renderEmulsionsItem}
                        />
            </ImageBackground>
        </View>    
    )
}

export default connect()(CategoryEmulsionsScreen);

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
    image: {
        flex: 1,
        justifyContent: "center",
    },
})