import React, {useState} from "react";
import {View, TextInput, Text, StyleSheet, Button} from "react-native";
import {useDispatch} from "react-redux";
import {add} from "../slices/changeBlogPost";

const CreateScreen = ({navigation}:any) => {
    const [state, setState] = useState({title:'', text: ''});
    const dispatch = useDispatch();

    return (<View>
        <View style={styles.container}>
            <Text style={styles.title}>
                Title
            </Text>
            <TextInput
            value={state.title}
            onChangeText={title => setState({...state, title: title})}
            style={styles.input}
            />
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>
                Text
            </Text>
            <TextInput
            value={state.text}
            onChangeText={text => setState({...state, text: text})}
            style={styles.input}
            />
        </View>
        <Button
            title='Add Post'
            onPress={() => {
                dispatch(add({...state, id: Math.floor(Math.random() * 1000)}));
                navigation.navigate('Index');
            }}
        />
    </View>)
}

const styles = StyleSheet.create({
    title: {
      paddingBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5
    },
    container: {
        padding: 20
    }
})

export default CreateScreen;