import {
  View,
  Button,
  Text,
  Swiper,
  SwiperItem,
  Image,
} from "@tarojs/components";
import { observer, inject } from "mobx-react";
import Taro, { useReady } from "@tarojs/taro";
import { AtSearchBar, AtTabs, AtTabsPane } from "taro-ui";
import "./index.scss";
import { useState } from "react";
import HouseImg from "./components/houseImg/HouseImg";
import Comp from "./components/Comp";
import pic1 from "../../assets/img/house/pic1.png";
import pic2 from "../../assets/img/house/pic2.jpeg";
import pic3 from "../../assets/img/house/pic3.jpeg";
import house1 from "../../assets/img/house/house1.png";
import house2 from "../../assets/img/house/house2.jpeg";
import house3 from "../../assets/img/house/house3.jpeg";
import house4 from "../../assets/img/house/house4.jpeg";
import house5 from "../../assets/img/house/house5.jpeg";
import house6 from "../../assets/img/house/house6.jpeg";
import house7 from "../../assets/img/house/house7.jpeg";
// import avatar from "../../assets/img/avatar.png";
// import Taro from "@tarojs/taro";

export default inject(["study"])(
  observer(({ study }) => {
    const [current, setCurrent] = useState(0);
    const handleClick = (value) => {
      setCurrent(value);
    };

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
    const tabList = [{ title: "二手房" }, { title: "租房" }, { title: "新房" }];
    return (
      <View className='my-index'>
        <AtSearchBar onFocus={handleSearch} value={value} onChange={onChange} />

        {/* 轮播图 开始 */}
        <View>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className='demo-text-1'>
                <Image
                  style='width: 414px;height: 150px;background: #fff;'
                  src={pic1}
                />
                {/* 1 */}
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>
                <Image
                  style='width: 414px;height: 150px;background: #fff;'
                  src={pic2}
                />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>
                <Image
                  style='width: 414px;height: 150px;background: #fff;'
                  src={pic3}
                />
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        {/* 轮播图 结束 */}

        {/* 栅格组件 开始 */}
        <View>
          <Comp />
        </View>
        {/* 栅格组件 结束 */}
        <View className='at-row at-row__justify--around my-banner'>
          <View className='at-col at-col-5 banner-left'>
            <View>帮我找房</View>
            <View>金牌专属置业服务 &gt;</View>
          </View>
          <View className='at-col at-col-5 banner-right'>
            <View>帮我卖房</View>
            <View>助您卖得又快又好 &gt;</View>
          </View>
        </View>

        <View className='at-row at-row__justify--around'>
          <View className='at-col '>新上好房</View>
          <View className='at-col '>好房急售</View>
          <View className='at-col '>最新开盘</View>
          <View className='at-col '>热销小区</View>
        </View>

        <View className='at-row at-row__justify--between'>
          <View className='at-col at-col-5 .at-article__h2'>热门房源</View>
          {/* 标签页 开始 */}
          <View className='at-col at-col-5'>
            {/* <AtTabs current={current} tabList={tabList} onClick={handleClick}>
              <AtTabsPane current={current} index={0}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
                  标签页一的内容
                </View>
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
                  标签页二的内容
                </View>
              </AtTabsPane>
              <AtTabsPane current={current} index={2}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
                  标签页三的内容
                </View>
              </AtTabsPane>
            </AtTabs> */}
          </View>
        </View>
        {/* 标签页 结束 */}
        <AtTabs current={current} tabList={tabList} onClick={handleClick}>
          {/* 标签页 1 二手房 开始 */}
          <AtTabsPane current={current} index={0}>
            <View>
              <HouseImg />
            </View>
          </AtTabsPane>
          {/* 标签页 1 二手房 结束 */}

          {/* 标签页 2 租房 开始 */}
          <AtTabsPane current={current} index={1}>
            <View >
            <HouseImg />
            <HouseImg />
            <HouseImg />
            <HouseImg />
            <HouseImg />
            </View>
          </AtTabsPane>
          {/* 标签页 2 租房 结束 */}

          {/* 标签页 3 新房 开始 */}
          <AtTabsPane current={current} index={2}>
            {/* 图片描述组件 开始 */}
            <View className='compo-img '>
              <View className='at-row '>
                <View className='at-col '>
                  <Image
                    className=' imgDesc'
                    // mode='aspectFit'
                    style='width: 120px;height: 120px;background: #fff;'
                    // src='https://jdc.jd.com/img/400x400'
                    src={house1}
                    mode='scaleToFill'
                  />
                </View>
                <View className='at-col '>
                  <View>东海国际公寓(深圳)</View>
                  <View>公寓</View>
                  <View>福田|车公庙|75-200m|1-5室</View>
                  <View>129895元/m 975-2600万/套</View>
                </View>
              </View>
            </View>
            {/* 图片描述组件 结束 */}

            {/* 图片描述组件 开始 */}
            <View className='compo-img '>
              <View className='at-row '>
                <View className='at-col '>
                  <Image
                    className=' imgDesc'
                    style='width: 120px;height: 120px;background: #fff;'
                    // src='https://jdc.jd.com/img/400x400'
                    src={house2}
                    mode='scaleToFill'
                  />
                </View>
                <View className='at-col '>
                  <View>智荟天地创意大厦</View>
                  <View>公寓</View>
                  <View>福田|车公庙|75-200m|1-5室</View>
                  <View>129895元/m 975-2600万/套</View>
                </View>
              </View>
            </View>
            {/* 图片描述组件 结束 */}

            {/* 图片描述组件 开始 */}
            <View className='compo-img '>
              <View className='at-row '>
                <View className='at-col '>
                  <Image
                    className=' imgDesc'
                    style='width: 120px;height: 120px;background: #fff;'
                    // src='https://jdc.jd.com/img/400x400'
                    src={house3}
                    mode='scaleToFill'
                  />
                </View>
                <View className='at-col '>
                  <View>岁宝壹品</View>
                  <View>公寓</View>
                  <View>福田|车公庙|75-200m|1-5室</View>
                  <View>129895元/m 975-2600万/套</View>
                </View>
              </View>
            </View>
            {/* 图片描述组件 结束 */}

            {/* 图片描述组件 开始 */}
            <View className='compo-img '>
              <View className='at-row '>
                <View className='at-col left'>
                  <Image
                    className=' imgDesc'
                    // src='https://jdc.jd.com/img/400x400'
                    style='width: 120px;height: 120px;background: #fff;'
                    src={house4}
                    mode='scaleToFill'
                  />
                </View>
                <View className='at-col right'>
                  <View>华润置地笋岗中心</View>
                  <View>公寓</View>
                  <View>福田|车公庙|75-200m|1-5室</View>
                  <View>129895元/m 975-2600万/套</View>
                </View>
              </View>
            </View>
            {/* 图片描述组件 结束 */}
          </AtTabsPane>
          {/* 标签页 3 新房 结束 */}
        </AtTabs>
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
