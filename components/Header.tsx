import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface HeaderProps {
  username: string;
}

export const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <View className="mb-6" style={styles.content}>
      <View style={styles.navbar}>
        <Text className="text-2xl font-bold mb-2" style={styles.title}>Heart 2 Heart</Text>
        <Image source={require('../assets/images/Menu.png')} />
      </View>
      <View style={styles.separator}/>
      <View style={styles.subContainer}>
        <Text className="text-lg text-gray-600" style={styles.subTitle}>Welcome back,</Text>
        <Text style={styles.subTitle}>{username}.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
    // alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',           
    width: '100%',
    // paddingHorizontal: 16,           
  },
  subTitle: {
    fontSize: 40
  },
  subContainer: {
    paddingVertical: 20
  }
});
