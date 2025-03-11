/**
 * @author Fadi Hanna<fhanna181@gmail.com>
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
    data = require(`../translations/${lang}.json`);
  } else {
    data = require('../translations/sw.json');
  }

  console.log(data);

  return data[val];
};

export default useTranslate;
