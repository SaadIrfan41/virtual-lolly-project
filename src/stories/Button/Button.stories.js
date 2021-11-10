import React from 'react'
import Button from './Button'

export default {
  title: 'Form/Button',
  component: Button,
  //   args: {
  //     children: 'Button',
  //   },
}

export const Small = () => <Button size='small'>Small</Button>
export const Medium = () => <Button size='medium'>Medium</Button>
export const Large = () => <Button size='large'>Large</Button>

// const Template = (args) => <Button {...args} />

// export const PrimaryA = Template.bind({})
// PrimaryA.args = {
//   variant: 'primary',
//   // children: 'Primary Args',
// }

// export const SecondaryA = Template.bind({})
// SecondaryA.args = {
//   variant: 'secondary',
//   // children: 'Secondary Args',
// }

// export const LongPrimaryA = Template.bind({})
// LongPrimaryA.args = {
//   ...PrimaryA.args,
//   // children: 'Long Primary Args',
// }
