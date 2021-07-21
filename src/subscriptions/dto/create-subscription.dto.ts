export class CreateSubscriptionDto {
  readonly name: string;
  readonly price: number;
  readonly totalRides: number;
  readonly maxkm: number;
  readonly maxkmExceededRate: number;
}
