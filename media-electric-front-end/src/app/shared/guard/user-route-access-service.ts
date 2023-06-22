// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
// import {Principal} from "../auth/principal.service";
// import {Injectable} from "@angular/core";
//
//
// @Injectable({
//   providedIn: "root"
// })
// export class UserRouteAccessService implements CanActivate {
//
//     constructor(
//         private router: Router,
//         private principal: Principal,
//     ) {
//     }
//
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
//
//         const authorities = route.data['authorities'];
//         // We need to call the checkLogin / and so the principal.identity() function, to ensure,
//         // that the client has a principal too, if they already logged in by the server.
//         // This could happen on a page refresh.
//         return this.checkLogin(authorities, state.url);
//     }
//
//     checkLogin(authorities: string[], url: string): Promise<boolean> {
//         const principal = this.principal;
//         return Promise.resolve(principal.identity().then((account) => {
//             if (!authorities || authorities.length === 0) {
//                 return true;
//             }
//
//             if (account) {
//                 return principal.hasAnyAuthority(authorities).then((response) => {
//                     if (response) {
//                         return true;
//                     }
//                     this.router.navigate(['accessdenied']);
//                     return false;
//                 });
//             }
//
//             if (!account) {
//                 this.router.navigate(['/login']);
//             }
//             // this.router.navigate(['accessdenied']).then(() => {
//             //     // only show the login dialog, if the user hasn't logged in yet
//             //     if (!account) {
//             //         this.router.navigate(['/login']);
//             //     }
//             // });
//             return false;
//         }));
//     }
// }
