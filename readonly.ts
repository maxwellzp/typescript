interface IUserEntity {
  readonly id: string;
}

const newUser: IUserEntity = {
  id: "aa1cacea-e068-11ed-b5ea-0242ac120002",
};

// Cannot assign to 'id' because it is a read-only property.ts
// newUser.id = "b6f00296-e068-11ed-b5ea-0242ac120002";
