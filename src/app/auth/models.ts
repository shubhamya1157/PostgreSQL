import {z} from 'zod';

export const signupPayLoadModel = z.object({
    firstName:z.string().min(2).max(17),
    lastName:z.string().nullable().optional(),
    email:z.email(),
    password:z.string().min(6)
})