export interface IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ContactsState {
    contacts: IContact[],
    filtered: IContact[],
    loading: boolean;
    error: string;
}