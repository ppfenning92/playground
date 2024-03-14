/*
 * compare different ID generation methods
 */

import { v4 as uuidv4, v1 as uuidv1, v3 as uuidv3, v5 as uuidv5 } from "uuid";
import { nanoid } from "nanoid";
import { generate } from "shortid";
import FlakeId from "flakeid";

import _FlakeId53 from "flakeid53";

// const FlakeId53 = _FlakeId53({
//   epoch: +new Date("2021-03-03"),
//   workerId: 2,
// });
import { Xid } from "xid-ts";
import KSUID from "ksuid";

const flakeId = new FlakeId();
const flakeId53 = new _FlakeId53({
  epoch: +new Date("2021-03-03"),
  workerId: 2,
});

const xid = new Xid();
const ksuid = KSUID.randomSync();
const uuid4 = uuidv4();
const uuid1 = uuidv1();
const uuid3 = uuidv3("hello", uuidv3.DNS);
const uuid5 = uuidv5("hello", uuidv5.DNS);
const nanoId = nanoid();
const shortId = generate();

console.log({
  flakeId: flakeId.gen(),
  flakeId53: await flakeId53.nextId(),
  xid: xid.toString(),
  ksuid: ksuid.string,
  uuid4,
  uuid1,

  uuid3,
  uuid5,
  nanoId,
  shortId,
});
