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
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="meta flex justify-between items-center min-w-lg">
          <div className="img h-[69px] w-[69px] rounded-full m-2 overflow-hidden">
            <img src={pfp} alt={name} />
          </div>
          <div className="text font-mono">
            <div className="name text-xl">{name}</div>
            <div className="message max-w-sm">{message}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PixelModal;
