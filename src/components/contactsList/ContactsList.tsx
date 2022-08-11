import React, {useEffect} from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {useActions} from "../../_hooks/useActions";
import {IContact} from "../../types/Contacts";
import ModalItem from "../modalItem/ModalItem";
import {Button, Card, CardActions, CardContent, Container, Grid, Typography} from "@mui/material";

const ContactsList = () => {
    const {filtered} = useTypedSelector(state => state.contacts)
    const {fetch, deleteContact} = useActions()
    const {addContact, editContact} = useActions();

    useEffect(() => {
        fetch();
    }, [])

    return (
        <Container>
                <Grid style={{marginBottom: '10px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {filtered && filtered.map((contact: IContact) => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={contact.id}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {contact.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {contact.email}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {contact.phone}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ModalItem func={(item: IContact) => editContact(item)} btnText={'Edit'} contact={contact} />
                                <Button color={'error'} onClick={() => deleteContact(contact.id)} size="small">Delete</Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    );
                })}
                </Grid>
            <ModalItem func={(item: IContact) => addContact(item)} btnText={'+ Add contact'} />
        </Container>
    );
}

export default ContactsList;