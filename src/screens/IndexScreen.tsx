import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Feather} from '@expo/vector-icons';
import {remove} from '../slices/blogSlice';
import {IBlogs, IBlog} from "../slices/blogSlice";

const IndexScreen = ({ navigation }: any) => {
    const {blogs} = useSelector((state: IBlogs) => state);
    const dispatch = useDispatch();

    return (<View>
        <FlatList
            keyExtractor={(post: IBlog) => post.id + ''}
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
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
    }
})

export default IndexScreen;