import { Category } from "./Category"

export type Book = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  categories: Category[]
}