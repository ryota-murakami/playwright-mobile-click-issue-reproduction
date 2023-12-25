import React from 'react'

import { useCircleButton } from './useCircleButton'
import { useRectangleButton } from './useRectangleButton'

export type BaseProps = {
  disposition?: 'default' | 'primary' | 'danger' | 'ghost'
  size?: 'normal' | 'large' | 'small'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  circle?: boolean
}

type Props = BaseProps & JSX.IntrinsicElements['button']

export const Button: React.FC<Props> = (props) => {
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
    disabled,
    className: customClassName = '',
    circle: _circle = false,
    disposition = 'default',
    ...rest
  } = props

  const { innerContents, buttonClassName } = useRectangleButton({
    disposition,
    size,
    icon,
    iconPosition,
    circle: _circle,
    customClassName,
    children,
  })

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      {...rest}
      data-disposition={disposition}
    >
      {innerContents}
    </button>
  )
}

const CircleButton: React.FC<Props> = (props) => {
  const {
    circle: _circle = true,
    icon,
    size = 'normal',
    iconPosition: _,
    disposition = 'default',
    children,
    className,
    ...rest
  } = props

  const { buttonClassName, iconClassName } = useCircleButton({
    disposition,
    size,
    icon,
    circle: _circle,
    customClassName: className,
  })

  return (
    <button
      {...rest}
      className={buttonClassName}
      data-disposition={disposition}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      {/* {children && (
        <span className="flex justify-center items-center">{children}</span>
      )} */}
      {children}
    </button>
  )
}
