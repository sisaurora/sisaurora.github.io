/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'login'
})
@View({
	templateUrl: 'view/login.html'
})
class login {}

bootstrap(login);