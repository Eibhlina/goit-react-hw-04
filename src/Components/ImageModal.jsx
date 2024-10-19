import Modal from 'react-modal'
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
  Modal.setAppElement('#root');



export const ImageModal =({modalIsOpen, selectedImage, handleColoseModal})=>{
    let subtitle;
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
    if(selectedImage){
        return (
            <Modal
            isOpen={modalIsOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={handleColoseModal}
            style={customStyles}
            contentLabel="Gallery modal"
            >
            
            <div className='modal-box'>
                <button onClick={handleColoseModal} className='close-button'>X</button>
                <img 
                className='modal-image'
                src={selectedImage.urls.full}
                alt={selectedImage.alt_description}
                />
                <p>{selectedImage.alt_description}</p>     
            </div>
            </Modal>
        );
    }
  }
  