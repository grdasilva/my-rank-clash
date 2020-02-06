import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Trabalho
const authToken : string = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjkzMjI1NjFlLWU5YTItNDI2OS05MjBlLTgxN2NiNzk2NTJkMiIsImlhdCI6MTU4MDc1ODY5MCwic3ViIjoiZGV2ZWxvcGVyL2MyZTEzZjY5LWEzNDEtNzFhYS1iOWU0LTMwMzU1ZThiNDMyOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuNi4xNDQuNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.uwDkTsU2tUWQr67IdkZz9WoMUcTw-A0WypMCU4RZGE0FEwCsozFYOpw_hkuFFkIXlYVIWU76Nwfoklx7Sdt7qw';
// Casa
// const authToken : string = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZmMjViODMxLWNkOTAtNDM4Ni1iOTU3LTI0MWJmMzQzM2E5NyIsImlhdCI6MTU4MDkzODY2Mywic3ViIjoiZGV2ZWxvcGVyL2MyZTEzZjY5LWEzNDEtNzFhYS1iOWU0LTMwMzU1ZThiNDMyOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzcuMzMuMjU0LjE3MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.hqDXuL02g9v1n6qxxdeJrDKWnYsSjjpMonv8iOSwfC6KcFyVk1hZTf-_yGuTU3udKcEgrK-dZBUg7GeTB-Vfbw'; 

@Injectable({
    providedIn: 'root'
}) 

export class UserProfileService { 

    constructor(private http: HttpClient) { }

    public getClanByTag(tag: string): Observable<any> {
        tag = tag.replace(/#/g, '%23');
        const httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authToken,
                'Access-Control-Allow-Origin': '*' 
            })
        };
        return this.http.get('/api/clan/' + tag, httpOption);
    }
}
