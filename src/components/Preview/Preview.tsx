import React, { useState } from "react"
import {
  Body,
  Button,
  Card,
  H1,
  Link,
  Logo,
  LogoReact,
  ReadTheDocs,
  Root,
} from "./Preview.styled"

export const Preview = () => {
  const [count, setCount] = useState(0)

  return (
    <Body>
      <Root>
        <div>
          <Link href="https://vitejs.dev" target="_blank">
            <Logo src="/vite.svg" alt="Vite logo" />
          </Link>
          <Link href="https://reactjs.org" target="_blank">
            <LogoReact src="/react.svg" alt="React logo" />
          </Link>
        </div>
        <H1>Vite + React</H1>
        <Card>
          <Button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </Card>
        <ReadTheDocs>
          Click on the Vite and React logos to learn more
        </ReadTheDocs>
      </Root>
    </Body>
  )
}
