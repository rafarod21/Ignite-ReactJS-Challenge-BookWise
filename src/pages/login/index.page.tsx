import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Spinner } from '@phosphor-icons/react'
import {
  LoginContainer,
  ImageCover,
  LoginButton,
  LoginContent,
  LoginWrapper,
} from './styles'

import backgroundImg from '../../assets/background-image-home.png'
import logoImg from '../../assets/book-wise-logo.svg'
import iconGoogle from '../../assets/icon-google.svg'
import iconGitHub from '../../assets/icon-github.svg'
import iconRocket from '../../assets/icon-rocket.svg'

export default function Login() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'authenticated') {
    return (
      <span
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        <Spinner /> Redirecionando...
      </span>
    )
  }

  return (
    <LoginContainer>
      <ImageCover>
        <Image src={backgroundImg} height={910} width={600} alt="" />
        <Image src={logoImg} height={60} width={240} alt="BookWise Logo" />
      </ImageCover>

      <LoginContent>
        <h2>Boas vindas!</h2>
        <span>Faça seu login ou acesse como visitante.</span>

        <LoginWrapper>
          <LoginButton>
            <Image src={iconGoogle} height={32} width={32} alt="Google" />{' '}
            Entrar com Google
          </LoginButton>
          <LoginButton>
            <Image src={iconGitHub} height={32} width={32} alt="Google" />{' '}
            Entrar com GitHub
          </LoginButton>
          <LoginButton>
            <Image src={iconRocket} height={32} width={32} alt="Google" />{' '}
            Acessar como visitante
          </LoginButton>
        </LoginWrapper>
      </LoginContent>
    </LoginContainer>
  )
}
