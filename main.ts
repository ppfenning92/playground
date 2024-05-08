import { Cert } from './type-overload';

const c: Cert = {
  id: 'id',
  name: 'name',
  grade: 0,
};

Cert.parse(c);
