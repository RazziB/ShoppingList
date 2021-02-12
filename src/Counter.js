import * as React from "react";
import ListItem from "./ListItem";

class Counter extends React.Component {

    state = {
        text: "",
        vale: true,
        todoList: []

    };

    addItem = () => {
        if(this.state.todoList.length >= 15)
            alert("NO MORE ITEMS")


        else {
            this.state.todoList.push(this.state.text)
            this.setState(    // refresh the list after the change
                {
                    todoList: this.state.todoList
                })
        }
        this.setState(  // clean the text from the input
            {text: ""}
        )


    };

    removeItem = (event) =>{
        console.log(event.target.innerText)


        this.setState(
            {todoList: this.state.todoList.filter(listItem =>
                   (!(listItem === event.target.innerText))
                )}
        )
    }





    render() {
        return(
        <div>
            <h4>Missions Left:{this.state.todoList.length}</h4>

            <ol>
            {this.state.todoList.map(
                (item) =>
                    <li onClick={this.removeItem}>{item}</li>
            )}
            </ol>



            <input value={this.state.text} onChange={this.onTextChange}/>

            <button onClick={this.addItem} disabled={this.state.text.length == 0}>
                Add</button>
            <button onClick={this.removeAll}>Remove All</button>

        </div>
        )

    }
    removeAll = () =>{
        this.setState(
            {todoList: []}
        )
    }

    onTextChange = (event) => {
        var booli;
        if(event.target.value.length == 0){
            booli = true
        } else
            booli = false
        this.setState({
            text: event.target.value

        })
        this.setState(
            {
                vale: booli
            }
        )


    }
}


export default Counter;