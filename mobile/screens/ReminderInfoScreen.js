import React from 'react';

import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Router } from '../navigation/Router.js';

export default class ReminderInfoScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Reminders'
    }
  }

  render() {
    return (
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.reminderInfoContainer}>
          <Text style={styles.reminderTitle}>{this.props.route.params.reminder.task}</Text>
        </View>
        <View style={styles.reminderInfoContainer}>
          <Text style={styles.reminderNote}>{this.props.route.params.reminder.note}</Text>
        </View>
        <View style={styles.reminderInfoContainer}>
          <Image style={styles.reminderImage} source={{uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrqidYU7IoDmubY_c9zU9pBGhfVBcJRvcaK6ghytIcCKrK-IAngQ'}} /> 
        </View>
        <View style={styles.reminderInfoContainer}>
          <Text style={styles.reminderTimeDate}>{this.props.route.params.reminder.date + ' at ' + this.props.route.params.reminder.time}</Text>       
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
  },
  contentContainer: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },
  reminderInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  reminderImage: {
    height: 150,
    width: 150,
  },
  reminderTitle: {
    color: '#ECECEC',
    fontSize: 40,
    textDecorationLine: 'underline',
    textDecorationColor: '#ECECEC'
  },
  reminderNote: {
    color: '#ECECEC',
    fontSize: 20,
  },
  reminderTimeDate: {
    color: '#ECECEC',
    fontSize: 30
  }
});