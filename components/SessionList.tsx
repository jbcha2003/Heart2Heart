import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SessionItem } from "./SessionItem";

interface Session {
  id: string;
  date: string;
  duration: string;
  category: string;
}

interface SessionListProps {
  sessions: Session[];
  onSessionPress: (sessionId: string) => void;
}

export const SessionList: React.FC<SessionListProps> = ({
  sessions,
  onSessionPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Recent Sessions:</Text>
      {sessions.map((session) => (
        <SessionItem
          key={session.id}
          date={session.date}
          duration={session.duration}
          category={session.category}
          onPress={() => onSessionPress(session.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24, // equivalent to mt-6
  },
  headerText: {
    fontSize: 18, // text-lg
    fontWeight: '600', // font-semibold
    marginBottom: 16, // mb-4
  }
});

export default SessionList;