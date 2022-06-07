import IndexScreen from "./src/screens/IndexScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from "./src/store/configureStore";
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Index">
                    <Stack.Screen
                        name="Index"
                        component={IndexScreen}
                        options={{ title: 'BlogList' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;