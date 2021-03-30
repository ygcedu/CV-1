let container = document.querySelector("#container");

let text = `
/*你好，我是袁广超
*接下来我将通过手写代码的方式展示一下我的前端功底~
*首先我要准备一个div
**/
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
        if (n < text.length - 1) {
            // 如果n不是text的最后一个字符就继续递归
            n += 1;
            step();
        }
    }, 10)
};

// 递归执行定时器代码
step();