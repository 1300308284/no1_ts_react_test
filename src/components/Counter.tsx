import * as React from 'react'

interface Props {
  name: string
}
interface State {
  number: number
  addNumber: number
}
export default class Counter extends React.Component<Props, State, any> {
  constructor(props:Props){
    super(props);
    this.state = {
      number: 0,
      addNumber: 1
    }
  }
  // state = {
  //   number: 0,
  //   addNumber: 1
  // }
  handelChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event:React.ChangeEvent 这只是指明了event的数据类型, 但还需要指明, 这个事件在哪个元素上触发的,
    // 所以需要泛型,指定触发这个事件的元素
    this.setState(
      { addNumber: parseInt(event.target.value) }
    )
  }
  handelClick = () => {
    this.setState(
      { number: this.state.number + this.state.addNumber }
    )
  }
  render() {
    let { name } = this.props;
    let { number, addNumber } = this.state;
    return (
      <div>
        <p>{name}: {number}</p>
        <input type="text" value={addNumber} onChange={this.handelChangeInput} />
        <button onClick={this.handelClick}>++++</button>
      </div>
    )
  }
}
