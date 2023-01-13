import styled from 'styled-components'
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Iphone from './Iphone'
import logo360 from '../src/assets/logo360.svg'

function App() {
  // const [imageIndex, setImageIndex] = useState(0)
 
 // const Produto = ['../src/assets/produto.png', '../src/assets/produto.gif']

  return (
    <Container>
      <AreaCanvas>
      <h1>#2</h1>
      <Canvas width={'300'}>
        <OrbitControls enableZoom={false}/>
        <ambientLight intesity={0.5} />
        <directionalLight intesity={1}/>
        <Suspense fallback={null}>
         <Iphone/>
        </Suspense>
      </Canvas>
      <Logo src={logo360} alt="" />
      </AreaCanvas>

      <InfoArea>

        <Codigo>CÓDIGO: 42404</Codigo>
        <Titulo>Apple iPhone 13 Pro Max</Titulo>
        <Preco>A partir de R$ 6.499</Preco>
        <ButtonCesta>Comprar</ButtonCesta>
        

      </InfoArea>
    </Container>
  )
}
export default App


const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Logo = styled.img`
width: 3rem;
height: 3rem;

`

const AreaCanvas = styled.div`
 width: 500px;
 height: 500px;
 display: flex;
 flex-direction: column;
 
 align-items: center;
 
`

const InfoArea = styled.div`

`
const Codigo = styled.p`
font-weight: 300;
font-size: 1.25rem;
margin-bottom: 12px;
`

const Titulo = styled.p`
font-weight: 600;
font-size: 2.5rem;
margin-bottom: 12px;
`

const Preco = styled.p`
font-weight: 400;
font-size: 1.875rem;
margin-bottom: 20px;
`

const ButtonCesta = styled.button`
font-weight: 500;
font-size: 2rem;
padding: 8px 18px;
border: 1px solid rgb(39, 26, 69);
border-radius: 50px;

letter-spacing: 1.5px;
transition: all .5s ease;
display: flex;
align-items: center;
justify-content: center;

  :hover {
    background-color:rgb(39, 26, 69);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
}


`