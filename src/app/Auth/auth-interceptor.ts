import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("accessToken");


    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(localStorage.getItem("accessToken"));
    console.log("decodedToken");
    console.log(decodedToken);

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
