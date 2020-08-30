import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import styled from '@emotion/styled-base'
import Sticky from '../Sticky';
import actionCreators from '../../actions'
import styles from './stickies.styles'

const AddButton = styled('button')(styles.addButton)

class Stickies extends PureComponent {
  componentDidMount() {
    const { actions: { getStickies } } = this.props
    getStickies()
  }
  addStickyHandler = () => {
    const { actions: { addSticky } } = this.props
    addSticky()
  }
  render() {
    const { stickies: { data } } = this.props
    if(!data) {
      return null
    }
    return (
      <>
        <AddButton onClick={this.addStickyHandler}>+</AddButton>
        <div>
          {data.map((sticky, index) => (
            <Sticky data={sticky} stickyPosition={index} key={sticky._id} />
          ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ stickies }) => ({
  stickies,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Stickies)