var template = `
    <div class="container">
        <button @click="addItem">添加</button>
        <label for="search">
            <input type="search" placeholder="输入关键字搜索" v-model="keywords" />
        </label>
        <ul>
            <li v-for="(item, index) in displayList" :key="index">
                {{item}}
                <button @click="removeItem(index)">移除</button>
                <input type="text" :value="item" @input="function(e){editItem(e, index)}"/>
            </li>
        </ul>
    </div>
`
var app = new Vue({
    el: '#app',
    template,
    data: {
        list: ['测试1', '测试2'],
        count: 1,
        keywords: '',
        
    },
    computed: {
        displayList() {
            var list = [];
            var keywords = this.keywords.trim();
            if(keywords) {
                this.list.forEach(item => {
                    if(item.indexOf(keywords) > -1) {
                        list.push(item);
                    }
                })
            } else {
                list = this.list;
            }
            return list;
        }
    },
    methods: {
        addItem() {
            this.list.push('新增' + this.count);
            this.count += 1;
        },
        removeItem(index) {
            this.list.splice(index, 1);
        },
        editItem(e, index) {
            console.log(e.target.value, index);
            this.$set(this.list, index, e.target.value);
        }
        
    }
});
