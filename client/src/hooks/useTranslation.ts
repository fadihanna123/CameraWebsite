const useTranslation = (val: string, lang: string) => {
    let data;

    if (lang === "en") {
        data = require(`../translations/${lang}.json`);
    } else {
        data = require(`../translations/sw.json`);
    }

    return data[val];
};

export default useTranslation;
