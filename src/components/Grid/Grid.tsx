import { useState } from 'react';
import grid from '../../data/pixel';
import GridItem from '../../data/types';
import PixelModal from '../Modal/PixelModal';

function Grid() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<GridItem>({
    row: 0,
    col: 0,
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
    <div className="w-screen flex-row relative parent-component object-fit  p-2">
      <PixelModal
        color={data.color}
        open={open}
        name={data.name}
        pfp={data.pfp}
        message={data.message}
        row={data.row}
        col={data.col}
      ></PixelModal>
      <div>
        <div></div>
        {grid.map((row, rowIndex) => (
          <div className="row flex justify-center " key={rowIndex}>
            <div className="mr-6 text-center ml-2 w-1 self-center">
              {rowIndex + 1}
            </div>
            {row.map((pixel, ind) => (
              <div className="w-screen">
                <div>
                  {rowIndex === 0 ? (
                    <p className="text-center">{ind + 1}</p>
                  ) : null}
                </div>
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
      <div>
        <img
          src="https://raw.githubusercontent.com/Aditya062003/ashokchakra/main/ashokachakr.png"
          alt="Centered chakra Image"
          className="absolute lg:h-[32%] lg:w-[11%] h-[32%] w-[40%] l-1/3 lg:top-[36.5%] lg:left-[45.5%] top-[36.5%] left-[35%]"
        />
      </div>
    </div>
  );
}

export default Grid;
