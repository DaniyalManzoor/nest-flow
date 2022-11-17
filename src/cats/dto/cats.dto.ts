export class CreateCatDto {
  name: string;
  age: number;
}
export class UpdateCatDto {
  name?: string;
  age?: number;
}

export class ListAllEntities extends UpdateCatDto {
  limit: number;
  skip?: number;
}
