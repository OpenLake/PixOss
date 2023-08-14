import { useState } from 'react';
import Modal from 'react-modal';
import GridItem from '../../data/types';

interface ExtendedGridItem extends GridItem {
  open: boolean;
}

function PixelModal(prop: ExtendedGridItem) {
  const { name, message, pfp, open } = prop;

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

  const [modalIsOpen, setIsOpen] = useState(open);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="header">
          <button onClick={closeModal}>close</button>
        </div>
        <div className="meta flex justify-between">
          <div className="img h-1/2">
            <img src={pfp} alt={name} />
          </div>
          <div>{name}</div>
        </div>
        <div className="message">{message}</div>
      </Modal>
    </div>
  );
}

export default PixelModal;
