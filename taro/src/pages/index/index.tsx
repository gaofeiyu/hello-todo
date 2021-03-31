import Nerv, { Component } from 'nervjs'
import TodoItem from './components/todoItem.tsx'
// import { View, Button, Text } from '@tarojs/components'
// import { observer, inject } from 'mobx-react'

import './index.scss'

// type PageStateProps = {
//   store: {
//     counterStore: {
//       counter: number,
//       increment: Function,
//       decrement: Function,
//       incrementAsync: Function
//     }
//   }
// }

// interface Index {
//   props: PageStateProps;
// }

// @inject('store')
// @observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [{
            name: '测试1',
            checked: false
        }, {
            name: '测试2',
            checked: false
        }],
        count: 1,
        keywords: '',
        filters: {
            status: 'none'
        }
    };
}

addItem() {
    const list = this.state.list.slice();
    const count = this.state.count
    list.push({
        name: '新增' + count,
        checked: false
    });
    this.setState({
        count: count + 1,
        list
    })
}

removeItem(index) {
    const list = this.state.list.slice();
    list.splice(index, 1);
    this.setState({
        list
    })
}

editItem(value, index) {
    const list = this.state.list.slice();
    list[index].name = value;
    this.setState({
        list
    })
}

onSwitchItem(value, index) {
    const list = this.state.list.slice();
    list[index].checked = value;
    this.setState({
        list
    })
}

onChangeKeywords(keywords) {
    this.setState({
        keywords
    })
}

onFilterDone(type) {
    let status = this.state.filters.status;
    if (status === type) {
        status = 'none'
    } else {
        status = type
    }
    this.setState({
        filters: {
            status
        }
    })
}

filterList(list) {
    const filters = this.state.filters;
    const status = filters.status;
    let newList = [];
    newList = list.filter(item => {
        return (status === 'done' && item.checked) || (status === 'todo' && !item.checked) || status === 'none';
    })

    return newList;
}

render() {
    const keywords = this.state.keywords.trim();
    let list = [];
    if (keywords) {
        this.state.list.forEach(item => {
            if (item.name.indexOf(keywords) > -1) {
                list.push(item);
            }
        })
    } else {
        list = this.state.list.slice();
    }

    list = this.filterList(list);

    return (
        <div className='container'>
            <button onClick={() => this.addItem()}>添加</button>
            <div className='action-bar'>
                <label htmlFor='search'>
                    <input name='search' type='search' placeholder='输入关键字搜索' onChange={e => this.onChangeKeywords(e.target.value)} />
                </label>
                <button onClick={() => this.onFilterDone('done')}>已办</button>
                <button onClick={() => this.onFilterDone('todo')}>待办</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <TodoItem
                              key={index}
                              item={item}
                              removeItem={() => this.removeItem(index)}
                              editItem={value => this.editItem(value, index)}
                              onSwitchItem={value => this.onSwitchItem(value, index)}
                            ></TodoItem>
                        )
                    })
                }
            </ul>
        </div>
    );
}
}

export default Index
