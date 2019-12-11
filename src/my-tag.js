import { Slim } from 'slim-js'

export default Slim.tag(
  'my-tag',
  '<div>Hello, i am a custom element</div>',
  class MyTag extends Slim {
    onAdded () {
      console.log('slim-js component added successfully')
    }
  })
