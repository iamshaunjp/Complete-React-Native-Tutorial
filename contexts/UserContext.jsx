import { createContext, useState } from "react"
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)

    } catch (error) {
      throw Error(error.message)
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password)
      await login(email, password)
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function logout() {
    await account.deleteSession("current")
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ 
      user, login, logout, register,
    }}>
      {children}
    </UserContext.Provider>
  );
}

// Wrap the UserProvider component around the root layout stack