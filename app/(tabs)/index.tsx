import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});