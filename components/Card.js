import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const Card = (props) => {
  console.log(props.title);
  return (
    <View style={styles.container}>

      <Text style={styles.title}>{props.title}</Text>

      <View style={styles.optionsContainer}>

        <TouchableOpacity style={styles.option}>
          <Text>{props.optionA}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text>{props.optionB}</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f2f2f2'
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    padding: 10
  },
  optionsContainer: {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
})

export default Card
