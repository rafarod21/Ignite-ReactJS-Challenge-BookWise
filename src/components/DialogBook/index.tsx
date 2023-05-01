import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BookmarkSimple, BookOpen, Check, Star, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import dayjs from 'dayjs'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'

import { DialogLogin } from '../DialogLogin'
import { RatingStars } from '../RatingStars'
import { Avatar } from '../Avatar'

import { api } from '@/lib/axios'

import { Book } from '@/@types/book'

import {
  BookAbout,
  BookComment,
  BookDetail,
  BookInfo,
  CardComment,
  CardCommentHeader,
  CardNewComment,
  DialogClose,
  DialogContent,
  DialogOverlay,
  FormError,
  FormTextArea,
  NewRatingStars,
} from './styles'

interface RatingInfo {
  id: string
  rate: number
  description: string
  createdAtAsString: string
  user: {
    id: string
    name: string
    avatarUrl: string
    createdAtAsString: string
  }
}

const newRatingFormSchema = z.object({
  rate: z.number().min(1).max(5),
  description: z
    .string()
    .min(3, { message: 'A avaliação deve ter ao menos 3 caracteres' })
    .max(450, { message: 'A avaliação deve ter no máximo 450 caracteres' }),
})

type NewRatingForm = z.infer<typeof newRatingFormSchema>

interface DialogBookProps {
  book: Book | null
}

export function DialogBook({ book }: DialogBookProps) {
  const [newReview, setNewReview] = useState(false)
  const [bookCategories, setBookCategories] = useState<string[]>([])
  const [bookRatings, setBookRatings] = useState<RatingInfo[]>([])
  const [newRatingNumberHover, setNewRatingNumberHover] = useState(1)

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewRatingForm>({
    resolver: zodResolver(newRatingFormSchema),
    defaultValues: {
      rate: 1,
      description: '',
    },
  })

  const rate = watch('rate')
  const description = watch('description')

  const { data: session } = useSession()

  async function handleCreateNewReview(data: NewRatingForm) {
    if (book) {
      try {
        await api.post('/ratings', {
          userId: session?.user.id,
          bookId: book.id,
          rate: data.rate,
          description: data.description,
        })

        const ratingsResponse = await api.get(`/books/${book?.id}/ratings`)
        setBookRatings(ratingsResponse.data.ratings)
        setNewReview(false)
        reset()
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    async function getAllBookData() {
      if (book) {
        const categoriesResponse = await api.get(`/books/${book.id}/categories`)
        setBookCategories(categoriesResponse.data.categories)

        const ratingsResponse = await api.get(`/books/${book.id}/ratings`)
        setBookRatings(ratingsResponse.data.ratings)
      }
    }

    if (book) {
      getAllBookData()
    }
  }, [book])

  return (
    <Dialog.Portal>
      <DialogOverlay />
      {book && (
        <DialogContent>
          <DialogClose>
            <X size={24} weight="bold" aria-label="Fechar" />
          </DialogClose>

          <BookDetail>
            <div>
              <Image
                src={book.coverUrl}
                height={242}
                width={172}
                alt={book.name}
              />
              <BookInfo>
                <div>
                  <h4>{book.name}</h4>
                  <span>{book.author}</span>
                </div>
                <div>
                  <RatingStars rating={book.rate} size="md" />
                  <span>
                    {bookRatings.length === 1
                      ? `${bookRatings.length} avaliação`
                      : `${bookRatings.length} avaliações`}
                  </span>
                </div>
              </BookInfo>
            </div>
            <BookAbout>
              <div>
                <BookmarkSimple />
                <div>
                  <span>Categoria</span>
                  <strong>
                    {bookCategories.map((category, index) => (
                      <React.Fragment key={category}>
                        {index === bookCategories.length - 1
                          ? category
                          : `${category}, `}
                      </React.Fragment>
                    ))}
                  </strong>
                </div>
              </div>
              <div>
                <BookOpen />
                <div>
                  <span>Páginas</span>
                  <strong>{book.totalPages}</strong>
                </div>
              </div>
            </BookAbout>
          </BookDetail>

          <BookComment>
            <div>
              Avaliações
              {session ? (
                <button onClick={() => setNewReview(true)}>Avaliar</button>
              ) : (
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button onClick={() => setNewReview(true)}>Avaliar</button>
                  </Dialog.Trigger>

                  <DialogLogin />
                </Dialog.Root>
              )}
            </div>
            <div>
              {newReview && session && (
                <CardNewComment onSubmit={handleSubmit(handleCreateNewReview)}>
                  <header>
                    <div>
                      <Avatar src={session?.user.avatar_url} size="md" />
                      {session?.user.name}
                    </div>
                    <Controller
                      name="rate"
                      control={control}
                      render={({ field }) => (
                        <NewRatingStars {...field}>
                          {[...Array(5)].map((_, index) => {
                            index += 1
                            return (
                              <button
                                key={index}
                                type="button"
                                onClick={() => field.onChange(index)}
                                onMouseEnter={() =>
                                  setNewRatingNumberHover(index)
                                }
                                onMouseLeave={() =>
                                  setNewRatingNumberHover(rate)
                                }
                              >
                                <Star
                                  weight={
                                    newRatingNumberHover >= index
                                      ? 'fill'
                                      : 'regular'
                                  }
                                />
                              </button>
                            )
                          })}
                        </NewRatingStars>
                      )}
                    />
                  </header>
                  <FormTextArea>
                    <textarea
                      maxLength={450}
                      placeholder="Escreva sua avaliação"
                      {...register('description')}
                    />
                    <span>{`${description.length}/450`}</span>
                  </FormTextArea>

                  {errors.description && (
                    <FormError>{errors.description.message}</FormError>
                  )}

                  <footer>
                    <button
                      onClick={() => setNewReview(false)}
                      disabled={isSubmitting}
                    >
                      <X weight="bold" />
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      <Check weight="bold" />
                    </button>
                  </footer>
                </CardNewComment>
              )}
              {bookRatings.map((rating) => (
                <CardComment key={rating.id}>
                  <CardCommentHeader>
                    <div>
                      <Avatar src={rating.user.avatarUrl} size="md" />
                    </div>
                    <div>
                      {rating.user.name}
                      <span>{dayjs(rating.createdAtAsString).fromNow()}</span>
                    </div>
                    <RatingStars rating={rating.rate} />
                  </CardCommentHeader>
                  <p>{rating.description}</p>
                </CardComment>
              ))}
            </div>
          </BookComment>
        </DialogContent>
      )}
    </Dialog.Portal>
  )
}
