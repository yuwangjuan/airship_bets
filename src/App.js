import Background from './img/bg.png';
import React,{Component} from 'react';
import './App.css';

import {Layout,Table,Checkbox,InputNumber,Button,Select} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const {Option} =Select;

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
];

const columns = [
  {
    title: '期号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '开奖号码',
    dataIndex: 'age',
    key: 'age',
  },
  
];
const dataSource1 = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
  },
];

const columns1 = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '公式名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '位置',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '号码',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '金额',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '中奖',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '盈亏',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '余额',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '模拟下注',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '开始停止',
    dataIndex: 'age',
    key: 'age',
  },
];
export default class App extends Component{
  render(){
    return (
      <div>
      <div className="main_box">
          <div className="main_left">
            <div className="main_left_head">
              <p className="main_left_text"><span>第</span><span className="add_red">20200512042</span><span>期:</span><span className="add_blue">10,10,10,10,10,10,10,01,10</span></p>
              <p className="main_left_time"> <span className="right_time">05:00</span></p>
            </div>
            <div className="main_left_contain_left">
            <p className="reward_list">开奖列表：</p>
            <Table className="tab_left" dataSource={dataSource} columns={columns} />;
            </div>
            <div className="main_left_contain_right">
            <p className="reward_list"><span className="format_list">公式列表：</span>
            <span><Checkbox>全选</Checkbox></span>
            <span><Checkbox>反选</Checkbox></span>
            <span className="stop_win">止赢：<InputNumber></InputNumber></span>
            <span className="stop_lose">止损：<InputNumber></InputNumber></span>
            <span className="get_change"><Button type="primary">修改</Button></span>
            <span className="all_get">总亏盈：</span>
            </p>
            <Table className="tab_left" dataSource={dataSource1} columns={columns1} />;
            </div>
          </div>
          <div className="main_right">
          <div className="main_right_box">
         <div className="all_mn"><Checkbox>全部模拟下注</Checkbox></div> 
            <div className="select_box">
            <Select defaultValue="lucy" style={{ width: 120 }} >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
            </div>
            <div className="select_box">
            <Select defaultValue="lucy" style={{ width: 120 }} >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
            </div>
            <div className="right_btn">
                <Button type="primary" style={{ width: 120,height:50,top:-20}}>开始</Button>
                <Button type="danger" style={{ width: 120,height:50,top:-35}}>停止</Button>
                <Button type="primary" style={{ width: 120,height:50,top:-50}}>账号</Button>
                <Button type="primary" style={{ width: 120,height:50,top:-65}}>公式</Button>
                <Button type="primary" style={{ width: 120,height:50,top:-80}}>设置</Button>
                <Button type="primary" style={{ width: 120,height:50,top:-50}}>删除</Button>
                <Button type="primary" style={{ width: 120,height:50,top:-60}}>清空</Button>
            </div>
          </div>
          
          </div>
      </div>
      </div>
    );
  }
  
}


