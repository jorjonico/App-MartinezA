import AuthNavigation from './AuthNavigation'
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default () => {
    const userId = useSelector((state) => state.auth.userId); 
    return(
        <NavigationContainer>
            {userId ? <BottomTabNavigator /> : <AuthNavigation />}
        </NavigationContainer>
    )
}