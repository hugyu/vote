import { View,Text } from "@tarojs/components";
import './countInfo.scss'
function CountInfo() {
    return <View className="count-info">
    <View className="item">
      <Text className="top">4</Text>
      <Text className="bottom">参与饮品</Text>
    </View>
    <View className="item">
      <Text className="top">2</Text>
      <Text className="bottom">累计票数</Text>
    </View>
    <View className="item">
      <Text className="top">7631</Text>
      <Text className="bottom">访问量</Text>
    </View>
  </View>
}
export default CountInfo;