import React from 'react'
import { Text } from 'react-native'

const Message = ({ msg }) => <Text>{ msg }</Text>

export default () => <Message msg="test" />
