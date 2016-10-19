var TextParticles = function () {
    // var extend = function (target, source, isOverwrite) {
    //     if (isOverwrite == undefined) isOverwrite = true;
    //     for (var key in source) {
    //         if (!(key in target) || isOverwrite) {
    //             target[key] = source[key];
    //         }
    //     }
    //     return target;
    // };
    // var $ = function (id) {
    //     return document.getElementById(id) || id;
    // };
    // var $$ = function (tag, p) {
    //     return p.getElementsByTagName(tag);
    // };
    var addEvent = function (o, e, f) {
        o.addEventListener ? o.addEventListener(e, f, false) : o.attachEvent('on'+e, function () {f.call(o)});
    }
	window.requesetAnimFrame = function () {
		return window.requesetAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (fn) {
				window.setTimeout(fn, 1000/60);
			};
	}();
    
    var mouseX = 0, mouseY = 0;
    function onMousemove (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    function onResize (e) {
        
    }

    var init = function (opt) {
         // this.printText = opt;
        this.opt = {
            canvasId: 'canvas_text',
        }
		this.place = 0;

        //顯示字的相關設定
		this.textSetting = {
            printText: 'HSY',
            textAlign: 'center',
            textBaseline:'middle',
            font:'200px sans-serif',
            width: "", 
            height: ""
        }
        // extend(this.opt, opt);
        //canvas畫布的寬高設定
        this.canvasSetting = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.initialize();
    }
    init.prototype = {
        initialize: function () {
            if (this.opt.canvasId == null) {
                this.createCanvas();
            } else {
                this.canvas = document.getElementById(this.opt.canvasId);
                // this.canvas = $(this.opt.canvasId);
            }
            
            this.particles = [];
            
            this.ctx = this.canvas.getContext('2d');
            this.setCvsStyle(this.canvasSetting);
            this.fillText(this.textSetting);
            this.getImageData();
            this.bindEvent();
            this.loop();
        },
        bindEvent: function () {
            var _this = this;
            addEvent(this.canvas, 'mousemove', onMousemove);
            addEvent(window, 'resize', function (e) {
                _this.setCvsStyle();
            });
        },
        loop: function () {
            var _this = this;
            /*setInterval(function () {
                _this.doFrame();
			}, 20);
			*/
			requesetAnimFrame(function () {_this.loop()});
			this.doFrame();
        },
        doFrame: function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < this.particles.length; i ++) {
                var p = this.particles[i];
                p.update();
            }
        },
        getImageData: function () {
            var imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            for (var x = 0; x < imageData.width; x ++) {
                for (var y = 0; y < imageData.height; y ++) {
                    //var i = 4*(x * imageData.height + y);
                    
                    var i = 4*(y * imageData.width + x);
                    //每個點都有r,g,b,a四種數值，i+3等於取得a數值，判斷是否大於128(代表此位置透明度大於0.5是有顏色的像素點)
                    if (imageData.data[i + 3] > 128) {
						this.place ++;
                        //將符合的點除與4 在效能與效果上做取捨 並放入particles內
                        (this.place%4 == 0) && this.particles.push(new Particle(x, y, this.canvas));
                    }
                }
            }
        },
        //設定要顯示的字體
        fillText: function (textSetting) {
            if(textSetting.width == "") textSetting.width = this.canvas.width/2;
            if(textSetting.height == "") textSetting.height = this.canvas.height/3;
            this.ctx.textAlign = textSetting.textAlign;
            this.ctx.textBaseline = textSetting.textBaseline;
            this.ctx.font = textSetting.font;
            //fillText(要顯示的字,字的寬,字的高)
            this.ctx.fillText(textSetting.printText, textSetting.width, textSetting.height);
        },
        //設定canvas的寬高
        setCvsStyle: function (canvasSetting) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },
        //若沒有canvas element則呼叫此方法創建
        createCanvas: function () {
            var canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            this.canvas = canvas;
            return canvas;
        },
        claerCanvas: function(){
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    };
    
    var Particle = function (x, y, canvas) {
        this.endX = x;
        this.endY = y;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = Math.random() * this.canvas.width;
		this.y = Math.random() * this.canvas.height;

		this.vx = Math.random()*10 - 5;
		this.vy = Math.random()*10 - 5;

    }
	Particle.prototype = {
        move: function () {
			var disX = this.endX - this.x;
			var disY = this.endY - this.y;
			var dis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
			var force = dis * .01;
			var angle = Math.atan2(disY, disX); // atan2(x, y) 返回点(x, y)到x 轴的弧度
            
            var mouseF = 0, mouseA = 0;
            if (mouseX > 0 && mouseY > 0) {
                var dis = Math.pow((this.x - mouseX), 2) + Math.pow((this.y - mouseY), 2);
                mouseF = Math.min(5000/dis, 5000);
                mouseA = Math.atan2(this.y - mouseY, this.x - mouseX);
            } else {
                mouseF = 0;
                mouseA = 0;
            }

			this.vx += force * Math.cos(angle) + mouseF * Math.cos(mouseA);
			this.vy += force * Math.sin(angle) + mouseA * Math.sin(mouseA);

			this.vx *= 0.92;
			this.vy *= .92;

			//
            this.x += this.vx;
            this.y += this.vy;
        },
        render: function () {
            //設定字的顏色並填充
            this.ctx.fillStyle = '#faaca8';
            this.ctx.fillRect(this.x, this.y, 2, 2);
        },
        update: function () {
            this.move();
            this.render();
        }
    }
    
    return init;
}();
