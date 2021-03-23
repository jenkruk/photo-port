import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const {name, category, description, index} = currentPhoto;

    return (
    <div className="modalBackdrop">
        <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            {/* // Had to add .default for images to show.  See reasoning here: https://stackoverflow.com/questions/43247696/javascript-require-vs-require-default */}
            <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
            <p>
                {description}
            </p>
            <button onClick={onClose} type="button">
            Close this modal
            </button>
        </div>
    </div>
    )
}

export default Modal;
