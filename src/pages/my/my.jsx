/* eslint-disable import/no-duplicates */
import { Text, View } from "@tarojs/components";
import { AtAvatar, AtTag } from "taro-ui";
import { AtGrid } from "taro-ui";
import contract from "../../assets/img/contract.png";
import collect from "../../assets/img/collect.png";
import mycollect from "../../assets/img/mycollect.png";
import entrust from "../../assets/img/entrust.png";
import con_msg from "../../assets/img/con_msg.png";
import feedback from "../../assets/img/feedback.png";
import join from "../../assets/img/join.png";
import setting from "../../assets/img/setting.png";
import avatar from "../../assets/img/avatar.png";
import "./my.scss";
import Taro from "@tarojs/taro";
//
const MyPage = () => {
  const handleLogout = () => {
    console.log("退出登录");
    // Taro.navigateTo({
    //   url: "/pages/my/settings/settings",
    // });
  };
  const HandleService = (item, index) => {
    console.log("item,index", item, index);
    switch (index) {
      case 0:
        Taro.navigateTo({
          url: "/pages/my/contract/contract",                          
        });
        break;
      case 1:
        Taro.navigateTo({
          url: "/pages/my/collect/collect",
        });
        break;
      case 2:
        Taro.navigateTo({
          url: "/pages/my/entrust/entrust",
        });
        break;
      default:
        break;
    }
  };

  const HandleTool = (item, index) => {
    console.log("item,index", item, index);
    switch (index) {
      case 0:
        Taro.navigateTo({
          url: "/pages/my/contact/contact",
        });
        break;
      case 1:
        Taro.navigateTo({
          url: "/pages/my/advise/advise",
        });
        break;
      case 2:
        Taro.navigateTo({
          url: "/pages/my/join/join",
        });
        break;
      case 3:
        Taro.navigateTo({
          url: "/pages/my/settings/settings",
        });
        break;
      default:
        break;
    }
  };
  return (
    <View className='my-my'>
    
      {/* 用户信息 开始 */}
      <View className='user-info at-row'>
        {/* 头像 */}
        <AtAvatar className='avatar' circle image={avatar}></AtAvatar>
        {/* 认证信息 */}
        <View>
          <View>+86-138****7300</View>
          <AtTag size='small' circle>
            个人认证 &gt;
          </AtTag>
          <AtTag size='small' circle>
            企业认证 &gt;
          </AtTag>
        </View>
      </View>
      {/* 用户信息 结束 */}

      {/* 我的服务 开始 */}
      <View className='my-service'>
        <Text>我的服务</Text>
        <View>
          <AtGrid
            hasBorder={false}
            onClick={(item, index) => {
              HandleService(item, index);
            }}
            data={[
              {
                // image: "../../assets/img/contract.png",
                image: contract,
                value: "我的合同",
              },
              {
                image: collect,
                value: "我的收藏",
              },
              {
                // image: "../../assets/img/entrust.png",
                image: entrust,
                value: "我的委托",
              },
            ]}
          />
        </View>
      </View>
      {/* 我的服务 结束 */}

      {/* 工具与服务 开始 */}
      <View className='my-tool'>
        <Text>工具与服务</Text>
        <AtGrid
          hasBorder={false}
          onClick={(item, index) => {
            HandleTool(item, index);
          }}
          data={[
            {
              image: con_msg,
              value: "联系客服",
            },
            {
              image: feedback,
              value: "意见反馈",
            },
            {
              image: join,
              value: "加入乐有家",
            },
            {
              image: setting,
              value: "设置",
            },
          ]}
        />
      </View>
      {/* 工具与服务 结束 */}

      {/* 退出登录 */}
      <View className='my-logout'>
        <View className='at-article__h2' onClick={handleLogout}>
          退出登录
        </View>
      </View>
    </View>
  );
};

export default MyPage;
