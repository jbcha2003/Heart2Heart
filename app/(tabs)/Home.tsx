import { StyleSheet, Image, Platform } from 'react-native';
import { View, Text, SafeAreaView } from 'react-native';
import {Header }from '../../components/Header';
import {Homepage} from '../../components/Homepage';


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Homepage />
    </SafeAreaView>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
    paddingHorizontal: 16,           
  }
});
