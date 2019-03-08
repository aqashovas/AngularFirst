import { User } from './user.interface';
export interface Post {
    id: number,
    User: User,
    title: string,
    body: string  ,
    user:User

   
}