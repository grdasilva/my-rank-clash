import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Trabalho => Natura
const authToken : string = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFhYmM1YzhmLWMyNTgtNGRmMC04NGY2LTgzZmRlMDAwNjM2YyIsImlhdCI6MTU4MTQyOTYyMiwic3ViIjoiZGV2ZWxvcGVyL2MyZTEzZjY5LWEzNDEtNzFhYS1iOWU0LTMwMzU1ZThiNDMyOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODkuMTYuMTcuMTI4Il0sInR5cGUiOiJjbGllbnQifV19.lr3ejrrUOvskO2Zo469blyL6MXiFC1fA8diid7fm-ofXlkbpVyxAO816CUtXxYh_kBmN5rQEic21qMHa1M03YQ';
// Casa 
// const authToken : string = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZmMjViODMxLWNkOTAtNDM4Ni1iOTU3LTI0MWJmMzQzM2E5NyIsImlhdCI6MTU4MDkzODY2Mywic3ViIjoiZGV2ZWxvcGVyL2MyZTEzZjY5LWEzNDEtNzFhYS1iOWU0LTMwMzU1ZThiNDMyOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzcuMzMuMjU0LjE3MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.hqDXuL02g9v1n6qxxdeJrDKWnYsSjjpMonv8iOSwfC6KcFyVk1hZTf-_yGuTU3udKcEgrK-dZBUg7GeTB-Vfbw'; 

@Injectable({
    providedIn: 'root'
}) 

export class UserProfileService { 

    constructor(private http: HttpClient) { }

    public getPlayerByTag(tag: string): Observable<any> {
        tag = tag.replace(/#/g, '%23');
        const httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authToken,
                'Access-Control-Allow-Origin': '*' 
            })
        };
        return this.http.get('/api/players/' + tag, httpOption);
    }

    public getUpcomingChestsOfPlayerByTag(tag: string): Observable<any> {
        tag = tag.replace(/#/g, '%23');
        const httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authToken,
                'Access-Control-Allow-Origin': '*' 
            })
        };
        return this.http.get('/api/players/' + tag + "/upcomingchests", httpOption);
    }

    public getBattleLogOfPlayerByTag(tag: string): Observable<any> {
        tag = tag.replace(/#/g, '%23');
        const httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authToken,
                'Access-Control-Allow-Origin': '*' 
            })
        };
        return this.http.get('/api/players/' + tag + "/battlelog", httpOption);
    }
}
