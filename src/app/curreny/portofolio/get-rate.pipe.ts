import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
import { ServiceService } from 'src/app/shared/service.service';

@Pipe({
  name: 'getRate',
})
export class GetRatePipe implements PipeTransform {
  constructor(private service: ServiceService) {}

  transform(value: string, ...args: unknown[]) {
    return this.service.getrate(value).pipe(
      map((Response) => {
        console.log(
          '------------------------------------------------------------'
        );
        console.log(Response);
        console.log(
          '------------------------------------------------------------'
        );
        return Response.targets[0].exchangeRate;
      })
    );
  }
}
