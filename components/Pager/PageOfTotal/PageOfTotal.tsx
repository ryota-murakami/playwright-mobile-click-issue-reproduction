import React from 'react'

type Props = {
  totalCount: number
  startIndex: number
  endIndex: number
} & JSX.IntrinsicElements['div']

export const PageOfTotal: React.FC<Props> = (props) => {
  const { totalCount, startIndex, endIndex, ...rest } = props
  return (
    <div
      data-testid="PageOfTotal-container"
      {...rest}
    >{`${totalCount}件中 ${startIndex}-${endIndex}件を表示中`}</div>
  )
}
