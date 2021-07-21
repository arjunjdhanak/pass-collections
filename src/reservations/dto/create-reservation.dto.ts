export class CreateReservationDto {
  readonly orderId: string;
  readonly userId: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly mobileNumber: number;
  readonly orderItems: Object;
  readonly timestamp: string;
  readonly address: Object;
  readonly images: string[];
  readonly videos: string[];
}
