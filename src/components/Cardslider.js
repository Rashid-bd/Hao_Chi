import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const Cardslider = ({title, data}) => {
    // console.log(title)
    // console.log(data)
  return (
    <View style={styles.container}>
        <Text style={styles.cardouthead}>
            {title}
        </Text>

        <FlatList style={styles.cardsout}
            data={data}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text>{item.foodName}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default Cardslider

const styles = StyleSheet.create({})




