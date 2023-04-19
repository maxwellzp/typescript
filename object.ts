interface IUser {
  login: string;
  password: string;
  active: boolean;
}

interface IAdmin {
  adminRights: string[];
}

interface IAdminUser extends IUser, IAdmin {}

const adminUser: IAdminUser = {
  login: "admin",
  password: "qwerty",
  active: true,
  adminRights: ["READ_REPORT", "EXPORT_REPORT"],
};

console.log(adminUser);
