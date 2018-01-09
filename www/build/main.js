webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PomodoroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PomodoroPage = (function () {
    function PomodoroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadProgress = 0;
        this.loadProgress2 = 0;
        this.loadProgress3 = 0;
        this.loadProgress4 = 0;
        this.tarefa = "";
    }
    PomodoroPage.prototype.startPomodoro1 = function () {
        var _this = this;
        if (this.tarefa == "") {
        }
        else {
            // TEMPO TOTAL
            setInterval(function () {
                if (_this.loadProgress < 100) {
                    _this.loadProgress++;
                    _this.startDescanso();
                }
            }, 100); //25 MINUTOS! ****
            // POMODORO 1
            setInterval(function () {
                if (_this.loadProgress3 < 100) {
                    _this.loadProgress3++;
                }
            }, 100); //25 MINUTOS! ****
        }
    };
    PomodoroPage.prototype.startDescanso = function () {
        var _this = this;
        if (this.loadProgress == 100) {
            setInterval(function () {
                if (_this.loadProgress2 < 100) {
                    _this.loadProgress2++;
                    _this.start2Pomodoro();
                }
            }, 100); //5 MINUTOS! ****
        }
    };
    PomodoroPage.prototype.start2Pomodoro = function () {
        var _this = this;
        // POMODORO 2
        if (this.loadProgress2 == 100) {
            setInterval(function () {
                if (_this.loadProgress4 < 100) {
                    _this.loadProgress4++;
                }
            }, 100); //5 MINUTOS! ****
        }
        this.loadProgress = 0;
    };
    PomodoroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pomodoro',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/pomodoro/pomodoro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pomodoro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div align="center">\n\n    <ion-item>\n      <ion-label>Nome da Tarefa</ion-label>\n      <ion-input type="text" [(ngModel)]="this.tarefa"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Pomodoros Estimados</ion-label>\n      <ion-select [(ngModel)]="pomodoro">\n        <ion-option value="2">2 Pomodoros</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </div>\n\n  <br>\n\n  <div align="center">\n\n    <button ion-button round color="secondary" (click)="startPomodoro1()">COMEÇAR!</button>\n\n  </div>\n\n  <br>\n  <!-- BARRA TEMPO TOTAL -->\n  <div align="center">\n    <label> Tempo Total: 25 minutos</label>\n    <progress-bar-red [progress]="loadProgress"></progress-bar-red>\n  </div>\n\n\n  <!-- BARRA DE DESCANSO -->\n  <div align="center">\n    <label>Tempo de Descanso: 5 Minutos</label>\n    <progress-bar-red [progress]="loadProgress2"></progress-bar-red>\n\n  </div>\n\n  <!-- NOME DA TAREFA -->\n  <div align="center">\n\n    <h5>{{tarefa}}</h5>\n\n  </div>\n\n\n\n  <!-- POMODORO: 1 -->\n  <br>\n  <img src="assets/icon/tomato24.png">\n  <label>1</label>\n  <progress-bar-red [progress]="loadProgress3"></progress-bar-red>\n\n  <!-- POMODORO: 2  -->\n  <br>\n  <img src="assets/icon/tomato24.png">\n  <label>2</label>\n  <progress-bar-red [progress]="loadProgress4"></progress-bar-red>\n\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/pomodoro/pomodoro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], PomodoroPage);
    return PomodoroPage;
    var _a, _b;
}());

//# sourceMappingURL=pomodoro.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StandUpPage = (function () {
    function StandUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadProgress = 0;
        this.loadProgress2 = 0;
        this.loadProgress3 = 0;
        this.seta = "";
        this.tempo_total = "";
        this.tempo1_participante = "";
        this.tempo2_participante = "";
        this.tempo3_participante = "";
        this.tempo4_participante = "";
        this.tempo5_participante = "";
    }
    /*  Precisa implementar melhor!  */
    StandUpPage.prototype.stopCounter = function () {
        if (this.loadProgress > 0) {
            setTimeout(this.loadProgress == 0, 6000);
            this.loadProgress = 0;
        }
    };
    StandUpPage.prototype.startCounter = function () {
        var _this = this;
        if (this.reuniao == 5 && this.participantes == 2) {
            this.tempo_total = "5 minutos";
            this.tempo1_participante = "45s";
            this.tempo2_participante = "1:00";
            this.tempo3_participante = "1:30";
            this.tempo4_participante = "2:00";
            this.tempo5_participante = "2:30";
            this.seta = "|";
            /*     TOTAL       */
            setInterval(function () {
                if (_this.loadProgress < 100) {
                    _this.loadProgress++;
                }
            }, 3000); //5 minutos
            /*    PARA CADA PARTICIPANTE    */
            //PARTICIPANTE 1: 
            setInterval(function () {
                if (_this.loadProgress2 < 50) {
                    _this.loadProgress2++;
                }
            }, 3000); //2,3 minutos 3000!!
            // PARTICIPANTE 2:
            this.loadProgress3 = -1;
            setInterval(function () {
                if (_this.loadProgress2 == 50) {
                    if (_this.loadProgress3 < 50) {
                        _this.loadProgress3++;
                    }
                }
            }, 3000); //2,3 minutos 3000!!
        }
    };
    StandUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stand-up',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/stand-up/stand-up.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>StandUp Meeting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div align="center">\n\n    <ion-item>\n      <ion-label>Nº de Participantes</ion-label>\n      <ion-select [(ngModel)]="participantes">\n        <ion-option value="2">2</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tempo de Reunião</ion-label>\n      <ion-select [(ngModel)]="reuniao">\n        <ion-option value="5">05:00 min</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </div>\n\n  <br>\n  <div align="center">\n\n    <button ion-button round color="secondary" (click)="startCounter()">COMEÇAR!</button>\n\n  </div>\n\n  <br>\n\n  <div>\n    <!-- TEMPO TOTAL -->\n    <ion-icon left name="timer">\n Tempo Total</ion-icon>\n    <br> {{tempo_total}}\n    <progress-bar [progress]="loadProgress"></progress-bar>\n\n\n    <!-- 1º PARTICIPANTE -->\n    <ion-icon name="person">\n 1º Participante</ion-icon>\n\n    <br>\n\n    <label class="tempo1-numero">{{this.tempo1_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label>{{this.tempo2_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label>{{this.tempo3_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label>{{this.tempo4_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label>{{this.tempo5_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label class="tempo1-seta5">{{this.seta}}</label>\n\n    <progress-bar [progress]="loadProgress2"></progress-bar>\n\n\n\n\n    <!-- 2º PARTICIPANTE! -->\n    <ion-icon name="person">\n 2º Participante</ion-icon>\n\n    <br>\n\n    <label class="tempo1-numero">{{this.tempo1_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label>{{this.tempo2_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label>{{this.tempo3_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label>{{this.tempo4_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label>{{this.tempo5_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label class="tempo1-seta5">{{this.seta}}</label>\n\n\n    <progress-bar [progress]="loadProgress3"></progress-bar>\n  </div>\n  <br>\n\n  <div align="center">\n\n    <button ion-button round color="danger" (click)="stopCounter()">PARAR CONTADOR*</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/stand-up/stand-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], StandUpPage);
    return StandUpPage;
}());

//# sourceMappingURL=stand-up.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/planning-poker/planning-poker.module": [
		276,
		2
	],
	"../pages/pomodoro/pomodoro.module": [
		277,
		1
	],
	"../pages/stand-up/stand-up.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_stand_up_stand_up__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_planning_poker_planning_poker__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pomodoro_pomodoro__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openMeetingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_stand_up_stand_up__["a" /* StandUpPage */]);
    };
    HomePage.prototype.openPomodoroPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pomodoro_pomodoro__["a" /* PomodoroPage */]);
    };
    HomePage.prototype.openPokerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_planning_poker_planning_poker__["a" /* PlanningPokerPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Página Inicial\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <img (click)="openMeetingPage()" src="assets/imgs/standUpMeeting.jpg" width="50" height="200" />\n    <div class="card-title">Stand Up Meeting</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="openPomodoroPage()" src="assets/imgs/pomodoro.jpg" width="50" height="200" />\n    <div class="card-title-Pomodoro">Pomodoro</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="openPokerPage()" src="assets/imgs/planningPoker.jpg" width="50" height="200" />\n    <div class="card-title">Plaining Poker</div>\n  </ion-card>\n\n  <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_stand_up_stand_up__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_planning_poker_planning_poker__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pomodoro_pomodoro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_progress_bar_progress_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_progress_bar_red_progress_bar_red__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_stand_up_stand_up__["a" /* StandUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_planning_poker_planning_poker__["a" /* PlanningPokerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pomodoro_pomodoro__["a" /* PomodoroPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_progress_bar_red_progress_bar_red__["a" /* ProgressBarComponentRed */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/planning-poker/planning-poker.module#PlanningPokerPageModule', name: 'PlanningPokerPage', segment: 'planning-poker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pomodoro/pomodoro.module#PomodoroPageModule', name: 'PomodoroPage', segment: 'pomodoro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stand-up/stand-up.module#StandUpPageModule', name: 'StandUpPage', segment: 'stand-up', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_stand_up_stand_up__["a" /* StandUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_planning_poker_planning_poker__["a" /* PlanningPokerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pomodoro_pomodoro__["a" /* PomodoroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/TudoAgil/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/guilherme/workspaces/ionic/TudoAgil/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/TudoAgil/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}\n  </div>\n</div>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/TudoAgil/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponentRed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponentRed = (function () {
    function ProgressBarComponentRed() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponentRed.prototype, "progress", void 0);
    ProgressBarComponentRed = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar-red',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/TudoAgil/src/components/progress-bar-red/progress-bar-red.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}\n    </div>\n</div>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/TudoAgil/src/components/progress-bar-red/progress-bar-red.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponentRed);
    return ProgressBarComponentRed;
}());

//# sourceMappingURL=progress-bar-red.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanningPokerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlanningPokerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanningPokerPage = (function () {
    function PlanningPokerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlanningPokerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanningPokerPage');
    };
    PlanningPokerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-planning-poker',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/planning-poker/planning-poker.html"*/'<!--\n  Generated template for the PlanningPokerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PlanningPokerPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspaces/ionic/TudoAgil/src/pages/planning-poker/planning-poker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PlanningPokerPage);
    return PlanningPokerPage;
}());

//# sourceMappingURL=planning-poker.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map