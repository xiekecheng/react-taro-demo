// import { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { useReady } from "@tarojs/taro";
import Comp from "./components/Comp";
import "./index.scss";

export default inject(["study"])(
  observer(({ study }) => {
    useReady(() => {
      console.log("页面渲染已完成");
    });
    return (
      <View className="index">
        <View>我是index首页</View>
        <Button onClick={() => study.increment(10)}>+</Button>
        <Button onClick={() => study.decrement(-5)}>-</Button>
        <Button onClick={() => study.incrementAsync(100)}>Add Async</Button>
        <Text>{study.counter}</Text>
        <Comp />
      </View>
    );
  })
);

// @inject(['study'])
// @observer
// class Index extends Component {
//   componentWillMount () { }
//
//   componentDidMount () { }
//
//   componentWillUnmount () { }
//
//   componentDidShow () { }
//
//   componentDidHide () { }
//
//   increment = () => {
//     const { counterStore } = this.props.study
//     counterStore.increment()
//   }
//
//   decrement = () => {
//     const { counterStore } = this.props.study
//     counterStore.decrement()
//   }
//
//   incrementAsync = () => {
//     const { counterStore } = this.props.study
//     counterStore.incrementAsync()
//   }
//
//   render () {
//     const { counterStore: { counter } } = this.props.study
//     return (
//       <View className='index'>
//         <View>我是index首页</View>
//         <Button onClick={this.increment}>+</Button>
//         <Button onClick={this.decrement}>-</Button>
//         <Button onClick={this.incrementAsync}>Add Async</Button>
//         <Text>{counter}</Text>
//       </View>
//     )
//   }
// }
// export default Index
