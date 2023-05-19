import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button, Text, TextInput } from "@ignite-ui/react"

import { Form, FormAnnotation, ErrorText } from "./styles"

import { ArrowRight } from "phosphor-react"
import { useRouter } from "next/router"

const handleClainUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário precisa ter pelo menos 3 letras" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário pode ter somente letras ou hífens",
    })
    .transform((username) => username.toLowerCase()),
})

type ClainUsernameFormData = z.infer<typeof handleClainUsernameFormSchema>

export function ClainUsernameForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ClainUsernameFormData>({
    resolver: zodResolver(handleClainUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClainUsername(data: ClainUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClainUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register("username")}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors?.username ? (
            <ErrorText size="sm">{errors?.username.message}</ErrorText>
          ) : (
            "Digite o nome do usuário desejado"
          )}
        </Text>
      </FormAnnotation>
    </>
  )
}
