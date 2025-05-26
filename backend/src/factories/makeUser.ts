import { User, UserProps } from "../entities/user/User";

export function makeUser(data: Partial<UserProps>): User {
  const defaultProps: UserProps = {
    name: '',
    email: '',
    password: '',
    computer: '',
    ...data,
  };

  return new User(defaultProps);
}
