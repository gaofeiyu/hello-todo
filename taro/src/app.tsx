import Nerv, { Component } from 'nervjs'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.scss'

const store = {
  counterStore
}

type Props = {
  children: any
}
class App extends Component {

  constructor(props) {
      super(props);
      console.log(props)
      this.props = props;
  }

  componentDidMount () {}

  props: Props;


  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    console.log(this);
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
