import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, isDarkMode, useColorScheme } from 'react-native';
import { Context } from "../context/BlogContext";
import Icon from "react-native-vector-icons/EvilIcons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from "../styles/color";

const ShowScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    // console.log(navigation.getParam('id'))
    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <View>
                <Text style={styles.content}>{blogPost.content}</Text>
            </View>
        </View>

    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {
                id: navigation.getParam('id')
            })}>
                <Icon style={styles.Icon}
                    name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};
const styles = StyleSheet.create({
    title: {
        fontSize: hp(3),
        color: isDarkMode ? color.black : color.black,
        marginTop: 15,
        marginLeft: wp(5)
    },
    content: {
        fontSize: hp(3),
        color: isDarkMode ? color.black : color.black,
        marginTop: 15,
        marginLeft: wp(5)
    },
    Icon: {
        color: isDarkMode ? color.black : color.black,
    }
})

export default ShowScreen;