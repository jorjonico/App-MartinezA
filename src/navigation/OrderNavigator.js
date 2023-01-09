import {COLORS, FONTSIZE} from "../assets/constant/colors";

import OrdersScreen from "../screens/OrdersScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default ShopNavigator = () =>{
    return (
            <Stack.Navigator initialRouteName="Orders" screenOptions={{
                headerStyle: {backgroundColor: COLORS.primary},
                headerTintColor: COLORS.white,
                headerTitleStyle: {fontSize: FONTSIZE.h4, fontFamily:'RobotoRegular',},
                headerTitleAlign:'center',
            }}>
                <Stack.Screen 
                    name="Orders"
                    component={OrdersScreen}
                    options={{
                    title: 'Ordenes'}}/>
                </Stack.Navigator>
    );
};