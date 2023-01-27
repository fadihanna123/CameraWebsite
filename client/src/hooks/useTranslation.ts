/**
 * Handle translations.
 *
 * @function useTranslation
 * @param { string } val
 * @param { string } lang
 * @returns { any } Any.
 */
const useTranslation = (val: string, lang: string): any => {
  let data;

  if (lang === 'en') {
    data = require(`../translations/${lang}.json`);
  } else {
    data = require('../translations/sw.json');
  }

  return data[val];
};

export default useTranslation;
