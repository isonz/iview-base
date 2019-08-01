/**
 * USE: http://localhost:8080/#/?locale=zh-CN
 *
 * 引入vue-i18n
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import Func from '../libs/func'
import Cookies from 'js-cookie'

/**
 * 导入iview自带语言包
 */
import zh from 'iview/dist/locale/zh-CN';
import en from 'iview/dist/locale/en-US';

/**
 * 导入APP json语言包
 */
import app_zh from './zh-CN.json'
import app_en from './en-US.json';

/**
 * 多语言配置
 * Object.assign(zh,app_zh)
 * zh       : iview 语言包
 * app_zh   : App json语言包
 */
Vue.locale('zh-CN',Object.assign(zh, app_zh));
Vue.locale('en-US',Object.assign(en, app_en));


//获取本机系统语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;

function _lang(lang){
    if( 'undefined' === typeof lang ) return false;
    if( ['en-US', 'zh-CN'].includes(lang) ) return lang;
    return false;

}

const lang = _lang(Func.getUrlParam('locale')) || _lang(Cookies.get('locale')) || window.localStorage.getItem('language') || localLang || 'zh-CN';

Cookies.set('locale', lang);



//配置默认语言
//Vue.config.lang = 'zh-CN'; //默认为中文
//Vue.config.lang = 'en-US'; //默认为英文
Vue.config.lang = lang;   //自动

export default{

}

