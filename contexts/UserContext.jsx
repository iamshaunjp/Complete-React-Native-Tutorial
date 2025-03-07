import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  async function login(email, password) {

  }

  async function register(email, password) {

  }

  async function logout() {

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