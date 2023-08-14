import { useState } from 'react';
import grid from '../../data/pixel';
import GridItem from '../../data/types';
import PixelModal from '../Modal/PixelModal';

function Grid() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<GridItem>({
    color: '',
    name: '',
    message: '',
    pfp: '',
  });

  const openModal = (item: GridItem) => {
    setData(item);
    setOpen(!open);
  };

  return (
    <div className="min-w-fit grid-container overflow-y-scroll p-2">
      <PixelModal
        color={data.color}
        open={open}
        name={data.name}
        pfp={data.pfp}
        message={data.message}
      ></PixelModal>
      <div>
        {grid.map((row, rowIndex) => (
          <div className="row flex justify-center" key={rowIndex}>
            {row.map((pixel) => (
              <div
                key={Math.floor(Math.random() * 100000)}
                className={`pixel min-h-[100px] min-w-[100px] border-2 border-black`}
                style={{ backgroundColor: pixel.color }}
                onClick={() => openModal(pixel)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
