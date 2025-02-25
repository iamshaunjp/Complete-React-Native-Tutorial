import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>Contact Page</ThemedText>

      <Link href="/" style={styles.link}>
        <ThemedText>Home Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})