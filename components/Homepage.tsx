import React from "react";
import { Text, View, ScrollView,  Image, TouchableOpacity, StyleSheet } from "react-native";
import { Header } from "./Header";
import { SessionList } from "./SessionList";

export const Homepage: React.FC = () => {
  const handleSessionPress = (sessionId: string) => {
    // Handle session selection
    console.log("Session selected:", sessionId);
  };

  const handleActionPress = (action: string) => {
    // Handle action button press
    console.log("Action pressed:", action);
  };

  const recentSessions = [
    {
      id: "1",
      date: "2 days ago",
      duration: "2h 25m",
      category: "Romantic",
    },
    {
      id: "2",
      date: "2/24",
      duration: "1h 03m",
      category: "Fun & Cheeky",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View style={styles.container}>
        <Header username="Ollie" />

        <View style={styles.subContainer}>
          <TouchableOpacity
                onPress={() => handleActionPress("new-session")}
                style={styles.actionCard}
          >
            <Image
              source={require('../assets/images/addIcon.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.title}>Start new session</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
            <TouchableOpacity
                  onPress={() => handleActionPress("new-session")}
                  style={styles.actionCard}
            >
                  <Image
                    source={require('../assets/images/Bookmark.png')}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <View>
                    <Text style={styles.title}>Favorite Questions</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleActionPress("new-session")}
              style={styles.actionCard}
            >
              <Image
                source={require('../assets/images/bookOpen.png')}
                style={styles.image}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.title}>Journal Archive</Text>
              </View>
            </TouchableOpacity>
        </View>

        <SessionList
          sessions={recentSessions}
          onSessionPress={handleSessionPress}
        />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding:20
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#302c2c',
    borderRadius: 8,
    padding: 30,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  image: {
    width: 20,
    height: 20,
    marginRight:5
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color:'white'
  },
  cardRow: {
    display:"flex",
    flexDirection:"row",
  },
  subContainer: {
    paddingTop: 20
  }
});
// export default Homepage;
