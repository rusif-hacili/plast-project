import React, { useState } from 'react';

var arr = []

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
        arr.push(formData)
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        localStorage.setItem('Submit', JSON.stringify(arr))

    };

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>

            {showModal && (
                <div className="mainModal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <h2>MÜRACİƏT ET</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    id="kategoriya"
                                    name="kategoriya"
                                    value={formData.kategoriya}
                                    onChange={handleInputChange}
                                    placeholder='Satdığınız malın kategoriyası'
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="weight"
                                    name="weight"
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
