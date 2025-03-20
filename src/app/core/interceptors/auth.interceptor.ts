import {HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {AuthService} from "@services/auth/auth.service";
import {inject} from "@angular/core";

export function AuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authService = inject(AuthService);
  console.log('AuthInterceptor', authService);
  const authToken = false //authService?.sessionId();
  const newReq = req.clone(
    authToken ? {
      setHeaders: {'Authorization': `Bearer ${authToken}`}
    } : {}
  );
  return next(newReq);
}
