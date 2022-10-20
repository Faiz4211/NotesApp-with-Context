import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, useColorScheme, isDarkMode } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from '../styles/color';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content)

    return (
        <View>
            <Text style={styles.lable}>Enter Title :</Text>

            <TextInput style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)} />

            <Text style={styles.lable}>Enter Content :</Text>

            <TextInput style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)} />

            <View style={styles.btn}>
                <Button
                    title='SAVE BLOG POST'
                    onPress={() => onSubmit(title, content)}
                />
            </View>

        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}


const styles = StyleSheet.create({
    input: {
        fontSize: hp(2),
        borderWidth: 1,
        borderColor: color.black,
        margin: 5,
        padding: 5,
        color: isDarkMode ? color.black : color.black,

    },
    lable: {
        fontSize: hp(2.5),
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        color: isDarkMode ? color.black : color.black,
    },
    btn: {
        marginTop: hp(2),
        width: wp('50%'),
        alignSelf: 'center'
    },
})
export default BlogPostForm;