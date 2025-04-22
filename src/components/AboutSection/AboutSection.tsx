import React from 'react'
import { Container } from '../ui/StyledComponents'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import aboutDigitalBank from '../../../public/images/mesa_newtalent.jpg'
import {
  AboutContent,
  AboutImage,
  AboutSectionWrapper,
  AboutText,
  itemVariants,
  containerVariants
} from './AboutSection.style'

const AboutSection: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <AboutSectionWrapper id="about">
      <Container>
        <motion.div
          className="mb-12 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Nosotros
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Conoce más sobre DigitalBank y nuestra misión de transformar la
            banca digital
          </motion.p>
        </motion.div>

        <AboutContent>
          <AboutText>
            <h2>Transformando el futuro de la banca</h2>
            <p>
              En DigitalBank, somos una institución financiera digital líder,
              comprometida con brindar soluciones bancarias modernas y
              accesibles. Desde nuestra fundación en 2018, nos hemos dedicado a
              simplificar la gestión financiera de nuestros clientes mediante
              tecnología innovadora y un servicio personalizado.
            </p>
            <p>
              Nuestra misión es democratizar el acceso a servicios financieros
              de calidad, ofreciendo una experiencia bancaria intuitiva, segura
              y transparente. Creemos en un futuro donde la gestión del dinero
              sea sencilla y accesible para todos, independientemente de su
              situación financiera o conocimientos previos.
            </p>
            <p>
              Con un enfoque en la satisfacción del cliente, la innovación
              constante y la seguridad de primer nivel, DigitalBank está
              redefiniendo lo que significa ser un banco en la era digital.
            </p>
          </AboutText>
          <AboutImage>
            <Image
              src={aboutDigitalBank}
              alt="Equipo de DigitalBank trabajando en soluciones financieras digitales"
              width={500}
              height={400}
            />
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSectionWrapper>
  )
}

export default AboutSection
