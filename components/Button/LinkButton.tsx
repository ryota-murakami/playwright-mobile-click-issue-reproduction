import classNames from 'classnames'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import React from 'react'

import { useCircleButton } from './useCircleButton'
import { useRectangleButton } from './useRectangleButton'

export type BaseProps = {
  disposition?: 'default' | 'primary' | 'danger' | 'ghost'
  size?: 'normal' | 'large' | 'small'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  circle?: boolean
  href?: Pick<ComponentProps<typeof Link>, 'href'>['href']
}

type Props = BaseProps & Omit<ComponentProps<typeof Link>, 'href'>

export const LinkButton: React.FC<Props> = (props) => {
  const { circle } = props
  if (circle) {
    return <CircleButton {...props} />
  }
  return <RectangleButton {...props} />
}

const RectangleButton: React.FC<Props> = (props) => {
  const {
    children,
    size = 'normal',
    icon,
    iconPosition = 'left',
    className: customClassName = '',
    circle: _circle = false,
    disposition = 'default',
    href = '',
    ...rest
  } = props

  const { innerContents, buttonClassName: _buttonClassName } =
    useRectangleButton({
      disposition,
      size,
      icon,
      iconPosition,
      circle: _circle,
      customClassName,
      children,
    })

  const buttonClassName = classNames(_buttonClassName, {
    'btn-disabled': !href,
  })

  return (
    <Link
      className={buttonClassName}
      href={href}
      {...rest}
      data-disposition={disposition}
    >
      {innerContents}
    </Link>
  )
}

const CircleButton: React.FC<Props> = (props) => {
  const {
    circle: _circle = true,
    icon,
    size = 'normal',
    iconPosition: _,
    disposition = 'default',
    href = '',
    ...rest
  } = props

  const { buttonClassName: _buttonClassName, iconClassName } = useCircleButton({
    disposition,
    size,
    icon,
    circle: _circle,
  })

  const buttonClassName = classNames(_buttonClassName, {
    'btn-disabled': !href,
  })

  return (
    <Link
      {...rest}
      href={href}
      className={buttonClassName}
      data-disposition={disposition}
    >
      <span className={iconClassName}>{icon || <span></span>}</span>
    </Link>
  )
}
