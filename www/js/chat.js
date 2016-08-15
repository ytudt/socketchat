window.onload=function(){
  var hischat=new HiChat();
  hischat.init();
}


var HiChat=function(){
  this.socket=null;
}

HiChat.prototype={
  init:function(){
    var that=this;
    this.socket=io.connect();
    this.socket.on('connect',function(){
        document.getElementById('info').textContent = 'get yourself a nickname :)';
        document.getElementById('nickWrapper').style.display = 'block';
        document.getElementById('nicknameInput').focus();
    });

  },

}
