(function (window, document, undefined) {
            var hearts = [];
            window.requestAnimationFrame = (function () {
                return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
				    setTimeout(callback, 1000 / 60);
				}
            })();
            init();
            function init() {
                css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
                attachEvent();
                gameloop();
            }
            function gameloop() {
                for (var i = 0; i < hearts.length; i++) {
                    if (hearts[i].alpha <= 0) {
                        document.body.removeChild(hearts[i].el);
                        hearts.splice(i, 1);
                        continue;
                    }
                    hearts[i].y--;
                    hearts[i].scale += 0.004;
                    hearts[i].alpha -= 0.013;
                    hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
                }
                requestAnimationFrame(gameloop);
            }
            function attachEvent() {
                var old = typeof window.onclick === "function" && window.onclick;
                window.onclick = function (event) {
                    old && old();
                    createHeart(event);
                }
            }
            function createHeart(event) {
                var d = document.createElement("div");
                d.className = "heart";
                hearts.push({
                    el: d,
                    x: event.clientX - 5,
                    y: event.clientY - 5,
                    scale: 1,
                    alpha: 1,
                    color: randomColor()
                });
                document.body.appendChild(d);
            }
            function css(css) {
                var style = document.createElement("style");
                style.type = "text/css";
                try {
                    style.appendChild(document.createTextNode(css));
                } catch (ex) {
                    style.styleSheet.cssText = css;
                }
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            function randomColor() {
                return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
            }
        })(window, document);







//打开b站
function openb(){
    var op = confirm("看完记得点赞")
    if(op == true){
    window.open("https://v.douyin.com/H4iHjTGBq4c/");
  }

}

document.getElementById('toggleButton1').addEventListener('click',  
        function() {  
            // 获取ID为'content'的元素，通常是一个包含文本或其他内容的容器  
            var content = document.getElementById('c1');  
          
            // 检查'content'元素的maxHeight样式属性是否存在值  
            if (content.style.maxHeight) {  
                // 如果maxHeight存在值，说明内容当前是被限制的，我们将其设为null来展开全部内容  
                content.style.maxHeight = null; // 展开全部内容    
          
                // 同时将按钮的文本改为'展开阅读全文'，提示用户可以点击收起内容  
                this.textContent = '展开阅读全文'; // 按钮文本改为“收起全文”    
            } else {  
                // 如果maxHeight不存在值，说明内容当前是全部展开的，我们将其设为内容的scrollHeight来收起内容到限定高度  
                content.style.maxHeight = content.scrollHeight + 'px'; // 收起内容到限定高度    
          
                // 同时将按钮的文本改为'收起'，提示用户可以点击展开全部内容  
                this.textContent = '收起'; // 按钮文本改为“查看全文”    
            }  
        });
    document.getElementById('toggleButton2').addEventListener('click',  
        function() {  
            // 获取ID为'content'的元素，通常是一个包含文本或其他内容的容器  
            var content = document.getElementById('c2');  
          
            // 检查'content'元素的maxHeight样式属性是否存在值  
            if (content.style.maxHeight) {  
                // 如果maxHeight存在值，说明内容当前是被限制的，我们将其设为null来展开全部内容  
                content.style.maxHeight = null; // 展开全部内容    
          
                // 同时将按钮的文本改为'展开阅读全文'，提示用户可以点击收起内容  
                this.textContent = '展开阅读全文'; // 按钮文本改为“收起全文”    
            } else {  
                // 如果maxHeight不存在值，说明内容当前是全部展开的，我们将其设为内容的scrollHeight来收起内容到限定高度  
                content.style.maxHeight = content.scrollHeight + 'px'; // 收起内容到限定高度    
          
                // 同时将按钮的文本改为'收起'，提示用户可以点击展开全部内容  
                this.textContent = '收起'; // 按钮文本改为“查看全文”    
            }  
        });
		document.getElementById('toggleButton3').addEventListener('click',
		    function() {  
		        // 获取ID为'content'的元素，通常是一个包含文本或其他内容的容器  
		        var content = document.getElementById('c3'); 
		      
		        // 检查'content'元素的maxHeight样式属性是否存在值  
		        if (content.style.maxHeight) {  
		            // 如果maxHeight存在值，说明内容当前是被限制的，我们将其设为null来展开全部内容  
		            content.style.maxHeight = null; // 展开全部内容    
		      
		            // 同时将按钮的文本改为'展开阅读全文'，提示用户可以点击收起内容  
		            this.textContent = '展开阅读全文'; // 按钮文本改为“收起全文”    
		        } else {  
		            // 如果maxHeight不存在值，说明内容当前是全部展开的，我们将其设为内容的scrollHeight来收起内容到限定高度  
		            content.style.maxHeight = content.scrollHeight + 'px'; // 收起内容到限定高度    
		      
		            // 同时将按钮的文本改为'收起'，提示用户可以点击展开全部内容  
		            this.textContent = '收起'; // 按钮文本改为“查看全文”    
		        }  
		    });
			document.getElementById('toggleButton4').addEventListener('click',
			    function() {  
			        // 获取ID为'content'的元素，通常是一个包含文本或其他内容的容器  
			        var content = document.getElementById('c4');   
			      
			        // 检查'content'元素的maxHeight样式属性是否存在值  
			        if (content.style.maxHeight) {  
			            // 如果maxHeight存在值，说明内容当前是被限制的，我们将其设为null来展开全部内容  
			            content.style.maxHeight = null; // 展开全部内容    
			      
			            // 同时将按钮的文本改为'展开阅读全文'，提示用户可以点击收起内容  
			            this.textContent = '展开阅读全文'; // 按钮文本改为“收起全文”    
			        } else {  
			            // 如果maxHeight不存在值，说明内容当前是全部展开的，我们将其设为内容的scrollHeight来收起内容到限定高度  
			            content.style.maxHeight = content.scrollHeight + 'px'; // 收起内容到限定高度    
			      
			            // 同时将按钮的文本改为'收起'，提示用户可以点击展开全部内容  
			            this.textContent = '收起'; // 按钮文本改为“查看全文”    
			        }  
			    });
				document.getElementById('toggleButton5').addEventListener('click',
				    function() {  
				        // 获取ID为'content'的元素，通常是一个包含文本或其他内容的容器  
				        var content = document.getElementById('c5');  
				      
				        // 检查'content'元素的maxHeight样式属性是否存在值  
				        if (content.style.maxHeight) {  
				            // 如果maxHeight存在值，说明内容当前是被限制的，我们将其设为null来展开全部内容  
				            content.style.maxHeight = null; // 展开全部内容    
				      
				            // 同时将按钮的文本改为'展开阅读全文'，提示用户可以点击收起内容  
				            this.textContent = '展开阅读全文'; // 按钮文本改为“收起全文”    
				        } else {  
				            // 如果maxHeight不存在值，说明内容当前是全部展开的，我们将其设为内容的scrollHeight来收起内容到限定高度  
				            content.style.maxHeight = content.scrollHeight + 'px'; // 收起内容到限定高度    
				      
				            // 同时将按钮的文本改为'收起'，提示用户可以点击展开全部内容  
				            this.textContent = '收起'; // 按钮文本改为“查看全文”    
				        }  
				    });
			   

    let mucics = document.getElementById('音乐');
document.body.addEventListener('mousemove', function() {
        setTimeout(() => {
            mucics.play();
        }, 2000);
    }, false);
    // 动画旋转
var music = document.getElementById('music')    //获取音乐
var musicico = document.getElementById('musicico')   //获取音乐图标
var tem = true  //设置一个变量，用来控制音乐是否在播放。
document.getElementById("music").volume = 0.5;//设置音量大小
//定义一个函数，当用户单击的时候触发这个函数，从而实现音乐的暂停与播放。
function musiccc(){
	//tem用来控制音乐当前是否在播放。true代表音乐正在播放，false代表音乐当前正在处于暂停的状态。
	if(tem == false){
		music.play()  //播放音乐
		tem = true  
		document.getElementById('musicico').style.animationPlayState = 'running'  //播放音乐图标
	}else{
		music.pause()  //暂停音乐
		tem = false
		document.getElementById('musicico').style.animationPlayState = 'paused'  //暂停音乐图标
	}
}
        function nextMusic(){
            if (++i>songs.length-1) {
                i=0;
            }
            let song = songs[i];
            music.src = rootUrl + song;
            music.play();
        }
    let rootUrl = './re/song/';
    let isPlaying = true;
    let songs = [
    '半途兄弟 - 迷途羔羊 (逝去的过往) (V0).mp3',
    '刘芮 - 执迷不悟 (V0).mp3',
    '摇不正 - 爱错 (V0).mp3',
    '张德伊玲 - 少一点天份 (V0).mp3',
];
    
    let i = 0;
    music.src = rootUrl + songs[i];
    music.addEventListener('ended', function () {  
        i++
        music.src = rootUrl + songs[i];//换地址
        music.play();
    }, false);
