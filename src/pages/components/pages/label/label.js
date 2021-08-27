/*
 * @Author: iChengbo
 * @Date: 2021-07-19 16:42:58
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-27 19:04:21
 * @FilePath: /taro-react-native/src/pages/components/pages/label/label.js
 */
import React from 'react'

// RadioGroup
import {
  View,
  Text,
  CheckboxGroup,
  Checkbox,
  Label,
  Radio,
  RadioGroup
} from '@tarojs/components'

import Header from '@/components/head/head'

import './label.scss'

export default class PageLabel extends React.Component {
  state = {
    checked: false
  }

  handleChange = e => {
    const { checked } = this.state
    this.setState({
      checked: !checked
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Label'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <Text className='example-header'>表单组件在label内</Text>
            <View className='example-body'>
              <CheckboxGroup>
                <Label className='example-body__label'>
                  <Checkbox value='美国'>美国</Checkbox>
                </Label>
                <Label className='example-body__label'>
                  <Checkbox value='中国' checked>
                    中国
                  </Checkbox>
                </Label>
              </CheckboxGroup>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <Text className='example-header'>表单组件在Label外</Text>
            <View className='example-body'>
              <RadioGroup className="example-body__radio-group">
                <Label className='example-body__label' for='gz'>
                  <Radio value='GuangZhou' id='gz'>GuangZhou</Radio>
                </Label>
                <Label className='example-body__label' for='sz'>
                  <Radio value='ShenZhen' id='sz'>ShenZhen</Radio>
                </Label>
              </RadioGroup>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
