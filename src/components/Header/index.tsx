import { useScroll, useTransform } from 'framer-motion'
import { Container } from './styles'

export function Header() {
  const { scrollYProgress } = useScroll()

  const headerY = useTransform(scrollYProgress, [0.188, 0.1988], ['0%', '-100%'])

  return <Container style={{ y: headerY }} />
}
