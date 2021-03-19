<template>
    <div class="container">
        <button @click="addItem">添加</button>
        <div class="action-bar">
            <label for="search">
                <input name="search" type="search" placeholder="输入关键字搜索" v-model="keywords" />
            </label>
            <button @click="onFilterDone('done')">已办</button>
            <button @click="onFilterDone('todo')">待办</button>
        </div>
        <ul>
            <template v-for="(item, index) in displayList">
                <todo-item :key="index" :item="item" @edit="editItem" @remove="removeItem" @done="value => onSwitchItem(value, index)"></todo-item>
            </template>
        </ul>
    </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

export default {
    name: "App",
    components: {
        TodoItem
    },
    data() {
        return {
            list: [
                {
                    name: "测试1",
                    checked: false
                },
                {
                    name: "测试2",
                    checked: false
                }
            ],
            count: 1,
            keywords: "",
            filters: {
                status: "none"
            }

        }
    },
    computed: {
        displayList() {
            var list = [];
            var keywords = this.keywords.trim();
            if (keywords) {
                this.list.forEach(item => {
                    if (item.name.indexOf(keywords) > -1) {
                        list.push(item);
                    }
                });
            } else {
                list = this.list;
            }

            list = this.filterList(list);
            return list;
        }
    },
    methods: {
        addItem() {
            this.list.push({
                name: "新增" + this.count,
                checked: false
            });
            this.count += 1;
        },
        removeItem(index) {
            this.list.splice(index, 1);
        },
        editItem(value, index) {
            const item = this.list[index];
            item.name = value;
            this.$set(this.list, index, item);
        },

        onSwitchItem(value, index) {
            const item = this.list[index];
            item.checked = value;
            this.$set(this.list, index, item);
        },

        onFilterDone(type) {
            let status = this.filters.status;
            if (status === type) {
                status = "none";
            } else {
                status = type;
            }
            this.$set(this.filters, "status", status);
        },

        filterList(list) {
            const filters = this.filters;
            const status = filters.status;
            let newList = [];
            newList = list.filter(item => {
                return (
                    (status === "done" && item.checked) ||
                    (status === "todo" && !item.checked) ||
                    status === "none"
                );
            });

            return newList;
        }
    }
};
</script>

<style>
</style>
