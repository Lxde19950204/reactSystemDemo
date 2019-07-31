import { Menu ,Icon} from 'antd';
import React from "react";
const { SubMenu } = Menu;

export default (sliderTabBars)=>sliderTabBars.map((item,index)=>{

    let fn = (secItem,fatherItem)=>{   
           return   <SubMenu
                    key={fatherItem.key}
                    title={
                        <span>
                            <Icon type="setting" />
                            <span>{fatherItem.name}</span>
                        </span>
                    }>
                    {
                        secItem.map((child)=>{
                            if(child.children){
                                return fn(child.children,child)
                            }
                            return <Menu.Item key={child.key} >{child.name}</Menu.Item>
                        })
                    }
                    </SubMenu>
        
    }

    if(item.children){
      return  fn(item.children,item)
    }else{

       return    <Menu.Item key={item.key}>
                    <Icon type="pie-chart" />
                    <span>{item.name}</span>
                </Menu.Item>

    }


})