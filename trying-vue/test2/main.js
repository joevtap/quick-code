let app = new Vue({
    el: ".app",
    data: {
        value: 0,
    },
    methods: {
        plusOne: function () {
            this.value++;
        },
    },
});
