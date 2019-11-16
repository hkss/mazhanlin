var zhuanhuanshijiangeshi=function (time) {
    var date=new Date(time);
        var year=date.getFullYear();
        // var month=date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;
        var month=(date.getMonth()+1+"").padStart(2,'0');//9月 拿到8
        var day=(date.getDate()+"").padStart(2,'0');
        var hours=(date.getHours()+"").padStart(2,'0');
        var minutes=(date.getMinutes()+"").padStart(2,'0');
        var seconds=(date.getSeconds()+"").padStart(2,'0');
        var num=date.getDay();//0-6 日-六
        var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        //2019/09/20 12:10:10 星期三
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds} ${arr[num]}`
  }
  module.exports=zhuanhuanshijiangeshi