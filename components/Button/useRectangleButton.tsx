import classNames from 'classnames'
import React, { useMemo } from 'react'

import type { BaseProps } from './Button'
import {
  baseClassName,
  dangerClassName,
  defaultClassName,
  ghostClassName,
  primaryClassName,
} from './buttonClass'

const rectangleClassName = classNames(
  baseClassName,
  'rounded',
  'min-h-8',
  'h-fit',
  'w-fit',
)

const mediumClassName = classNames('py-3', 'px-3', 'text-[16px]')
const largeClassName = classNames('py-4', 'px-5', 'text-[18px]')
const smallClassName = classNames('py-2', 'px-3', 'text-[14px]')

const normalSizeIconClassName = classNames('text-lg')
const largeIconClassName = classNames('text-lg')
const smallIconClassName = classNames('text-md')

const colorClassNames: Record<Required<BaseProps>['disposition'], string> = {
  default: defaultClassName,
  ghost: ghostClassName,
  primary: primaryClassName,
  danger: dangerClassName,
}

const iconClassNames: Record<Required<BaseProps>['size'], string> = {
  normal: normalSizeIconClassName,
  large: largeIconClassName,
  small: smallIconClassName,
}

const buttonSizeClassNames: Record<Required<BaseProps>['size'], string> = {
  normal: mediumClassName,
  large: largeClassName,
  small: smallClassName,
}

export const useRectangleButton = (
  props: BaseProps & {
    customClassName: string
    children?: React.ReactNode
  },
) => {
  const {
    disposition = 'default',
    size = 'normal',
    customClassName,
    children,
    icon,
    iconPosition,
  } = props

  const colorClassName = colorClassNames[disposition] || defaultClassName

  const iconClassName = iconClassNames[size] || normalSizeIconClassName

  const buttonClassName = classNames(
    colorClassName,
    rectangleClassName,
    buttonSizeClassNames[size],
    customClassName,
    { 'font-normal': size === 'small' },
  )

  const containerClassName = classNames('flex', 'gap-1', {
    'flex-row-reverse': iconPosition === 'right',
  })
  const innerContents = useMemo(
    () => (
      <div className={containerClassName}>
        {icon && <p className={iconClassName}>{icon}</p>}
        {children}
      </div>
    ),
    [children, containerClassName, icon, iconClassName],
  )
  return {
    iconClassName,
    buttonClassName,
    innerContents,
  }
}
