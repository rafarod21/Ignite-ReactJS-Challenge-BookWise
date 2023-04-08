import NextAuth from 'next-auth'
import Adapters from 'next-auth/adapters'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}

declare module 'next-auth/adapters' {
  interface AdapterUser {
    email?: string
    emailVerified?: Date | null
  }
}