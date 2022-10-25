//日期+时间
export function transDate(val, type) {
    if (!val) return
    if ((typeof val === 'string') && (/^[0-9]+$/.test(val))) {  //时间戳的字符串无法解析
        val = Number(val)
    }
    return formatDateTime(val, type)
}

function formatDateTime(val, type) {
    var date = new Date(val);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    if (type == 1) {
        return y + '-' + m + '-' + d;
    } else {
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }
};

//得到两个位置的偏差距离
//@params: 两个位置的经纬度
export function distance(latitude1, longitude1, latitude2, longitude2) {
    if (latitude1 && longitude1 && latitude2 && longitude2) {
        let radLat1 = (latitude1 * Math.PI) / 180.0;
        let radLat2 = (latitude2 * Math.PI) / 180.0;
        let a = radLat1 - radLat2;
        let b = (longitude1 * Math.PI) / 180.0 - (longitude2 * Math.PI) / 180.0;
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) *
            Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378137; // EARTH_RADIUS;
        s = Math.round(s * 10) / 10;
        return s;
    } else {
        return 0
    }
}

//格式化
export function formatDistance(distance) {
    if(!distance){
        return ' 0.00m'
    }else if(distance < 1000){
        return (Math.floor(distance * 100) / 100).toFixed(2) + 'm'
    }else{
        return (Math.floor((distance / 1000) * 100) / 100).toFixed(2) + 'km'
    }
}
