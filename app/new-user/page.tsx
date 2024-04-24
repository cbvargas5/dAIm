import { syncNewUserInDatabase } from '@/utils/auth'
import { auth } from '@clerk/nextjs/server'

const NewUserPage = async () => {
  auth().protect
  await syncNewUserInDatabase()
}

export default NewUserPage
