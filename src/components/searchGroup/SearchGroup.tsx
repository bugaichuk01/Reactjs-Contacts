import React, {useState} from 'react';
import {useActions} from "../../_hooks/useActions";
import {Button, Container, TextField} from "@mui/material";

const SearchGroup = () => {
    const [search, setSearch] = useState<string>('')
    const {searchContact} = useActions();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchContact(search);
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