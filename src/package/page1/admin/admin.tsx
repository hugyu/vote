import { View } from "@tarojs/components";
import { OsList, OsPicker } from "ossaui";
import { useEffect, useState } from "react";
import Echarts, { EChartOption } from "taro-react-echarts";
import echarts from "../../../assets/echarts";
import Table, { Columns } from "taro-react-table";
import "./admin.scss";
import { mineralReq, pureReq, drinksReq, yoghurtReq } from "../../../common/api";
const INFO = ["矿泉水", "牛奶", "饮料", "酸奶"];
const method = { 0: mineralReq, 1: pureReq, 2: drinksReq, 3: yoghurtReq };

function Admin() {
  const [index, setIndex] = useState(0);
  const [dataSource, setDataSource] = useState<any>([{}]);
  const [echartLoading, setEartLoading] = useState(true);
  const [columns, setColumns] = useState<Columns[]>([
    {
      title: "",
      dataIndex: "ticket_count"
    }
  ]);
  const [option, setOption] = useState<EChartOption>({
    tooltip: {
      trigger: "axis",
      show: true,
      confine: true
    },
    xAxis: {
      type: "category",
      data: [],
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [],
        type: "bar"
      }
    ]
  });
  const handleEchartsData = dataList => {
    console.log("handleEchartsData");

    const xData: Array<string> = [];
    const yData: Array<number> = [];
    dataList.forEach(data => {
      xData.push(data["label"]);
      yData.push(data["ticket_count"]);
    });
    const newOption = {
      tooltip: {
        trigger: "axis",
        show: true,
        confine: true
      },
      xAxis: {
        type: "category",
        data: xData,
        axisLabel: {
          interval: 0,
          rotate: 30
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: yData,
          type: "bar"
        }
      ]
    };

    setTimeout(() => {
      setOption(newOption);
      setEartLoading(false);
    }, 1000);

    return [xData, yData];
  };

  const getColumns = listData => {
    const newColumns: Columns[] = [{ title: "", dataIndex: "ticket_count" }];
    listData.map((data, _index) => {
      const object = { title: data["label"], dataIndex: data["label"] };
      if (columns.includes(object)) return;
      newColumns.push(object);
    });
    setColumns(newColumns);
  };
  const handleDataSource = listData => {
    const object = { ticket_count: "ticket_count" };
    listData.map((data, _index) => {
      const label = data["label"];
      const ticket_count = data["ticket_count"];
      object[label] = ticket_count;
    });
    setDataSource([object]);
  };
  useEffect(() => {
    method[index]().then(res => {
      const { result } = res;
      console.log(result);
      handleEchartsData(result);
      setColumns([
        {
          title: "",
          dataIndex: "ticket_count"
        }
      ]);
      getColumns(result);
      handleDataSource(result);
      setEartLoading(true);
    });
  }, [index]);
  return (
    <View className="container">
      <View className="zhanwei"></View>
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
      <View className="echarts-container">
        <Echarts
          echarts={echarts}
          option={option}
          lazyUpdate
          showLoading={echartLoading}
        />
      </View>
      <View className="table-container">
        <Table
          dataSource={dataSource}
          columns={columns}
          style={{ height: "100px" }}
        ></Table>
      </View>
    </View>
  );
}

export default Admin;
