import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useSelector} from "react-redux";

const ShowScreen = (props: any) => {
    const post = useSelector((state: any) => state.blogs.blogs.filter((item: any) => item.id === props.route.params.id)[0]);

    return (<View>
        <Text style={styles.title}>
            {post.title}
        </Text>
        <Text style={styles.text}>
            {post.text}
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20
    },
    text: {
        fontSize: 16,
        paddingHorizontal: 20,
    }
})

export default ShowScreen;