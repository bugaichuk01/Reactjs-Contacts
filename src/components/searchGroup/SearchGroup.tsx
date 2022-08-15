import React, {useState} from 'react';
import {Button, Container, TextField} from "@mui/material";
import {useTypedDispatch} from "../../_hooks/redux";
import {contactsSlice} from "../../store/reducers/contactsSlice";

const SearchGroup = () => {
    const dispatch = useTypedDispatch();
    const [search, setSearch] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(contactsSlice.actions.searchContact(search));
    }

    return (
        <Container>
            <form onSubmit={onSubmit} style={{marginTop: '30px', marginBottom: '50px', display: 'flex'}} className={'container d-flex mt-4 mb-4'}>
                <TextField fullWidth label="Search..." variant="outlined" value={search} onChange={onChange}/>
                <Button style={{marginLeft: '50px'}} variant={'contained'} type={'submit'}>Submit</Button>
            </form>
        </Container>
    );
}

export default SearchGroup;