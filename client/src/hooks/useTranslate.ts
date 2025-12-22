/**
 * @author Fadi Hanna
 */

/**
 * Handle translations.
 * @function useTranslation
 * @param { string } val
 * @param { string } lang
 * @returns { any } Any
 * @example useTranslation("Start", "en");
 */
const useTranslate = (val: keyof Translations, lang: string): any => {
  let data;

  if (lang === 'en') {
    data = require('../translations/en.json');
  } else {
    data = require(`../translations/${lang}.json`);
  }

  return data[val];
};

export default useTranslate;
