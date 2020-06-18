//===========//
//  IMPORTS  //
//===========//
import React, {useState} from "react";


export function TodoForm(props) {
    const [newForm, setNewForm] = useState('');

//   handleChanges = (e) => {
//     //==================================//
//     // update state with each keystroke //
//     //==================================//
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   // class property to submit form
// submitItem = e => {
//     e.preventDefault();
//     this.setState({ item: '' });
//     this.props.addItem(e, this.state.item);
// }
//   render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault()
          props.addTodo(newForm)
          setNewForm('')
      }}>
        <input
          type="text"
          value={newForm}
          name="item"
          placeholder="Add Todo Item"
          onChange={(event) => {
              setNewForm(event.target.value)
          }}
          autoComplete="off"
        />
        <button type='submit'> Add A New Todo</button>
      </form>
    );
  }

