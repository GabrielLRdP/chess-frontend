import { Color } from '../../../shared/types/global_types';

export class Player {
  constructor(
    public userName: string,
    public color: Color,
    public userId: string
  ) {}
}
