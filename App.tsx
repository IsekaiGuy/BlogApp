import IndexScreen from "./src/screens/IndexScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from "./src/store/configureStore";
import { Provider } from 'react-redux';
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import {Text, TouchableOpacity} from "react-native";
import React from "react";
import EditScreen from "./src/screens/EditScreen";
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
    return (<Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Index">
                    <Stack.Screen
                        name="Index"
                        component={IndexScreen}
                        options={({ navigation }) => ({
                            headerTitle: 'BlogList',
                            headerRight: () => (
                                <TouchableOpacity  onPress={() => navigation.navigate('Create')}>
                                    <Text>
                                        Add Post +
                                    </Text>
                                </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="Show"
                        component={ShowScreen}
                        options={({ navigation, route }) => ({
                            headerTitle: 'Show Post',
                            headerRight: () => (
                                // @ts-ignore
                                <TouchableOpacity  onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
                                    <AntDesign name="edit" size={24} color="black" />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="Create"
                        component={CreateScreen}
                        options={{ title: 'Add Post' }}
                    />
                    <Stack.Screen
                        name="Edit"
                        component={EditScreen}
                        options={{ title: 'Edit Post' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}