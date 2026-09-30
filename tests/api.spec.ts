import { test, expect } from '@playwright/test';

test('GET a pokemon from the public API', async ({ request }) => {
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/ditto');
  await expect(response).toBeOK();

  const body = await response.json();
  expect(body.name).toBe('ditto');
});
