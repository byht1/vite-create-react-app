import styled, { keyframes } from "styled-components"

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `

export const Body = styled.div`
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
`

export const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`

export const Link = styled.a`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;

  &:hover {
    color: #535bf2;
  }

  @media (prefers-color-scheme: light) {
    &:hover {
      color: #747bff;
    }
  }
`

export const H1 = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    & {
      background-color: #f9f9f9;
    }
  }
`

export const LogoReact = styled(Logo)`
  animation: ${logoSpin} infinite 20s linear;
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`

export const Card = styled.div`
  padding: 2em;
`

export const ReadTheDocs = styled.p`
  color: #888888;
`
