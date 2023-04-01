import { Navbar } from '@/components/Navbar'
import { HomeContainer, HomeContent } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <HomeContent>Home content</HomeContent>
    </HomeContainer>
  )
}
