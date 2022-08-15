import React, {useState} from 'react';
import {IContact} from "../../types/Contacts";
import {Box, Button, Modal, TextField} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModal {
    btnText: string;
    contact?: IContact;
    func: (item: IContact) => void
}

const ModalItem: React.FC<IModal> = ({btnText, contact, func}) => {
    const [formData, setFormData] = useState<IContact>(
        contact ? {...contact} :
            {
                id: Date.now(),
                name: '',
                email: '',
                phone: ''
            });

    const [open, setOpen] = React.useState<boolean>(false);
    const handleShow = () => setOpen(!open);

    const onFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });

    const onSubmit = () => {
        func({...formData})
        setOpen(false);
        setFormData({
            id: Date.now(),
            name: '',
            email: '',
            phone: ''
        })
    }

    return (
        <>
            <Button onClick={handleShow}>{btnText}</Button>
            <Modal
                open={open}
                onClose={handleShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={onSubmit}>
                        <TextField
                            type="text"
                            placeholder={'name'}
                            fullWidth
                            name={'name'}
                            value={formData.name}
                            onChange={onFormDataChange}
                            required
                        />
                        <TextField
                            type="email"
                            name="email"
                            fullWidth
                            style={{marginTop: '20px'}}
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={onFormDataChange}
                            required
                        />
                        <TextField
                            type="phone"
                            name="phone"
                            fullWidth
                            style={{marginTop: '20px'}}
                            placeholder="89001008866"
                            value={formData.phone}
                            onChange={onFormDataChange}
                            required
                        />
                        <div style={{marginTop: '20px'}}>
                            <Button color="primary" onClick={handleShow}>
                                Close
                            </Button>
                            <Button color="primary" type={'submit'}>
                                Save Changes
                            </Button>
                        </div>
                    </form>

                </Box>
            </Modal>
        </>
    );
}

export default ModalItem;