declare let value: number;
declare let firtName: string;
declare let bool: boolean;
declare let num: number;
declare let bigNumber: bigint;
declare let lname: string;
declare let listOfNums: number[];
declare let listOfStrings: string[];
declare let booleanList: Array<boolean>;
declare let tuple: [number, string];
declare const enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare var green: Color;
declare let u: undefined;
declare let n: null;
declare let a: any;
interface Person {
    firstName: string;
    id: number;
    phone?: number;
}
interface Coder extends Person {
    job: "software";
}
declare let person: Person;
declare let coder: Coder;
declare function Sum(a: number, b: number): number;
declare function Greet(name: string): void;
interface PersonProptypes {
    firstName: string;
    lastName?: string;
}
declare function printName({ firstName, lastName }: PersonProptypes): string;
declare let __person: PersonProptypes;
declare let job: "engineer" | "coder" | "programmer";
declare let v: number | undefined;
declare type SoftwareJobs = "frontEnd" | "backEnd";
declare type ManagerJobs = "product Manager" | "sales Manager";
declare type Jobs = "engineer" | "coder" | "programmer";
declare type NJobs = SoftwareJobs | ManagerJobs;
declare let newJob: Jobs;
declare type RequestLoading = {
    state: "loading";
};
declare type RequestFailed = {
    state: "failed";
    errorCode: number;
};
declare type RequestSuccess = {
    state: "success";
    response: {
        title: string;
        status: boolean;
        id: number;
    };
};
declare type NetworkRequests = RequestLoading | RequestSuccess | RequestFailed;
declare let req: NetworkRequests;
declare let requ: NetworkRequests;
declare type ErrorType = {
    status: number;
    error?: {
        message: string;
    };
};
declare type UserData = {
    userName: string;
    userId: string;
    type: "user" | "guest";
};
declare type AdminData = {
    userName: string;
    userId: string;
    users: UserData[];
};
declare type UserResponse = ErrorType & UserData;
declare type AdminResponse = ErrorType & AdminData;
declare let userResponse: UserResponse;
declare let adminResponse: AdminResponse;
