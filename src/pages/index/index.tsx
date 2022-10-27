import { View, Image, Text } from "@tarojs/components";
import {
  OsList,
  OsPicker,
  OsTabs,
  OsTabsHeader,
  OsTabsHeaderItem,
  OsTabsPanel
} from "ossaui";
import { useState } from "react";
import banner from "../../assets/banner.png";

import "./index.scss";
import Area2 from "../components/Area2/area2";
import Area1 from "../components/Area1/area1";
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
            <Area1 />
          </OsTabsPanel>
          <OsTabsPanel current={tabIndex} index={1}>
            <Area2 />
          </OsTabsPanel>
        </OsTabs>
      </View>
    </View>
  );
}
export default Index;
