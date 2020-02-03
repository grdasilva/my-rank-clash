import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserProfileService {

    private dataUrl: string = 'https://api.clashroyale.com/v1/players/';
    private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjkzMjI1NjFlLWU5YTItNDI2OS05MjBlLTgxN2NiNzk2NTJkMiIsImlhdCI6MTU4MDc1ODY5MCwic3ViIjoiZGV2ZWxvcGVyL2MyZTEzZjY5LWEzNDEtNzFhYS1iOWU0LTMwMzU1ZThiNDMyOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuNi4xNDQuNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.uwDkTsU2tUWQr67IdkZz9WoMUcTw-A0WypMCU4RZGE0FEwCsozFYOpw_hkuFFkIXlYVIWU76Nwfoklx7Sdt7qw';

    constructor(private http: HttpClient) { }

    getPlayerByTag(userTag) : Observable<any> {
        const API_URL = this.dataUrl + userTag;
        const headers = new HttpHeaders({'Authorization': this.authToken});
        // const headers = new HttpHeaders().append('Content-Type' 'application/json').append('Authorization', this.authToken);
        return this.http.get(API_URL);
    }
}
