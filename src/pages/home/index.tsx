import Image from "next/image"
import { Heading, Text } from "@ignite-ui/react"

import { Container, Hero, Preview } from "./styles"

import previewImage from "../../assets/app-preview.png"

import { ClainUsernameForm } from "./components/ClainUsernameForm"

import { NextSeo } from "next-seo"

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre. "
      />
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClainUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            alt="Calendario simbolizando aplicação em funcionamento"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
