import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import { getCategories, getTasks } from '../utils/helpers';
import { Status } from '../components';
const Board = () => {
  const [cate, setCate] = React.useState([]);
  const { filteredBoard } = useGlobalContext();
  console.log(filteredBoard);

  useEffect(() => {
    setCate(getCategories(filteredBoard.tasks));
    console.log(cate);
  }, [filteredBoard]);

  return (
    <section>
      {cate.map((stat, index) => {
        return (
          <Status
            key={index}
            stat={stat}
            tasks={getTasks(filteredBoard.tasks, stat)}
          />
        );
      })}
    </section>
  );
};

export default Board;
