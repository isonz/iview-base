class Func {

    /**
     * 获取地址栏参数
     */
    static getUrlParam (name){
        let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)","i");
        if(reg.test(window.location.href)){
            return unescape(RegExp.$2.replace(/\+/g," "))
        }
        return undefined
    }

}

export default Func
