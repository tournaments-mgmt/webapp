import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {Injectable, Signal} from "@angular/core";
import {AuthService} from "@services/auth/auth.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {Storage} from "@ionic/storage-angular";
import {from} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly isAuthenticated: Signal<boolean | undefined>;
  private readonly token: Signal<string>;

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private router: Router,
  ) {
    this.isAuthenticated = toSignal(this.authService.isAuthenticated.asObservable());
    this.token = toSignal(from(this.storage.get('auth')))
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    console.debug('canActivate', route);
    this.authService.checkoutToken(this.token());
    const isAuthorized = this.isAuthenticated()!
    this.router.navigateByUrl(!isAuthorized ? '/login' : 'tabs/');
    return isAuthorized;
  }
}
