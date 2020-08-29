import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actions from '../../actions'

class Sticky extends PureComponent {
  componentDidMount() {
    const { actions: { getStickies } } = this.props
    getStickies()
  }
  render() {
    return (
      <div>I am sticky component</div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(Sticky)
