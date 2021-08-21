import {
  View,
  Button,
  Text,
  Swiper,
  SwiperItem,
  Image,
} from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { useReady } from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";
import "./index.scss";
import { useState } from "react";
import Comp from "./components/Comp";
import Taro from "@tarojs/taro";
import pic1 from "../../assets/img/house/pic1.png";
import pic2 from "../../assets/img/house/pic2.jpeg";
import pic3 from "../../assets/img/house/pic3.jpeg";
// import avatar from "../../assets/img/avatar.png";
// import Taro from "@tarojs/taro";

export default inject(["study"])(
  observer(({ study }) => {
    useReady(() => {
      console.log("页面渲染已完成");
    });
    const [value, setValue] = useState("");

    const onChange = (searchValue) => {
      setValue(searchValue);
    };

    const handleSearch = () => {
      console.log("跳转搜索页");
      Taro.navigateTo({
        url: "/pages/index/search/search",
      });
    };

    return (
      <View className="my-index">
        <AtSearchBar onFocus={handleSearch} value={value} onChange={onChange} />

        {/* 轮播图 开始 */}
        <View>
          <Swiper
            className="test-h"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className="demo-text-1">
                <Image
                  style="width: 414px;height: 150px;background: #fff;"
                  src={pic1}
                />
                {/* 1 */}
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-2">
                <Image
                  style="width: 414px;height: 150px;background: #fff;"
                  src={pic2}
                />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-3">
                <Image
                  style="width: 414px;height: 150px;background: #fff;"
                  src={pic3}
                />
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        {/* 轮播图 结束 */}

        <View>
          <Comp />
        </View>

        <View className="at-row">
          <View className="at-col ">A</View>
          <View className="at-col ">B</View>
          <View className="at-col ">C</View>
        </View>

        <View className="at-row">
          <View className="at-col at-col-3">A</View>
          <View className="at-col at-col-6">B</View>
          <View className="at-col at-col-2">C</View>
          <View className="at-col at-col-1">D</View>
        </View>
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
