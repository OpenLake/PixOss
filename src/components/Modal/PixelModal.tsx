import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import GridItem from '../../data/types';

interface ExtendedGridItem extends GridItem {
  open: boolean;
}

Modal.setAppElement('#root');

function PixelModal(prop: ExtendedGridItem) {
  const { name, message, pfp, open } = prop;

  console.log(open);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const [modalIsOpen, setIsOpen] = useState(open);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="mx-4">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="meta flex gap-4 justify-between items-center min-w-lg">
          <div className="img md:h-[69px] md:w-[69px] h-[50px] w-[50px] rounded-full m-2 overflow-hidden">
            <img className="w-full h-full" src={pfp} alt={name} />
          </div>
          <div className="text font-mono">
            <div className="name text-sm md:text-xl">{name}</div>
            <div className="text-sm md:text-xl max-w-xs md:max-w-sm">
              {message}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PixelModal;
