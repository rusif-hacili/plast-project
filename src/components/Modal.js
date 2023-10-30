import React, { useState } from 'react';

function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        kategoriya: '',
        weight: '',
        name: '',
        number: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <h1>MÜRACİƏT ET</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.kategoriya}
                                    onChange={handleInputChange}
                                    placeholder='Satdığınız malın kategoriyası'
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    placeholder='Çəkisi'
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder='Ad və soyad'
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    id="number"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    placeholder='Əlaqə nömrəniz'
                                />
                            </div>
                            <div className='btn'>
                                <button type="submit">Müraciət et</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;


{/* <div className='modal'>
<h1>MÜRACİƏT ET</h1>
<form action="">
    <input type="text" placeholder='Satdığınız malın kateqoriyası' />
    <input type="text" placeholder='Çəkisi' />
    <input type="text" placeholder='Ad və soyad' />
    <input type="text" placeholder='Əlaqə nömrəniz' />
</form>
<button>Müraciət et</button>
</div> */}