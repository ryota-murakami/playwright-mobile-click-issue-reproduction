import { test, expect } from '@playwright/test'

test('Pagenation', async ({ page }) => {
  // ページ遷移
  await page.goto('http://localhost:3000/')

  // 初期ページは1ページ目
  await expect(page.getByRole('main')).toContainText('Reproduction')
  await expect(page.getByRole('main')).toContainText('CurrentPage: 1')
  // ページネーションボタンが表示されていること
  await expect(page.getByText('12345678910')).toBeVisible()
  await expect(page.getByTestId('page-button-1')).toBeVisible()
  // 一番のボタン(現在のページ)が緑色にハイライトされていること
  await expect(page.getByTestId('page-button-1')).toHaveClass(/btn-primary/)

  // [2]ボタンをクリックして2ページ目に遷移
  await page.getByTestId('page-button-2').click()
  // 2ページ目なのでCurrentPage:に2が表示されいること
  await expect(page.getByRole('main')).toContainText('CurrentPage: 2')
  await expect(page.getByTestId('page-button-2')).toBeVisible()
  // 2ページ目のボタンが緑色にハイライトされていること
  await expect(page.getByTestId('page-button-2')).toHaveClass(/btn-primary/)

  // [3]ボタンをクリックして3ページ目に遷移
  await page.getByTestId('page-button-3').click()
  // 3ページ目なのでCurrentPage:に3が表示されいること
  await expect(page.getByRole('main')).toContainText('CurrentPage: 3')
  await expect(page.getByTestId('page-button-3')).toBeVisible()
  // 3ページ目のボタンが緑色にハイライトされていること
  await expect(page.getByTestId('page-button-3')).toHaveClass(/btn-primary/)
})
