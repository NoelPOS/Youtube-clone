import styled from 'styled-components'
import Menu from './components/Menu'
import NavBar from './components/NavBar'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Utils/Theme'
import { lightTheme } from './Utils/Theme'
import { useState } from 'react'

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div``

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <NavBar />
          <Wrapper>
            <h1>test</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
