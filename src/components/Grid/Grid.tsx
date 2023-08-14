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
    <div className="w-screen h-screen  flex-row  object-fit  p-2">
      <PixelModal
        color={data.color}
        open={open}
        name={data.name}
        pfp={data.pfp}
        message={data.message}
      ></PixelModal>
      <div>
        <div></div>
        {grid.map((row, rowIndex) => (
          <div className="row flex justify-center " key={rowIndex}>
            <p className="w-7/12 text-center self-center">{rowIndex}</p>
            {row.map((pixel, ind) => (
              <div className="w-screen">
                <div>{rowIndex === 0 ? <p>{ind}</p> : null}</div>
                <div
                  key={Math.floor(Math.random() * 100000)}
                  className={`pixel grow  min-h-[40px] border-2 border-black`}
                  style={{
                    backgroundColor:
                      pixel.color === 'saffron'
                        ? 'var(--color-saffron)'
                        : pixel.color,
                  }}
                  onClick={() => openModal(pixel)}
                ></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
