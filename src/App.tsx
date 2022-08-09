import { Header } from './components'
import { FirstAndSecond } from './components/FirstAndSecond'
import { Main, Section, Sticky } from './styles'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '17.3%' }}>
          <Sticky className='third' />
        </Section>

        <Section style={{ height: '10%' }}>
          <Sticky className='fourth' />
        </Section>
      </Main>
    </>
  )
}

export default App
