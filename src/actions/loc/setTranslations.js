import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import setLanguage from './setLanguage';

export default function setTranslations(lang) {
	var that={};
	that.lang=lang;
    return (dispatch, getState) => {
        //
        //import default as trans from '../../lang_'+lang;

        //dispatch(loadTranslations(trans));
        //dispatch(setLocale(lang));
        debugger;
        dispatch(setLocale(lang));
        dispatch(setLanguage(that.lang));
    };
}