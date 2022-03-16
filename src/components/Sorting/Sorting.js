import { useState } from 'react';
import s from './Sorting.module.css';

export const Sorting = ({ onSort }) => {
  console.log(onSort);
  return (
    <div
      className="sorting"
      style={{
        fontFamily: 'Rubik',
      }}
    >
      <button className="btn btn-default" onClick={() => onSort('name')}>
        <i className="fa fa-sort-alpha-asc"></i> Sort by name
      </button>
      <button className="btn btn-default" onClick={() => onSort('class')}>
        <i className="fa fa-sort-numeric-desc"></i> Sort by class
      </button>
      <button className="btn btn-default" onClick={() => onSort('score')}>
        <i className="fa fa-sort-numeric-desc"></i> Sort by score
      </button>
      <button className="btn btn-default" onClick={() => onSort('speed')}>
        <i className="fa fa-sort-numeric-desc"></i> Sort by speed
      </button>
    </div>
  );
};

// export default class Toolbar extends Component {
//   state = {
//     dir: -1,
//   };

//   async sort(type) {
//     const isSorted = this.state[type];

//     let dir = isSorted ? 1 : -1;

//     const response = await fetch(
//       `'https://test-task-j.herokuapp.com/data?page=1&size=10&sortBy=${type}&sortDir=${dir}'`
//     );

//     const dataGeneral = await response.json();

//     setStudents(dataGeneral);
//     return students;
//   }

//   render() {
//     return (
//       <div className="sorting">
//         <button className="btn btn-default" onClick={() => this.sort('name')}>
//           <i className="fa fa-sort-alpha-asc"></i> Sort by name
//         </button>
//         <button className="btn btn-default" onClick={() => this.sort('class')}>
//           <i className="fa fa-sort-numeric-desc"></i> Sort by class
//         </button>
//         <button className="btn btn-default" onClick={() => this.sort('score')}>
//           <i className="fa fa-sort-numeric-desc"></i> Sort by score
//         </button>
//         <button className="btn btn-default" onClick={() => this.sort('speed')}>
//           <i className="fa fa-sort-numeric-desc"></i> Sort by speed
//         </button>
//       </div>
//     );
//   }
// }
