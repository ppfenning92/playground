import { z } from 'zod';

export const Cert = z.object({
  id: z.string(),
  name: z.string(),
  grade: z.number().optional(),
});

export type Cert = z.infer<typeof Cert>;
