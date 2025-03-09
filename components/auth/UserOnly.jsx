import { useUser } from '../../hooks/useUser'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

import ThemedLoader from '../ThemedLoader'

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()
  
  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login")
    }
  }, [user, authChecked])


  // show loader while we wait for auth to be checked, or while redirecting if user becomes null
  if (!authChecked || !user) {
    return (
      <ThemedLoader />
    )
  }
  
  return children
}

export default UserOnly