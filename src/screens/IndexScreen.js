import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, useColorScheme, isDarkMode } from 'react-native';
import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from '../styles/color';

const IndexScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Icon style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Icon style={styles.icon} name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    paddingHorizontal: wp(3),
    borderTopWidth: 1,
    borderColor: color.grey
  },
  title: {
    fontSize: hp(3),
    color: isDarkMode ? color.black : color.black,
  },
  icon: {
    fontSize: hp(3),
    color: isDarkMode ? color.black : color.black,
  },

});

export default IndexScreen;