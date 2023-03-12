export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
}

export const dummyEmployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "John",
    lastName: "Doe",
  },
];

export enum PageEnum {
  list,
  add,
}
