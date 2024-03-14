import { IsInt, IsNumber, IsString } from "class-validator";
import { z } from "zod";

const ZodPerson = z.object({
  name: z.string(),
  age: z.number(),
});

type ZodPerson = z.infer<typeof ZodPerson>;

class ClassValidatorPerson {
  @IsString()
  name?: string;

  @IsInt()
  age?: string;
}

const personCV: ClassValidatorPerson = {
  name: "John",
  age: "20",
};

const personZod: ZodPerson = {
  name: "John",
  age: 20,
};

ZodPerson.parse(personCV);
ZodPerson.parse(personZod);
