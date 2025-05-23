import { it } from 'vitest';

// Components
import { loginUser } from '@functions/apiStore';
/**
 * @author Fadi Hanna
 */

it('login User', async () => {
  /**
   * @param { string } uname
   * @param { string } psw
   */
  const loginForm = {
    uname: 'Test',
    psw: '123',
  };
  const fn = await loginUser(loginForm);
  expect(loginForm).toMatchObject({
    uname: expect.any(String),
    psw: expect.any(String),
  });
  expect(fn).toMatchObject({
    accessToken: expect.any(String),
    author: expect.any(String),
  });
});
