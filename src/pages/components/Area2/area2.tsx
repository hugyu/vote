import { View, Text } from "@tarojs/components";
import "./area2.scss";
function Area2() {
  return (
    <View className="area2">
      <View className="rules">
        <View className="rules-top">
          <Text className="first">1</Text>
          <Text className="rules-info">活动规则</Text>
        </View>
        <View className="rules-list">
          <View className="rule">
            <Text className="label">主办方</Text>
            <Text className="rule-info">h饮料公司</Text>
          </View>
          <View className="rule">
            <Text className="label">规则</Text>
            <Text className="rule-info">每人可投一次</Text>
          </View>
        </View>
      </View>
      <View className="rules">
        <View className="rules-top">
          <Text className="first">2</Text>
          <Text className="rules-info">活动介绍</Text>
        </View>
        <View className="rules-list">
          <View className="rule">
            <Text className="label">目的</Text>
            <Text className="rule-info">为了统计客户喜爱地饮料和口味</Text>
          </View>
        </View>
      </View>
      <View className="rules">
        <View className="rules-top">
          <Text className="first">3</Text>
          <Text className="rules-info">官方声明</Text>
        </View>
        <View className="rules-list">
          <View className="rule">
            <Text className="label">声明</Text>
            <Text className="rule-info">本活动解释权归h饮料公司所有</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Area2;
