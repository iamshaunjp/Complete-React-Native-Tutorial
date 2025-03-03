import { ScrollView, StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"

const Scroll = () => {
  return (
    <ThemedView style={styles.container} safe={true}>

      <ScrollView>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Your Reading List
        </ThemedText>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
          Last one
        </ThemedText>
      </ScrollView>

    </ThemedView>
  )
}

export default Scroll

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})