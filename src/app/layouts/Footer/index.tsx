import {
  Foot,
  Group,
  Logo,
  NavLink,
  HorizontalLine
} from "../../styles/components"
import medias from "../../data/medias.json"

function Footer() {
  const { facebook, instagram, linkedin, youtube } = medias
  const mediasArray = [linkedin,facebook, instagram, youtube]
  return (
    <Foot>

      {/* Main Group */}
      <Group
        justify="space-between"
        align="flex-start">

        <Logo
          priority
          src="/logo.svg"
          alt="Logo"
          width="50"
          height="50" />
        
        {/* Info Group */}
        <Group
          width="80%"
          justify="space-between">

          {/* Address */}
          <Group
            height="100px"
            width="230px"
            margin="0 0 20px 0"
            direction="column"
            justify="space-between">
            <h4>Endereço</h4>
            <address>R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG, 37502-508</address>
          </Group>

          {/* Contact */}
          <Group
            width="230px"
            height="100px"
            margin="0 0 20px 0"
            direction="column"
            justify="space-between">
            <h4>Contato</h4>
            <NavLink
              href="tel:+553536222699">
              (35) 3622-2699
            </NavLink>
            <NavLink
              href="mailto:contato@hvex.com.br">
              contato@hvex.com.br
            </NavLink>
          </Group>

          {/* Social networks */}
          <Group
            width="280px"
            height="100px"
            margin="0 0 20px 0"
            direction="column"
            justify="space-between">
            <h4>Confira nossa redes</h4>

            {/* Social Network Links */}
            <Group
              width="80%"
              direction="row"
              align="center"
              justify="space-between">
              {
                mediasArray.map((media, index) => (
                  <NavLink
                    key={index}
                    href={media.url}
                    target="_blank">
                    <img
                      src={media.icon}
                      alt={media.name}
                      width="30"
                      height="30" />
                  </NavLink>
                ))
              }
            </Group>
          </Group>
        </Group>
      </Group>

      <HorizontalLine
        margin="20px 0" />

      {/* Additional infos */}
      <Group
        justify="space-between"
        align="flex-start">

        <h5>© 2021 HVEX. | Todos os direitos reservados.</h5>

        <Group
          width="35%"
          justify="space-between"
          align="flex-start">
          <NavLink
            href="/">
            Políticas de Privacidade
          </NavLink>
          <NavLink
            href="/">
            Termos de Uso
          </NavLink>
        </Group>
      </Group>

    </Foot>
  )
}

export default Footer