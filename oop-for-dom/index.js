const container = document.querySelector(".container");

class Component {
    constructor(className, template) {
        this.className = className;
        this.template = template;

        this.element = document.createElement("div");
        this.element.className = className;
        this.element.innerHTML = template;
        this.element.addEventListener("click", this.toggleBg.bind(this));
    }

    toggleBg() {
        this.element.classList.toggle("bg");
    }
}

const myComponent = new Component(
    "my_class",
    "<h1>Hello World! I'm a compoment</h1>"
);

container.appendChild(myComponent.element);
