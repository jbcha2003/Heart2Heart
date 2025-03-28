import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SessionItemProps {
  date: string;
  duration: string;
  category: string;
  onPress: () => void;
}

export const SessionItem: React.FC<SessionItemProps> = ({
  date,
  duration,
  category,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.text}>
        {date} ♥ {duration} ♥ {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  text: {
    color: '#374151', // Equivalent to text-gray-700
  }
});

export default SessionItem;