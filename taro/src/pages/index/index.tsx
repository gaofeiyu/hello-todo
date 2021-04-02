import { Component } from "react";
import { connect } from 'react-redux';
import TodoItem from "./components/todoItem";
import { add, remove, asyncAdd } from '../../store/actions/todoList'

import "./index.scss";

enum FilterStatusType {
  NONE = "none",
  DONE = "done",
  TODO = "todo",
}

type TodoItemType = {
  name: string;
  checked: boolean;
};

type TodoFilterType = {
  status: FilterStatusType;
};

type StateType = {
  list: TodoItemType[];
  count: number;
  keywords: string;
  filters: TodoFilterType;
};

type IndexProps = {};

type PageDispatchProps = {
  add: () => void
  remove: () => void
  asyncAdd: () => any
}
type PageOwnProps = {}

type PageState = {}

type IProps = StateType & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@(connect(
  ({ todoList }) => ({ todoList}),
  (dispatch) => ({
    add() {
      dispatch(add())
    },
    remove(index) {
      dispatch(remove(index))
    }
  })
) as any)

class Index extends Component<IndexProps, StateType> {
  constructor(props) {
    super(props);
    console.log(this);
    let filter: FilterStatusType = FilterStatusType.NONE;
    type FilterStatusTypeStrings = keyof typeof FilterStatusType;
    let filterType: FilterStatusTypeStrings = 'NONE';
    this.state = {
      list: [
        {
          name: "测试1",
          checked: false,
        },
        {
          name: "测试2",
          checked: false,
        },
      ],
      count: 1,
      keywords: "",
      filters: {
        status: FilterStatusType.NONE,
      },
    };
  }

  addItem() {
    const list = this.state.list.slice();
    const count = this.state.count;
    list.push({
      name: "新增" + count,
      checked: false,
    });
    this.props.add();
    this.setState({
      count: count + 1,
      list,
    });
  }

  removeItem(index) {
    const list = this.state.list.slice();
    list.splice(index, 1);
    this.setState({
      list,
    });
  }

  editItem(value, index) {
    const list = this.state.list.slice();
    list[index].name = value;
    this.setState({
      list,
    });
  }

  onSwitchItem(value, index) {
    const list = this.state.list.slice();
    list[index].checked = value;
    this.setState({
      list,
    });
  }

  onChangeKeywords(keywords) {
    this.setState({
      keywords,
    });
  }

  onFilterDone(type: FilterStatusType) {
    let status: FilterStatusType = this.state.filters.status;
    if (status === type) {
      status = FilterStatusType.NONE;
    } else {
      status = type;
    }
    this.setState({
      filters: {
        status,
      },
    });
  }

  filterList(list) {
    const filters = this.state.filters;
    const status = filters.status;
    let newList: TodoItemType[] = [];
    newList = list.filter((item: TodoItemType) => {
      return (
        (status === "done" && item.checked) ||
        (status === "todo" && !item.checked) ||
        status === "none"
      );
    });

    return newList;
  }

  render() {
    const keywords: string = this.state.keywords.trim();
    let list: TodoItemType[] = [];
    if (keywords) {
      this.state.list.forEach((item: TodoItemType) => {
        if (item.name.indexOf(keywords) > -1) {
          list.push(item);
        }
      });
    } else {
      list = this.state.list.slice();
    }

    list = this.filterList(list);

    return (
      <div className="container">
        <button onClick={() => this.addItem()}>添加</button>
        <div className="action-bar">
          <label htmlFor="search">
            <input
              name="search"
              type="search"
              placeholder="输入关键字搜索"
              onChange={(e) => this.onChangeKeywords(e.target.value)}
            />
          </label>
          <button onClick={() => this.onFilterDone(FilterStatusType.NONE)}>
            已办
          </button>
          <button onClick={() => this.onFilterDone(FilterStatusType.TODO)}>
            待办
          </button>
        </div>
        <ul>
          {list.map((item: TodoItemType, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                removeItem={() => this.removeItem(index)}
                editItem={(value) => this.editItem(value, index)}
                onSwitchItem={(value) => this.onSwitchItem(value, index)}
              ></TodoItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
