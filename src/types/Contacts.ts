export interface IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ContactsState {
    contacts: IContact[] | null;
    filtered: IContact[] | null;
    loading: boolean;
    error: string | undefined;
}