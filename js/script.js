Vue.config.devtools = true;

  
const add = new Vue (
    {
        el: '#app',
        data: {
            imgsList:['./img/mai.png','./img/una.png','./img/gioia.png','./img/end.png'],
            indexImg: 0
        },
        created() {
            setInterval(() => {
                this.next();
            }, 3000)

        },
        methods: {
            next: function() {
                if (this.indexImg === this.imgsList.length -1) {
                    this.indexImg = 0;
                } else {
                    this.indexImg ++;
                }
            },
            prev: function() {
                if (this.indexImg === 0) {
                    this.indexImg = this.imgsList.length -1;
                } else {
                    this.indexImg --;
                }
            },
            isCurrent: function(index) {
                if (index ===this.indexImg) {
                    return 'color';
                } else {
                    return '';
                }
            },
            moveTo: function(index) {
                this.indexImg = index;
            }

        }
    }
)