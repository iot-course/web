import React from 'react'
import { View,TouchableOpacity, StyleSheet, Text } from 'react-native'
import { string } from 'prop-types'


/**
 * General component description.
 */
const Button = ({ text }) => <TouchableOpacity>
  <Text>
    {text}
  </Text>
</TouchableOpacity>


Button.propTypes = {
  /**
   * Description of prop "text".
   */
  text: string,
}

export default Button
