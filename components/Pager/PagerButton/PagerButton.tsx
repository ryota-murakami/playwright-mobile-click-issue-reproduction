import type { ComponentProps } from 'react'
import React from 'react'

import { LinkButton } from '../../Button/LinkButton'

type Props = ComponentProps<typeof LinkButton>

export const PagerButton: React.FC<Props> = (props) => {
  const { children, ...rest } = props
  return (
    <LinkButton className="!p-1 !w-8 !h-8" {...rest}>
      {children}
    </LinkButton>
  )
}
