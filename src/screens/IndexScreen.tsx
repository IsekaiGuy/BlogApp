import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Feather} from '@expo/vector-icons';
import {remove} from '../slices/changeBlogPost';

const IndexScreen = ({ navigation }: any) => {
    const {blogs} = useSelector((state: any) => state.blogs);
    const dispatch = useDispatch();
    console.log(blogs);

    return (<View>
        <TouchableOpacity  onPress={() => navigation.navigate('Create')}>
            <Text style={styles.button}>
                Add Post +
            </Text>
        </TouchableOpacity>
        <FlatList
            keyExtractor={(post) => post.id}
            data={blogs}
            renderItem={({item}) => {
                return (<View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(remove(item.id))}>
                            <Feather
                                name='trash'
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>)
            }}
        />
    </View>)
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 24
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 10,
        marginVertical: 15
    },
    title: {
        fontSize: 18,
    },
    button: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: 'lightblue'
    }
})

export default IndexScreen;