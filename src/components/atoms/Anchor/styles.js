import styled from 'styled-components'
import { color,space,variant } from 'styled-system'

export const Anchor = styled('a')(
    {
        textDecoration:'none',       
    },
    color,
    space,
    variant({
      prop: 'variant',
      scale: 'text',
    })
  )