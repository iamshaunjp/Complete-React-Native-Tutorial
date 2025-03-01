import { Pressable, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {

  const handleSubmit = async () => {
    console.log('register form submitted')
  }

  return (
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register an Account
      </ThemedText>

      {/* <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      >
        <Text style={{color: "#f2f2f2"}}>Register</Text>
      </Pressable> */}

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/login" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      textAlign: "center",
      fontSize: 18,
      marginBottom: 30
    },
    btn: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderRadius: 5,
    },
    pressed: {
      opacity: 0.8
    }
})