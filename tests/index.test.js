import React from 'react'
import {cucumber as _} from 'gherkin-jest'
import {mount} from 'enzyme'
import request from 'request'
import App, {Button, Message} from '../src/App'


_.defineCreateWorld(() => ({
  button: mount(<Button  label='Say Hi?'/>),
  message: mount(<Message  />),
}))


_.When("the user presses button with text {string}", (world, msg)=> {
  expect(world.button.text()).toEqual(msg)
})

_.Then("the user sees message {string}", (world, msg)=> {
  expect(world.message.text()).toEqual(msg)
})
