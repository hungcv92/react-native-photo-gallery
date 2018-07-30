import React, { Component } from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import PhotoView from 'react-native-photo-view'
import PropTypes from 'prop-types'

export class Slide extends Component {
  render() {
    const { item } = this.props

    const inside = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height - 128,
    }

    return (
      <View
        style={[styles.container, { width: Dimensions.get('window').width, height: Dimensions.get('window').height }]}
      >
        <ActivityIndicator style={styles.loader} />
        <PhotoView source={item.image} maximumZoomScale={3} resizeMode="contain" style={[styles.image, inside]} />
        {item.overlay}
      </View>
    )
  }
}

Slide.propTypes = {
  item: PropTypes.object,
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -32,
  },
  loader: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 10,
    left: Dimensions.get('window').width / 2 - 10,
  },
}
