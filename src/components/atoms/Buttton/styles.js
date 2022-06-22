import styled from 'styled-components'
import {  variant } from 'styled-system'
export const Button = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },
  variant({
  prop:'variant',
  scale:'text'
  })
)