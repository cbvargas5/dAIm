import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export const syncNewUserInDatabase = async () => {
  const clerkUser = await currentUser()
  const isFoundInDb = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser?.id,
    },
  })
  if (!isFoundInDb) {
    await prisma.user.create({
      data: {
        clerkId: clerkUser!.id,
        email: clerkUser!.emailAddresses[0].emailAddress, // Access the email address as a string
      },
    })
  }
  redirect('/')
}
