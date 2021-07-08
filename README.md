# react-profile-avatar

> Render a user avatar with either their initials or an image.

[![NPM](https://img.shields.io/npm/v/react-profile-avatar.svg)](https://www.npmjs.com/package/react-profile-avatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Contents

* [Install](#install)
* [Usage](#usage)
* [Props](#props)
* [License](#license)

<br/>

## Install

```bash
npm install --save react-profile-avatar
```

## Usage

```tsx
import React, { Component } from 'react'

import { Avatar } from 'react-profile-avatar'
import 'react-profile-avatar/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Avatar 
        name={'John Doe'}
        colour={'#FF0000'}
      />
    )
  }
}
```

See the [Examples](./example) for more info and advanced usage.

Build the Examples with `npm install` and then `npm start` to start the development server at [http://localhost:3000](http://localhost:3000).

Or view the online examples at [https://darylbuckle.github.io/react-profile-avatar](https://darylbuckle.github.io/react-profile-avatar).


## Props

| Property | Type | Description |
| -------- |------| ------------|
|    name | string | The name of the User. Used in the title and used to calculate the initials.
|    initials | string | Override the initials in the avatar. Recommended 2 characters max.
|    colour | string (hex e.g #000000) | Change the background colour of the avatar.
|    imageSrc | string | Url of an image. If set this will replace the initials. This can also be a Base64 string.
|    size | number | Size in pixels of the avatar. Default is 36px.
|    borderSize | number | Add a border to the outside of the avatar. Shows if greater than 0. Size is in pixels.
|    borderColour | string (hex e.g #000000) | Change the colour of the border.
|    onClick | function | Callback when clicking on the avatar.
|    style | css object | Apply additional styles to the avatar circle.
|    className | string | Apply additional classes to the avatar circle.
|    borderStyle | css object | Apply additional styles to the border.
|    borderClassName | string | Apply additional classes to the border.
|    containerStyle | css object | Apply additional styles to the container.
|    containerClassName | string | Apply additional classes to the container.
|    children | JSX | Render child components within the avatar.

<br/>


## License

MIT © [DarylBuckle](https://github.com/DarylBuckle) 2021
