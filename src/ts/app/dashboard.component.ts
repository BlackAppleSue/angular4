import { Component, OnInit, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
declare var Vue: any; // Magic

interface hero {
    name: string;
    power: string;
}

//[routerLink]="['/detail', hero.power]"

/*
Pass data from parent to child with input binding
@Input decorations.
he second @Input aliases the child component property name masterName as 'master'.
*/

@Component({
    selector: 'hero-child',
    template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, power:{{power}}.</p>
  `
})
export class HeroChildComponent {
    @Input() hero: hero;
    _power:string;
    //@Input("power") power: string;
    @Input("power")
    set power(power: string) {
        this._power = power;
    }

    get power(): string { return this._power; }
}


@Component({
    selector: 'my-dashboard',
    template: `<h1>Hello {{name}}</h1>
  <div *ngFor="let hero of heroes">
    <hero-child [hero]="hero" [power]="hero.power"></hero-child>
    <a (click)="save(1)">{{hero.name}}</a>
  </div>
      <div id="app">
    {{ message }}
  </div>
  `
})
export class DashboardComponent implements OnInit {
    name: string;
    heroes: hero[];
    @Input() test: number;
    constructor(private http: Http) { }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
        console.log(this.test);
        console.log(document.getElementById("app"));
    }

    ngOnInit(): void {
        this.heroes = [{ name: "萬詞王", power: "磁力" }];
        this.name = 'DashboardComponent!!!';





        const promise = new Promise(function (resolveParam, rejectParam) {
            setTimeout(function () { resolveParam(1) }, 1000)

            //rejectParam(new Error('error!'))
        })

        promise.then((value: number) => {
            console.log(value) // 1
            return this.http.get('api/heroes')
                .toPromise()
        }).then((value) => {
            let x: any = value;
            console.log(x.json().data as hero[]) // 2
            return value
        }).catch((err) => console.log(err.message))

    }
    save(id: number) {
        var url = 'api/heroes';
        url = url + `${id}`;
        //console.log(this.http.get('api/heroes'));
        var _http = this.http;
        // function* gen() {
        //     console.log('start');
        //     yield 'start';

        //     console.log('mid');
        //     yield _http.get('api/heroes').toPromise();

        //     console.log('end');
        //     yield 'end';

        //     //var got = yield 'called';
        //     //console.log(got);
        // }
        // var g = gen();
        // var a = g.next();
        // console.log(a);
        // var a = g.next();
        // console.log(a);
        // var a = g.next();
        // console.log(a);
        this.http.get('api/heroes')
            .toPromise()
            .then(response => response.json().data as hero[])
            .then(heroes => console.log(this.heroes));
    }
}