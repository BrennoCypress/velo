import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  //checkpoint de que a página foi carregada
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();

  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  await page.getByTestId('search-order-id').fill('VLO-VVY8L1');

  await page.getByTestId('search-order-button').click();

  await expect(page.getByTestId('order-result-status')).toBeVisible();

  await expect(page.getByTestId('order-result-id')).toContainText('VLO-VVY8L1');
  
  await expect(page.getByTestId('order-result-status')).toBeVisible();

  await expect(page.getByTestId('order-result-id')).toContainText('VLO-VVY8L1');


});