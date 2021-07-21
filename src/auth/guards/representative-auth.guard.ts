import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RepresentativeAuthGuard extends AuthGuard('representative') {}
