import { Category } from "./Category"

export type Book = {
  id: string
  name: string
  author: string
  summary: string
  coverUrl: string
  totalPages: number
  rate: number
  categories: Category[]
}