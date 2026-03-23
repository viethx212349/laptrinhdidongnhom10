import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TaskListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskListScreen;
