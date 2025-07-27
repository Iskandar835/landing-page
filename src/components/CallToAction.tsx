import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl"
            id="contacts"
          >
            Votre application n’attend plus
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Prenez 30 secondes pour réserver un créneau gratuit. Parlons de
            votre projet et voyons comment le concrétiser, dès aujourd’hui.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              variant="solid"
              href={'https://cal.com/sacha-vandermoeten/merci-de-votre-interet'}
              target="_blank"
            >
              Prendre un rendez-vous
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
