import { Image, View } from "@tarojs/components";

const MsgComp = () => {
  return (
    <View className='my-msg-component'>
      <View className='at-row'>
        {/* 头像 */}
        <View className='at-col'>
          <Image
            style='width: 55px;height: 55px;background: #fff;'
            src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
          />
        </View>

        {/* 消息描述 */}
        <View className='at-col'>
          <View className='at-row at-row__justify--between'>
						<View className='at-col'>王小罗 学区专家 美丽365分行</View>
						<View className='at-col'>8月21日 9:05</View>
					</View>
          <View>请问您要哪个小区的房子呀?麻烦您回复一下</View>
        </View>
      </View>
    </View>
  );
};

export default MsgComp;
