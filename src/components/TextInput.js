import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { string } from 'prop-types'


/**
 * General Input description.
 */
const TextInput = ({ placeholder }) => <TouchableOpacity>
  <Text>
    {placeholder}
  </Text>
</TouchableOpacity>


TextInput.propTypes = {
  /**
   * Description of prop "placeholder".
   */
  placeholder: string,
}

export default TextInput
