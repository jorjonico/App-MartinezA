import AuthScreen from "../screens/AuthScreen";
import {COLORS} from '../assets/constant/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return(
            <Stack.Navigator 
                initialRouteName="Login" 
                screenOptions={{
                    headerStyle:{backgroundColor: COLORS.primary},
                    headerTintColor: COLORS.white,
                    headerTitleStyle:{
                        fontFamily: 'RobotoRegular',
                    }
            }}>
                <Stack.Screen 
                name='Login'
                component={AuthScreen}
                />
            </Stack.Navigator>
    );
};