import { HttpInterceptorFn } from '@angular/common/http';

export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
  const deneme = req.clone({
    setHeaders:{
      Authorization:'Bearer XYZ'
    }
  })
  return next(deneme);
};
