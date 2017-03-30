(function(){
            var html = document.querySelector('html');
            var rem = window.screen.width / 32;
             // 设置 rem 基准值
            html.style.fontSize = rem + 'px';
            console.log(rem);
})();