import { Image, StyleSheet, Text, View } from 'react-native'

import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>

      <View style={styles.card}>
        <Text>Hello, this is a Card</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)"
  }
})