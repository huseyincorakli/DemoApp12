import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

export const exampleHttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  
  return next(req).pipe(catchError(err=>{
    console.log(err);
    if(err instanceof ErrorEvent){
      console.log("error event");
      
    }
    else{
      var _err  = err;
      debugger
      if (err.status==401) {
        alert("401")
      }
      else{
        alert("http error")
      }
    }
    return throwError(()=>err.message[0])
  }));
};
