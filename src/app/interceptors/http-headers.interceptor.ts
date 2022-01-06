import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'e0d606b2382b419da36d6c8afe955263',
            }
        });
        return next.handle(req);
    }
}