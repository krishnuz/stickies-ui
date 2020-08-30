import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import actions from '../../actions'
import styles from './sticky.styles'

const TextArea = styled('textarea')(styles.stickyInput)
const Wrapper = styled('div')(styles.wrapper)
const SaveButton = styled('button')(styles.saveButton)
const DeleteButton = styled('button')(styles.deleteButton)
const ButtonsContainer = styled('div')(styles.buttonsContainer)

class Sticky extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.data.content
    }
  }
  onInputHandler = (event) => {
    this.setState({
      content: event.target.value,
    })
  }
  saveHandler = () => {
    const { actions: { saveSticky }, data, stickyPosition } = this.props
    const { content } = this.state
    saveSticky({
      id: data._id,
      content,
      stickyPosition,
    })
  }
  deleteHandler = () => {
    const { actions: { deleteSticky }, data, stickyPosition } = this.props
    deleteSticky({
      id: data._id,
      stickyPosition,
    })
  }
  render() {
    const {content} = this.state
    return (
      <Wrapper>
        <TextArea rows="12" cols="20" value={content} onInput={this.onInputHandler} />
        <ButtonsContainer>
          <SaveButton onClick={this.saveHandler}>
            Save
          </SaveButton>
          <DeleteButton onClick={this.deleteHandler}>
            Delete
          </DeleteButton>
        </ButtonsContainer>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(Sticky)
