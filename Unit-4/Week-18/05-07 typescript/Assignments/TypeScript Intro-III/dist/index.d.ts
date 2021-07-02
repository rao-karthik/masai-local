interface obj {
    title: string;
    status: boolean;
    id: number;
}
interface uName {
    firstName: string;
    lastName?: string;
}
declare function getName({ firstName, lastName }: uName): string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    prefix?: "Mr" | "Mrs" | "Miss";
    phone: number[];
    addresses: Address;
    email?: "string";
    firstName: string;
    lastName: string;
    middleName?: string;
}
declare function PhoneBook(personDetails: PersonDetails): PersonDetails[];
