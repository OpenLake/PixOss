import grid from '../../data/pixel';
import GridItem from '../../data/types';

function Grid() {
  const openModal = (item: GridItem) => {
    console.log(item);
  };

  return (
    <div className="min-w-fit grid-container overflow-y-scroll p-2">
      <div>
        {grid.map((row, rowIndex) => (
          <div className="row flex justify-center" key={rowIndex}>
            {row.map((pixel) => (
              <div
                key={Math.floor(Math.random() * 100000)}
                className={`pixel min-h-[100px] min-w-[100px] border-2 border-black bg-[${pixel.color}]`}
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
