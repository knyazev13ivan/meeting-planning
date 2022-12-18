export interface IUser {
  id: number;
  email: string;
  password: string;
  fio: string;
}

export interface IAddRoleDto {
  name: string;
  userId: number;
}

export interface IUpdateUserRoleDto {
  names: string[];
  userId: string;
}

export interface ICreateUserDto {
  email: string;
  password: string;
  fio: string;
}

export interface ICreateRoleDto {
  name: string;
}

export interface IRole {
  id: number;
  name: string;
}

export interface IUpdateRoleDto {
  oldName: string;
  newName: string;
}

export interface ICreatedMeetupDto {
  name: string;
  description: string;
  location: string;
  target_audience: string;
  need_to_know: string;
  will_happen: string;
  reason_to_come: string;
  time: string;
  duration: number;
}

export interface IMeetup {
  id: number;
  name: string;
  description: string;
  location: string;
  target_audience: string;
  need_to_know: string;
  will_happen: string;
  reason_to_come: string;
  time: string;
  duration: number;
  createdBy: number;
  owner: IUser;
  users: IUser[];
}

export interface ISubscribeMeetupDto {
  idMeetup: number;
  idUser: number;
}
