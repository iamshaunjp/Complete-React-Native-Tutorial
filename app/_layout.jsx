import { Stack } from "expo-router"
import { Text } from "react-native"

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#ddd' },
      headerTintColor: '#333',
      headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
    }}>
      {/* Individual Screens */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
  )
}