import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {edit, IBlog, IBlogs} from "../slices/blogSlice";

const EditScreen = (props: any) => {
    const [state, setState] = useState({title:'', text: ''});
    const dispatch = useDispatch();

    const post = useSelector((state: IBlogs) => state.blogs.filter((item: IBlog) => item.id === props.route.params.id)[0]);

    useEffect(() => {
        setState({...post, title: post.title, text: post.text });
    }, [])

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
            disabled={state.title.length < 3 || state.text.length < 3}
            title='Add Post'
            onPress={() => {
                dispatch(edit({id: post.id, text: state.text, title: state.title}));
                props.navigation.navigate('Index');
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

export default EditScreen;