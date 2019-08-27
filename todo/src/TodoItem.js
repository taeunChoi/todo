import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props
    return (
      <div onClick={() => onToggle(id)}>
        <div onClick={(e) => {
          e.stopPropagation()
          onRemove(id)
        }}>??</div>
        <div>
          <div>{text}</div>
        </div>
        {
          checked && (<div>✓</div>)
        }
      </div>
    )
  }
}

export default TodoItem