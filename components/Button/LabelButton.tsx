import classNames from 'classnames'
import React from 'react'

import { useCircleButton } from './useCircleButton'
import { useRectangleButton } from './useRectangleButton'

export type BaseProps = {
  disposition?: 'default' | 'primary' | 'danger' | 'ghost'
  size?: 'normal' | 'large' | 'small'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  circle?: boolean
  disabled?: boolean
}

type Props = BaseProps & JSX.IntrinsicElements['label']
export const LabelButton: React.FC<Props> = (props) => {
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
    htmlFor: _htmlFor,
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
    'cursor-default': disabled,
    'btn-disabled': disabled,
  })

  const htmlFor = disabled ? undefined : _htmlFor

  return (
    <label
      className={buttonClassName}
      htmlFor={htmlFor}
      {...rest}
      data-disposition={disposition}
    >
      {innerContents}
    </label>
  )
}

const CircleButton: React.FC<Props> = (props) => {
  // rest から circle を除外
  const {
    circle: _circle = true,
    icon,
    size = 'normal',
    iconPosition: _,
    disposition = 'default',
    ...rest
  } = props

  const { buttonClassName, iconClassName } = useCircleButton({
    disposition,
    size,
    icon,
    circle: _circle,
  })

  return (
    <label {...rest} className={buttonClassName} data-disposition={disposition}>
      <span className={iconClassName}>{icon || <span></span>}</span>
    </label>
  )
}
