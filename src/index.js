import "./style.css";
import "./y.less";
import "./z.styl";
import png from "./assets/1.png"; //png就是就是图片的路径（这是file-loader做的）
console.log("jack");

const div = document.getElementById("app");

div.innerHTML = `<img src="${png}">`;

const button = document.createElement("button");
button.innerHTML = "懒加载";
div.appendChild(button);
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(module => {
    const fn = module.default; //之前导出该模块的默认值时，模块的默认值就是个函数
    fn(),
      () => {
        console.log("模块加载错误");
      };
  });
};
