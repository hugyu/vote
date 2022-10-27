import { View, Image, Text } from "@tarojs/components";
import {
  OsList,
  OsPicker,
  OsTabs,
  OsTabsHeader,
  OsTabsHeaderItem,
  OsTabsPanel,
  OsButton
} from "ossaui";
import { useState } from "react";
import banner from "../../assets/banner.png";
import baisuishan from "../../assets/baisuishan.jpg";

import "./index.scss";
const INFO = ["矿泉水", "牛奶", "碳酸饮料"];
function Index() {
  // 修改picker选择的下标
  const [index, setIndex] = useState(0);
  // 修改tab选择地下标
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <View className="container">
      <View className="zhanwei"></View>
      <View className="image-container">
        <Image src={banner} className="image"></Image>
      </View>
      <View className="text-info">
        <Text className="left">—</Text>
        <Text>h公司饮品投票</Text>
        <Text className="right">—</Text>
      </View>
      <View className="count-info">
        <View className="item">
          <Text className="top">4</Text>
          <Text className="bottom">参与选手</Text>
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
      <View className="picker-container">
        <OsPicker
          className="picker"
          range={INFO}
          value={index}
          onCancel={() => console.log("cancel")}
          onConfirm={e => {
            console.log(e);
            setIndex(Number(e));
          }}
        >
          <OsList title="种类" desc={INFO[index]}></OsList>
        </OsPicker>
      </View>
      <View className="tab-container">
        <OsTabs
          size="large"
          renderHeader={
            <OsTabsHeader
              size="large"
              bgColor="rgba(255, 255, 255, 0.2)"
              space={60}
              value={0}
            >
              <OsTabsHeaderItem
                size="large"
                index={0}
                current={tabIndex}
                text="编号排序"
                selectedColor="#014ea9"
                onClick={value => setTabIndex(value)}
              />
              <OsTabsHeaderItem
                size="large"
                index={1}
                current={tabIndex}
                text="投票规则"
                selectedColor="#014ea9"
                onClick={value => setTabIndex(value)}
              />
            </OsTabsHeader>
          }
        >
          <OsTabsPanel current={tabIndex} index={0}>
            <View className="area1">
              <View className="area-item">
                <View className="area-image-container">
                  <Image className="area-image" src={baisuishan}></Image>
                </View>
                <View className="ticket-count">5票</View>
                <OsButton className="button">我喜欢</OsButton>
              </View>
              <View className="area-item">
                <View className="area-image-container">
                  <Image className="area-image" src={baisuishan}></Image>
                </View>
                <View className="ticket-count">5票</View>
                <OsButton className="button">我喜欢</OsButton>
              </View>
              <View className="area-item">
                <View className="area-image-container">
                  <Image className="area-image" src={baisuishan}></Image>
                </View>
                <View className="ticket-count">5票</View>
                <OsButton className="button">我喜欢</OsButton>
              </View>
              <View className="area-item">
                <View className="area-image-container">
                  <Image className="area-image" src={baisuishan}></Image>
                </View>
                <View className="ticket-count">5票</View>
                <OsButton className="button">我喜欢</OsButton>
              </View>
            </View>
          </OsTabsPanel>
          <OsTabsPanel current={tabIndex} index={1}>
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
                    <Text className="rule-info">
                      为了统计客户喜爱地饮料和口味
                    </Text>
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
                    <Text className="rule-info">
                      本活动解释权归h饮料公司所有
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OsTabsPanel>
        </OsTabs>
      </View>
    </View>
  );
}
export default Index;
