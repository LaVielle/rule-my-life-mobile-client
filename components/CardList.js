import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Card from './Card'

const CardList = (props) => {

  const _renderItem = ({item}) => <Card {...item} />
  const _keyExtractor = (item, index) => item.id
  const _ItemSeparatorComponent = () => <View style={{height: 10}} />

  return (
    <FlatList
      data={props.decisions}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      ItemSeparatorComponent={_ItemSeparatorComponent}
      contentContainerStyle={{ paddingBottom: 50 }}
    />
  )
}

export default CardList
