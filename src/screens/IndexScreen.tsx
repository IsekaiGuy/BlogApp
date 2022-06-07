import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {useSelector} from "react-redux";

const IndexScreen = () => {
    const state = useSelector(state => state);
    console.log(state);

    return (<View>
        <Text>
            Index
        </Text>
        <Button
        title='addBlog'
        // onPress={() => }
        />
    </View>)
}

export default IndexScreen;