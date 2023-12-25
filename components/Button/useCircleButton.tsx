import classNames from 'classnames'

import type { BaseProps } from './Button'
import {
  baseClassName,
  dangerClassName,
  defaultClassName,
  ghostClassName,
  primaryClassName,
} from './buttonClass'

const circleClassName = classNames(baseClassName, 'btn-circle', 'rounded-[50%]')
const mediumCircleClassName = classNames('w-10', 'h-10', 'min-h-0')
const largeCircleClassName = classNames('w-12', 'h-12', 'min-h-0')
const smallCircleClassName = classNames('w-8', 'h-8', 'min-h-0')
const mediumCircleIconClassName = classNames('text-2xl')
const largeCircleIconClassName = classNames('text-3xl')
const smallCircleIconClassName = classNames('text-lg')

const colorClassNames: Record<Required<BaseProps>['disposition'], string> = {
  default: defaultClassName,
  ghost: ghostClassName,
  primary: primaryClassName,
  danger: dangerClassName,
}

const buttonSizeClassNames: Record<Required<BaseProps>['size'], string> = {
  normal: mediumCircleClassName,
  large: largeCircleClassName,
  small: smallCircleClassName,
}

const iconClassNames: Record<Required<BaseProps>['size'], string> = {
  normal: mediumCircleIconClassName,
  large: largeCircleIconClassName,
  small: smallCircleIconClassName,
}

export const useCircleButton = (
  props: BaseProps & { customClassName?: string },
) => {
  const { disposition = 'default', size = 'normal', customClassName } = props
  const colorClassName = colorClassNames[disposition] || defaultClassName

  const buttonClassName = classNames(
    customClassName,
    colorClassName,
    circleClassName,
    buttonSizeClassNames[size],
  )

  const iconClassName = iconClassNames[size] || mediumCircleIconClassName

  return {
    buttonClassName,
    iconClassName,
  }
}
