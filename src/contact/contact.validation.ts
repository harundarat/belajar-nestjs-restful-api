import { z, ZodType } from 'zod';

export class ContactValidation {
  static readonly REGISTER: ZodType = z.object({
    first_name: z.string().min(1).max(100),
    last_name: z.string().min(1).max(100).optional(),
    email: z.string().email().min(1).max(100).optional(),
    phone: z.string().min(1).max(25).optional(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    first_name: z.string().min(1).max(100).optional(),
    last_name: z.string().min(1).max(100).optional(),
    email: z.string().email().min(1).max(100).optional(),
    phone: z.string().min(1).max(25).optional(),
  });
}
