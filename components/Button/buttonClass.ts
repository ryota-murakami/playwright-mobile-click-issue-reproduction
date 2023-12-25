import classNames from 'classnames'

export const defaultClassName = classNames(
  'text-text',
  'bg-white',
  'border',
  'border-border',
  'hover:bg-base-100',
  'hover:border-border',
  'disabled:bg-base-100',
  'disabled:text-disabled',
  'focus-visible:outline-none',
  'focus-visible:border-info',
  'focus-visible:border-2',
)

export const baseClassName = classNames(
  'btn',
  'btn-outline',
  'hover:text-base-content',
  'flex',
  'gap-1',
  'flex-nowrap',
)

export const ghostClassName = classNames(
  'text-text',
  'btn-ghost',
  'bg-transparent',
  'border',
  'border-transparent',
  'hover:bg-base-100',
  'hover:border-transparent',
  'disabled:bg-transparent',
  'disabled:border-transparent',
  'disabled:text-disabled',
  'focus-visible:outline-none',
  'focus-visible:border-info',
  'focus-visible:border-2',
)

export const primaryClassName = classNames(
  'btn-primary',
  '!text-base-100',
  'bg-primary-dark',
  'border',
  'border-transparent',
  'hover:!bg-primary-dark-focus',
  'hover:!text-base-100',
  'hover:!border-transparent',
  'disabled:bg-primary-dark-disabled',
  'disabled:text-base-100',
  'focus-visible:outline',
  'focus-visible:outline-info',
)

export const dangerClassName = classNames(
  'btn-danger',
  'text-base-100',
  'bg-rose-600',
  'border',
  'border-transparent',
  'hover:bg-rose-800',
  'hover:!text-base-100',
  'hover:border-transparent',
  'disabled:bg-rose-600',
  'disabled:bg-opacity-60',
  'disabled:text-base-100',
  'focus-visible:outline',
  'focus-visible:outline-info',
)
