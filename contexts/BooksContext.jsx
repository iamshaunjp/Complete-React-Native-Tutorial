import { createContext, useEffect, useState } from "react"
import { databases, client } from "../lib/appwrite"
import { ID, Permission, Query, Role } from "react-native-appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID = "67cdd0c9002307459723"
const COLLECTION_ID = "67cdd0cf00307157221e"

export const BooksContext = createContext()

export function BooksProvider({children}) {
  const [books, setBooks] = useState([])
  const { user } = useUser()

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID, 
        COLLECTION_ID,
        [
          Query.equal('userId', user.$id)
        ]
      )

      setBooks(response.documents)
      console.log(response.documents)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchBookById(id) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )

      return response
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createBook(data) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {...data, userId: user.$id},
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteBook(id) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id,
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    let unsubscribe
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`

    if (user) {
      fetchBooks()

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response
        console.log(events)

        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload])
        }

        if (events[0].includes("delete")) {
          setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== payload.$id))
        }
      })

    } else {
      setBooks([])
    }

    return () => {
      if (unsubscribe) unsubscribe()
    }

  }, [user])

  return (
    <BooksContext.Provider 
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}
