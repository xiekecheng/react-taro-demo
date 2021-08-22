import { Image, View } from "@tarojs/components";
import house4 from "../../../../assets/img/house/house4.jpeg";
// import React from "react";

const HouseImg = () => {
  return (
    //   <View className='my-house-img'>
    //     <View className='at-row'>
    //       <View className='at-col'>
    // 			<Image
    // style='width: 120px;height: 120px;background: #fff;'
    // src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
    // 			/>
    // 			</View>
    //       <View className='at-col'>
    //         <View className='at-article__h2'>
    //           产权满五年红本优,笋盘,业主急寻有缘人
    //         </View>
    //       </View>
    //     </View>
    //   </View>

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
          <View>建发小巨蛋</View>
          <View>公寓</View>
          <View>福田|车公庙|75-200m|1-5室</View>
          <View>129895元/m 975-2600万/套</View>
        </View>
      </View>
    </View>
  );
};

export default HouseImg;
