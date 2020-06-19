import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GridContainer.css'

const Grid = () => {



  const [grid, setGrid] = useState([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])

  const [count, setCount] = useState(0)

  const handleClick = (ith, jth) => {
    console.log(ith, jth)
    let newArr = [...grid];
    for (let i = ith; i <= ith; i++) {
      for (let j = jth; j <= jth; j++) {
        newArr[i][j] = 1
      }
    }
    setGrid([...grid, newArr])
  }

  function createGrid() {
    let arr = [];

    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push(<Col className={grid[i][j] === 0 ? 'grid-col' : 'grid-col-selected'} key={j * 2} onClick={() => handleClick(i, j)}></Col>)
      }
      arr.push(<Row className="grid-row" key={i * 2}>{row}</Row>)
    }
    return arr
  }

  return (
    <Container>
      {createGrid()}
    </Container>
  )
}

export default Grid