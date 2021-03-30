let container = document.querySelector("#container");
let style = document.querySelector("#style");

// text文字内容有注释是因为这部分文字会直接作为css代码实时渲染，所以文字必须变成css注释；
// 注释书写过程中虽然还没有闭合但不影响已有的css样式渲染效果。
let text = `
/*
你好，我是袁广超
接下来我将通过手写代码的方式展示一下我的前端功底~
首先我要准备一个div
*/

#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/*
接下来，我将把 div 变成一个太极图
注意看好了
首先，用 div 画一个圆
*/

#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}

/*
《易经》曰：“是故易有太极，是生两仪”
阴阳鱼太极图由黑白两色交互构成，左边白色属阳，右边黑色属阴。
*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
太极阴阳两分而合和。
太极，外表现为阴阳合和之大一，内表现为阴阳两分，一分为二又合二而一。
故而，阴阳鱼太极图中有两个“鱼眼”，体现为“白鱼”有“黑眼”，“黑鱼”有“白眼”，表示阳中有阴、阴中有阳。
*/

#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

`

let html = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (text[n] === "\n") {
            html += "<br>";
        } else if (text[n] === " ") {
            html += "&nbsp;";
        } else {
            // 如果既不是回车也不是空格就照搬
            html += text[n];
        }

        container.innerHTML = html;
        // 实时添加样式
        style.innerHTML = text.substring(0, n);

        if (n < text.length - 1) {
            // 如果n不是text的最后一个字符就继续递归
            n += 1;
            step();
        }
    }, 10)
};

// 递归执行定时器代码
step();