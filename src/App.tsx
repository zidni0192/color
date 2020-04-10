import React, { Component } from 'react'
interface State {
  block: Array<Array<string>>,
  darkest: boolean,
  category: string
}
class App extends Component<{}, State> {
  //for darkest
  state: State = {
    block: [
      ['001970', '445eec', '5d408c', 'd651e7', '445eec'],
      ['021970', '445eec', '445eec', '445eec', '4400ec'],
      ['021970', '445e00', '5a0001', '445eec', '445eec'],
      ['001970', '445eec', '445eec', '445eec', '445eec'],
      ['e21970', '445e00', 'ee0001', '445eec', '445e00'],
      ['e21970', '5ae701', '445eec', '445eec', '445eec'],
      ['e21970', '445eec', '445eec', '445eec', '445eec'],
      ['e21970', '445eec', '445eec', '445eec', '445eec'],
    ],
    darkest: false,
    category: 'red'
  }
  //for darkest
  addition = (hex: string) => {
    if (hex === 'f') {
      return 'e'
    } else if (hex === 'a') {
      return '9'
    } else if (hex === 'b') {
      return 'a'

    } else if (hex === 'c') {
      return 'b'

    } else if (hex === 'd') {
      return 'c'

    } else if (hex === 'e') {
      return 'd'

    } else {
      return `${Number(hex)}`
    }
  }
  checkingCategory = (color: any) => {
    let colorSplitted: any = color.split('')
    if (this.state.category === 'red' && (isNaN(colorSplitted[0]) || colorSplitted[0] > 1) && (isNaN(colorSplitted[1]) || colorSplitted[1] > 1)) {
      return color
    } else if (this.state.category === 'blue' && (isNaN(colorSplitted[4]) || colorSplitted[4] > 1) && (isNaN(colorSplitted[5]) || colorSplitted[5] > 1)) {
      return color
    } else if (this.state.category === 'green' && (isNaN(colorSplitted[2]) || colorSplitted[2] > 1) && (isNaN(colorSplitted[3]) || colorSplitted[3] > 1)) {
      return color
    } else {
      return ''
    }
  }
  render() {
    return (
      <div>
        <div>
          Darkest
          <input type="checkbox" onChange={() => this.setState({ darkest: !this.state.darkest })} />
        </div>
        <div>
          Category : &nbsp;
          <select value={this.state.category} onChange={(e: any) => this.setState({ category: e.target.value })}>
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
          </select>
        </div>
        {this.state.block.map((item: any,key) => {
          let Child: any = item.map((item: any, key: any) => {
            let newColor = item
            if (this.state.darkest) {
              newColor = ''
              let color: any = item.split('')
              color.map((item: any) => {
                return newColor += this.addition(item)
              })
            }
            newColor = this.checkingCategory(newColor)
            return <div key={key} style={{ background: newColor !== '' ? `#${newColor}` : '#fff', width: 100, height: 100, margin: 10 }
            }></div>
          })
          return <div key={key} style={{ display: 'flex', justifyContent: 'center' }}>{Child}</div>
        })}
      </div >
    )
  }
}

export default App
