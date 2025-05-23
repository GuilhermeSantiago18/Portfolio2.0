export interface UserProps {
  name: string;
  email: string;
  password: string;
  computer?: string;
  level?: number;
  [key: string]: unknown;
}

export class User {
  public readonly id?: number;
  private props: UserProps;

  constructor(props: UserProps, id?: number) {
    this.props = props;
    this.id = id;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get(attr: string) {
    return this.props[attr];
  }

  set(attr: string, value: unknown) {
    this.props[attr] = value;
  }

  toPrimitives() {
    return {
      ...this.props,
      id: this.id,
    };
  }
}
