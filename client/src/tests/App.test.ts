import { loginUser } from 'functions';

it('login User', async () => {
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
