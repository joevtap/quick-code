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

class ChildComponent extends Component {
    constructor(classname, template) {
        super(classname, template);
        this.element.addEventListener("click", this.toggleSize.bind(this));
    }

    toggleSize() {
        this.element.classList.toggle("size");
    }
}

const myComponent = new Component(
    "my_class",
    "<h1>Testando</h1>"
);

const myChildComponent = new ChildComponent(
    "my_childs_class",
    "<h2>I'm a child component</h2>"
);

container.appendChild(myComponent.element);
container.appendChild(myChildComponent.element);
