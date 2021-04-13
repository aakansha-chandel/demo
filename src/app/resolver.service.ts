import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>  {

  user:any ='user1';  
 
  constructor(private us:UsersService) { 
  }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
     return this.us.getUser().pipe(
      catchError((error) => {
        console.log(error)
        return empty();
      })
    );
  }
  
}
