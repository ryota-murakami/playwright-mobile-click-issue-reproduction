import classNames from 'classnames'
import type { ComponentProps } from 'react'
import React, { useMemo } from 'react'
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md'

import { PagerButton } from './PagerButton'

type Props = {
  maxPageButtonCount: number
  currentPageNumber: number
  maxPageNumber: number
  link?: (pageNumber: number) => string
}

const getUrl = (
  pageNum: number | null,
  link: ((pageNumber: number) => string) | undefined,
): string | import('url').UrlObject => {
  return (pageNum && link?.(pageNum)) || ''
}

/** 戻るページスキップのプロパティを生成する */
const getSkipPrevProps = (
  currentPageNumber: number,
  maxPageButtonCount: number,
  link: ((pageNumber: number) => string) | undefined,
) => {
  let pageNum: number | null = currentPageNumber - maxPageButtonCount

  pageNum = currentPageNumber === 1 ? null : pageNum
  pageNum = pageNum && pageNum < 1 ? 1 : pageNum

  const props: ComponentProps<typeof PagerButton> = {
    href: getUrl(pageNum, link),
  }
  return props
}

const getSkipNextProps = (
  currentPageNumber: number,
  maxPageButtonCount: number,
  maxPageNumber: number,
  link: ((pageNumber: number) => string) | undefined,
) => {
  let linkPageNumber: number | null = currentPageNumber + maxPageButtonCount
  linkPageNumber =
    linkPageNumber > maxPageNumber ? maxPageNumber : linkPageNumber
  linkPageNumber = currentPageNumber === maxPageNumber ? null : linkPageNumber
  const props: ComponentProps<typeof PagerButton> = {
    href: getUrl(linkPageNumber, link),
  }
  return props
}

const getNextProps = (
  currentPageNumber: number,
  maxPageNumber: number,
  link: ((pageNumber: number) => string) | undefined,
) => {
  let linkPageNumber: number | null = currentPageNumber + 1
  linkPageNumber = currentPageNumber === maxPageNumber ? null : linkPageNumber
  const props: ComponentProps<typeof PagerButton> = {
    href: getUrl(linkPageNumber, link),
  }
  return props
}

const getPrevProps = (
  currentPageNumber: number,
  link: ((pageNumber: number) => string) | undefined,
) => {
  let linkPageNumber: number | null = currentPageNumber - 1
  linkPageNumber = linkPageNumber < 1 ? null : linkPageNumber
  const props: ComponentProps<typeof PagerButton> = {
    href: getUrl(linkPageNumber, link),
  }
  return props
}

const containerClassName = classNames('flex', 'gap-1')

export const Pager: React.FC<Props> = (props) => {
  const { maxPageButtonCount, currentPageNumber, maxPageNumber, link } = props

  const startPageNumber = useMemo(() => {
    const minStartPageNumber =
      currentPageNumber - Math.floor(maxPageButtonCount / 2)
    const maxStartPageNumber = maxPageNumber - maxPageButtonCount + 1
    return Math.max(1, Math.min(minStartPageNumber, maxStartPageNumber))
  }, [currentPageNumber, maxPageButtonCount, maxPageNumber])

  const buttons = useMemo(() => {
    return [...Array(maxPageButtonCount)].map((_, i) => {
      const pageNumber = startPageNumber + i
      const href = link?.(pageNumber) || ''
      return (
        <PagerButton
          key={i}
          disposition={pageNumber === currentPageNumber ? 'primary' : 'default'}
          data-testid={`page-button-${pageNumber}`}
          href={href}
        >
          {pageNumber}
        </PagerButton>
      )
    })
  }, [currentPageNumber, link, maxPageButtonCount, startPageNumber])

  const skipPrevButtonProps = useMemo(() => {
    return getSkipPrevProps(currentPageNumber, maxPageButtonCount, link)
  }, [currentPageNumber, link, maxPageButtonCount])

  const prevButtonProps = useMemo(() => {
    return getPrevProps(currentPageNumber, link)
  }, [currentPageNumber, link])

  const nextButtonProps = useMemo(() => {
    return getNextProps(currentPageNumber, maxPageNumber, link)
  }, [currentPageNumber, link, maxPageNumber])

  const skipNextButtonProps = useMemo(() => {
    return getSkipNextProps(
      currentPageNumber,
      maxPageButtonCount,
      maxPageNumber,
      link,
    )
  }, [currentPageNumber, link, maxPageButtonCount, maxPageNumber])

  return (
    <div className={containerClassName}>
      <PagerButton data-testid="skip-prev-button" {...skipPrevButtonProps}>
        <MdKeyboardDoubleArrowLeft />
      </PagerButton>
      <PagerButton data-testid="prev-page-button" {...prevButtonProps}>
        <MdKeyboardArrowLeft />
      </PagerButton>
      {buttons}
      <PagerButton data-testid="next-page-button" {...nextButtonProps}>
        <MdKeyboardArrowRight />
      </PagerButton>
      <PagerButton data-testid="skip-next-button" {...skipNextButtonProps}>
        <MdKeyboardDoubleArrowRight />
      </PagerButton>
    </div>
  )
}
