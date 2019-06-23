import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SignUpRequest} from "../register/register.component";
import {Observable} from "rxjs";
// import Any = jasmine.Any;
import {User} from "../../common/Model/user";
import {AccessToken} from "../model/acess-token";
// import Any = jasmine.Any;
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

host = `localhost:8080`;
loggedUser : User;
  constructor(private http: HttpClient) { }


  //registerUser(signUpRequest: SignUpRequest): Observable<Any>{
  registerUser(signUpRequest: SignUpRequest){
    console.log(signUpRequest);
   return this.http.post('http://localhost:8080/auth/register/', signUpRequest);
    // .subscribe(
  //     (val) => {
  //       console.log("POST call successful value returned in body",
  //         val);
  //     },
  //     response => {
  //       console.log("POST call in error", response);
  //     },
  //     () => {
  //       console.log("The POST observable is now completed.");
  //     });

    // this.http
    // .post(this.host+ `/auth/register`,signupRequest).pipe(catchError((this.handleError('registerUser'))))
  }


  //login(loginRequest): Observable<AccessToken> {
  login(loginRequest) {
    console.log(loginRequest);
    return this.http
      .post<AccessToken>('http://localhost:8080/auth/login/', loginRequest).subscribe(
        (val) => {

          localStorage.setItem("accessToken", val.accessToken);
          localStorage.setItem("accessToken Type", val.tokenType);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  getLoggedUser () {
   // console.log(loginRequest);

    return this.http
      .get<User>('http://localhost:8080/user/me').subscribe(
        (data: User) => {
          console.log("get logged user call successful value returned in body",
            data);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  private handleError(error: string) {
    console.log('error ' + error)
    return ;
  }

  public  isLogged()
  {

  }

  getDecodedAccessToken(): any {
    try{
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(localStorage.getItem("accessToken"));
      console.log("decodedToken");
      console.log(decodedToken);

    }
    catch(Error){
      return null;
    }
  }
}
