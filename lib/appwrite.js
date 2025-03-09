import { Client, Account, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('67c5d24d000f9172f860')
  .setPlatform('dev.netninja.sheflie')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)