webpackJsonp([4],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentTime = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("H:mm:ss");
        this.morningTime1 = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("06:00:00");
        this.morningTime2 = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("11:59:59");
        this.afternoonTime1 = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("12:00:00");
        this.afternoonTime2 = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("17:59:59");
        this.nightTime1 = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("18:00:00");
        this.nightTime2 = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("23:59:59");
        this.isChanged = false;
        this.perfil = {
            nome: "Guilherme Pimenta",
            idade: "20 anos",
            formacao: "Último semestre em Análise e Desenvolvimento de Sistemas",
            foco: "Desenvolvimento Mobile"
        };
    }
    AboutPage.prototype.color = function () {
        this.isChanged = true;
    };
    AboutPage.prototype.openObject = function () {
        console.log();
    };
    /* EM PROGRESSO */
    /* Utilizando a classe Moment para pegar o horário do dispositivo */
    AboutPage.prototype.ionViewDidLoad = function () {
        if (this.currentTime >= this.morningTime1 && this.currentTime < this.morningTime2) {
            this.greetings = "Bom Dia!";
            console.log("É mais que 6 horas da manhã! /o/");
            this.isChanged = true;
            this.greetingPhoto = "assets/imgs/morning.jpg";
        }
        else if (this.currentTime >= this.afternoonTime1 && this.currentTime < this.afternoonTime2) {
            this.greetings = "Boa Tarde!";
            console.log("É mais que 12 horas da tarde! /o/");
            this.isChanged = true;
            this.greetingPhoto = "assets/imgs/afternoon.jpg";
        }
        else if (this.currentTime >= this.nightTime1 && this.currentTime < this.nightTime2) {
            this.greetings = "Boa Noite!";
            console.log("É mais que 6 horas da noite! /o/");
            this.isChanged = true;
            this.greetingPhoto = "assets/imgs/night.jpg";
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sobre o Desenvolvedor</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding [ngClass]="{\'.manha\': isChanged, \'.tarde\': isChanged, \'.noite\': isChanged}">\n\n  <ion-card>\n    <ion-card-header class="titulo">\n      {{this.greetings}}\n    </ion-card-header>\n    <ion-card-content>\n      <img src="{{this.greetingPhoto}}">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Resumo sobre mim :D\n    </ion-card-header>\n\n    <ion-card-content>\n      <img src="assets/imgs/Eu.jpg" (click)="openObject()">\n\n      <br> - Nome: {{perfil.nome}};\n      <br> - Idade: {{perfil.idade}};\n      <br> - Formação Acadêmica: {{perfil.formacao}};\n      <br> - Foco: {{perfil.foco}};\n      <br> - Linguagens:\n      <ul>\n        <li> JAVA - Intermediário; </li>\n        <li> Programação para Android - Básico/Intermediário; </li>\n        <li> Ionic 3 – Básico; </li>\n        <li> C++ - Intermediário; </li>\n        <li> SQL (PostgreSQL) – Básico; </li>\n      </ul>\n      <br>\n      <p>\n        Sempre gostei de Informática e na faculdade eu encontrei meu outro amor: O Desenvolvimento Mobile.\n        <br> Procuro sempre estudar a plataforma Mobile (Android) e saber mais das ferramentas que existem por aí além de reforçar\n        os conhecimentos em POO e outros conceitos importantes.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Hobbies\n    </ion-card-header>\n\n    <ion-card-content>\n      <img src="assets/imgs/Suprema2.jpg">\n      <br>\n      <ul>\n        <li>CARROS CARROS CARROS CARROS</li>\n        <li>Aprendendo Japonês</li>\n        <li>Jogo aquele CS:GO</li>\n        <li>Gravo vídeos, edito e coloco no YouTube</li>\n        <li>Toco (mal) violão</li>\n        <li></li>\n      </ul>\n\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      Contato e Redes Sociais\n    </ion-card-header>\n    <ion-card-content>\n      - Email para contato:\n      <br> guilhermevalentim5@gmail.com\n      <ion-icon name="logo-github">\n        <a href="https://github.com/GuilhermeValentim">GuilhermeValentim</a>\n      </ion-icon>\n      <br>\n      <ion-icon name="logo-facebook">\n Guilherme Valentim </ion-icon>\n      <br>\n      <ion-icon name="logo-instagram">\n        <a href="https://www.instagram.com/gui.valentim1/">gui.valentim1</a>\n      </ion-icon>\n      <br>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanningPokerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanningPokerPage = (function () {
    function PlanningPokerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlanningPokerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-planning-poker',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/planning-poker/planning-poker.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Planning Poker</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n  <img src="assets/imgs/0_number.png" imageViewer="assets/imgs/0_number_bigger.png" />\n  <img src="assets/imgs/1_number.png" imageViewer="assets/imgs/1_number_bigger.png" />\n  <img src="assets/imgs/2_number.png" imageViewer="assets/imgs/2_number_bigger.png" />\n\n  <img src="assets/imgs/3_number.png" imageViewer="assets/imgs/3_number_bigger.png" />\n  <img src="assets/imgs/5_number.png" imageViewer="assets/imgs/5_number_bigger.png" />\n  <img src="assets/imgs/8_number.png" imageViewer="assets/imgs/8_number_bigger.png" />\n\n  <img src="assets/imgs/13_number.png" imageViewer="assets/imgs/13_number_bigger.png" />\n  <img src="assets/imgs/20_number.png" imageViewer="assets/imgs/20_number_bigger.png" />\n  <img src="assets/imgs/40_number.png" imageViewer="assets/imgs/40_number_bigger.png" />\n\n  <img src="assets/imgs/100_number.png" imageViewer="assets/imgs/100_number_bigger.png" />\n  <img src="assets/imgs/doubt_number.png" imageViewer="assets/imgs/doubt_number_bigger.png" />\n  <img src="assets/imgs/coffee_number.png" imageViewer="assets/imgs/coffee_number_bigger.png" />\n\n\n\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/planning-poker/planning-poker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PlanningPokerPage);
    return PlanningPokerPage;
}());

//# sourceMappingURL=planning-poker.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PomodoroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            this.startTempoTotal();
            // POMODORO 1
            setInterval(function () {
                if (_this.loadProgress3 < 100) {
                    _this.loadProgress3++;
                }
            }, 100); //25 MINUTOS! ****
        }
    };
    PomodoroPage.prototype.startTempoTotal = function () {
        var _this = this;
        setInterval(function () {
            if (_this.loadProgress < 100) {
                _this.loadProgress++;
                _this.startDescanso();
            }
        }, 100); //25 MINUTOS! ****
    };
    PomodoroPage.prototype.startDescanso = function () {
        var _this = this;
        if (this.loadProgress == 100) {
            setInterval(function () {
                if (_this.loadProgress2 < 100) {
                    _this.loadProgress2++;
                    _this.startPomodoro2();
                }
            }, 100); //5 MINUTOS! ****
        }
    };
    PomodoroPage.prototype.startPomodoro2 = function () {
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
            selector: 'page-pomodoro',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/pomodoro/pomodoro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pomodoro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div align="center">\n\n    <ion-item>\n      <ion-label>Nome da Tarefa</ion-label>\n      <ion-input type="text" [(ngModel)]="this.tarefa"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Pomodoros Estimados</ion-label>\n      <ion-select [(ngModel)]="pomodoro">\n        <ion-option value="2">2 Pomodoros</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </div>\n\n  <br>\n\n  <div align="center">\n\n    <button ion-button round color="secondary" (click)="startPomodoro1()">COMEÇAR!</button>\n\n  </div>\n\n  <br>\n  <!-- BARRA TEMPO TOTAL -->\n  <div align="center">\n    <label> Tempo Total: 25 minutos</label>\n    <progress-bar-red [progress]="loadProgress"></progress-bar-red>\n  </div>\n\n\n  <!-- BARRA DE DESCANSO -->\n  <div align="center">\n    <label>Tempo de Descanso: 5 Minutos</label>\n    <progress-bar-red [progress]="loadProgress2"></progress-bar-red>\n\n  </div>\n\n  <!-- NOME DA TAREFA -->\n  <div align="center">\n\n    <h5>{{tarefa}}</h5>\n\n  </div>\n\n\n\n  <!-- POMODORO: 1 -->\n  <br>\n  <img src="assets/icon/tomato24.png">\n  <label>1</label>\n  <progress-bar-red [progress]="loadProgress3"></progress-bar-red>\n\n  <!-- POMODORO: 2  -->\n  <br>\n  <img src="assets/icon/tomato24.png">\n  <label>2</label>\n  <progress-bar-red [progress]="loadProgress4"></progress-bar-red>\n\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/pomodoro/pomodoro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PomodoroPage);
    return PomodoroPage;
}());

//# sourceMappingURL=pomodoro.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-stand-up',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/stand-up/stand-up.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>StandUp Meeting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div align="center">\n\n    <ion-item>\n      <ion-label>Nº de Participantes</ion-label>\n      <ion-select [(ngModel)]="participantes">\n        <ion-option value="2">2</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tempo de Reunião</ion-label>\n      <ion-select [(ngModel)]="reuniao">\n        <ion-option value="5">05:00 min</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </div>\n\n  <br>\n  <div align="center">\n\n    <button ion-button round color="secondary" (click)="startCounter()">COMEÇAR!</button>\n\n  </div>\n\n  <br>\n\n  <div>\n    <!-- TEMPO TOTAL -->\n    <ion-icon left name="timer">\n Tempo Total</ion-icon>\n    <br> {{tempo_total}}\n    <progress-bar [progress]="loadProgress"></progress-bar>\n\n\n    <!-- 1º PARTICIPANTE -->\n    <ion-icon name="person">\n 1º Participante</ion-icon>\n\n    <br>\n\n    <label class="tempo1-numero">{{this.tempo1_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label>{{this.tempo2_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label>{{this.tempo3_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label>{{this.tempo4_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label>{{this.tempo5_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label class="tempo1-seta5">{{this.seta}}</label>\n\n    <progress-bar [progress]="loadProgress2"></progress-bar>\n\n\n\n\n    <!-- 2º PARTICIPANTE! -->\n    <ion-icon name="person">\n 2º Participante</ion-icon>\n\n    <br>\n\n    <label class="tempo1-numero">{{this.tempo1_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label>{{this.tempo2_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label>{{this.tempo3_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label>{{this.tempo4_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label>{{this.tempo5_participante}}</label>\n\n    <br>\n\n    <label class="tempo1-seta1">{{this.seta}}</label>\n\n    <label class="tempo1-seta2">{{this.seta}}</label>\n\n    <label class="tempo1-seta3">{{this.seta}}</label>\n\n    <label class="tempo1-seta4">{{this.seta}}</label>\n\n    <label class="tempo1-seta5">{{this.seta}}</label>\n\n\n    <progress-bar [progress]="loadProgress3"></progress-bar>\n  </div>\n  <br>\n\n  <div align="center">\n\n    <button ion-button round color="danger" (click)="stopCounter()">PARAR CONTADOR*</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/stand-up/stand-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], StandUpPage);
    return StandUpPage;
}());

//# sourceMappingURL=stand-up.js.map

/***/ }),

/***/ 139:
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
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		534,
		3
	],
	"../pages/planning-poker/planning-poker.module": [
		535,
		2
	],
	"../pages/pomodoro/pomodoro.module": [
		536,
		1
	],
	"../pages/stand-up/stand-up.module": [
		537,
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
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_stand_up_stand_up__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_planning_poker_planning_poker__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pomodoro_pomodoro__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(125);
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
        this.cidade = "Fortaleza";
        this.ano = 1997;
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
    HomePage.prototype.openAboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */]);
        console.log("Eu nasci na cidade " + this.cidade + " no ano de " + this.ano);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Página Inicial\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openAboutPage()">\n        <ion-icon name="md-alert">\n Sobre</ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <img (click)="openMeetingPage()" src="assets/imgs/standUpMeeting.jpg" width="50" height="200" />\n    <div class="card-title">Stand Up Meeting</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="openPomodoroPage()" src="assets/imgs/pomodoro.jpg" width="50" height="200" />\n    <div class="card-title-Pomodoro">Pomodoro</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="openPokerPage()" src="assets/imgs/planningPoker.jpg" width="50" height="200" />\n    <div class="card-title">Plaining Poker</div>\n  </ion-card>\n\n  <div>Icons made by\n    <a href="http://www.freepik.com" title="Freepik">Freepik</a> from\n    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by\n    <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"\n      target="_blank">CC 3.0 BY</a>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_stand_up_stand_up__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_planning_poker_planning_poker__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pomodoro_pomodoro__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_progress_bar_progress_bar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_progress_bar_red_progress_bar_red__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__ = __webpack_require__(429);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_progress_bar_red_progress_bar_red__["a" /* ProgressBarComponentRed */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/planning-poker/planning-poker.module#PlanningPokerPageModule', name: 'PlanningPokerPage', segment: 'planning-poker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pomodoro/pomodoro.module#PomodoroPageModule', name: 'PomodoroPage', segment: 'pomodoro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stand-up/stand-up.module#StandUpPageModule', name: 'StandUpPage', segment: 'stand-up', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_stand_up_stand_up__["a" /* StandUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_planning_poker_planning_poker__["a" /* PlanningPokerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pomodoro_pomodoro__["a" /* PomodoroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 182,
	"./af.js": 182,
	"./ar": 183,
	"./ar-dz": 184,
	"./ar-dz.js": 184,
	"./ar-kw": 185,
	"./ar-kw.js": 185,
	"./ar-ly": 186,
	"./ar-ly.js": 186,
	"./ar-ma": 187,
	"./ar-ma.js": 187,
	"./ar-sa": 188,
	"./ar-sa.js": 188,
	"./ar-tn": 189,
	"./ar-tn.js": 189,
	"./ar.js": 183,
	"./az": 190,
	"./az.js": 190,
	"./be": 191,
	"./be.js": 191,
	"./bg": 192,
	"./bg.js": 192,
	"./bm": 193,
	"./bm.js": 193,
	"./bn": 194,
	"./bn.js": 194,
	"./bo": 195,
	"./bo.js": 195,
	"./br": 196,
	"./br.js": 196,
	"./bs": 197,
	"./bs.js": 197,
	"./ca": 198,
	"./ca.js": 198,
	"./cs": 199,
	"./cs.js": 199,
	"./cv": 200,
	"./cv.js": 200,
	"./cy": 201,
	"./cy.js": 201,
	"./da": 202,
	"./da.js": 202,
	"./de": 203,
	"./de-at": 204,
	"./de-at.js": 204,
	"./de-ch": 205,
	"./de-ch.js": 205,
	"./de.js": 203,
	"./dv": 206,
	"./dv.js": 206,
	"./el": 207,
	"./el.js": 207,
	"./en-au": 208,
	"./en-au.js": 208,
	"./en-ca": 209,
	"./en-ca.js": 209,
	"./en-gb": 210,
	"./en-gb.js": 210,
	"./en-ie": 211,
	"./en-ie.js": 211,
	"./en-nz": 212,
	"./en-nz.js": 212,
	"./eo": 213,
	"./eo.js": 213,
	"./es": 214,
	"./es-do": 215,
	"./es-do.js": 215,
	"./es-us": 216,
	"./es-us.js": 216,
	"./es.js": 214,
	"./et": 217,
	"./et.js": 217,
	"./eu": 218,
	"./eu.js": 218,
	"./fa": 219,
	"./fa.js": 219,
	"./fi": 220,
	"./fi.js": 220,
	"./fo": 221,
	"./fo.js": 221,
	"./fr": 222,
	"./fr-ca": 223,
	"./fr-ca.js": 223,
	"./fr-ch": 224,
	"./fr-ch.js": 224,
	"./fr.js": 222,
	"./fy": 225,
	"./fy.js": 225,
	"./gd": 226,
	"./gd.js": 226,
	"./gl": 227,
	"./gl.js": 227,
	"./gom-latn": 228,
	"./gom-latn.js": 228,
	"./gu": 229,
	"./gu.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 237,
	"./it.js": 237,
	"./ja": 238,
	"./ja.js": 238,
	"./jv": 239,
	"./jv.js": 239,
	"./ka": 240,
	"./ka.js": 240,
	"./kk": 241,
	"./kk.js": 241,
	"./km": 242,
	"./km.js": 242,
	"./kn": 243,
	"./kn.js": 243,
	"./ko": 244,
	"./ko.js": 244,
	"./ky": 245,
	"./ky.js": 245,
	"./lb": 246,
	"./lb.js": 246,
	"./lo": 247,
	"./lo.js": 247,
	"./lt": 248,
	"./lt.js": 248,
	"./lv": 249,
	"./lv.js": 249,
	"./me": 250,
	"./me.js": 250,
	"./mi": 251,
	"./mi.js": 251,
	"./mk": 252,
	"./mk.js": 252,
	"./ml": 253,
	"./ml.js": 253,
	"./mr": 254,
	"./mr.js": 254,
	"./ms": 255,
	"./ms-my": 256,
	"./ms-my.js": 256,
	"./ms.js": 255,
	"./mt": 257,
	"./mt.js": 257,
	"./my": 258,
	"./my.js": 258,
	"./nb": 259,
	"./nb.js": 259,
	"./ne": 260,
	"./ne.js": 260,
	"./nl": 261,
	"./nl-be": 262,
	"./nl-be.js": 262,
	"./nl.js": 261,
	"./nn": 263,
	"./nn.js": 263,
	"./pa-in": 264,
	"./pa-in.js": 264,
	"./pl": 265,
	"./pl.js": 265,
	"./pt": 266,
	"./pt-br": 267,
	"./pt-br.js": 267,
	"./pt.js": 266,
	"./ro": 268,
	"./ro.js": 268,
	"./ru": 269,
	"./ru.js": 269,
	"./sd": 270,
	"./sd.js": 270,
	"./se": 271,
	"./se.js": 271,
	"./si": 272,
	"./si.js": 272,
	"./sk": 273,
	"./sk.js": 273,
	"./sl": 274,
	"./sl.js": 274,
	"./sq": 275,
	"./sq.js": 275,
	"./sr": 276,
	"./sr-cyrl": 277,
	"./sr-cyrl.js": 277,
	"./sr.js": 276,
	"./ss": 278,
	"./ss.js": 278,
	"./sv": 279,
	"./sv.js": 279,
	"./sw": 280,
	"./sw.js": 280,
	"./ta": 281,
	"./ta.js": 281,
	"./te": 282,
	"./te.js": 282,
	"./tet": 283,
	"./tet.js": 283,
	"./th": 284,
	"./th.js": 284,
	"./tl-ph": 285,
	"./tl-ph.js": 285,
	"./tlh": 286,
	"./tlh.js": 286,
	"./tr": 287,
	"./tr.js": 287,
	"./tzl": 288,
	"./tzl.js": 288,
	"./tzm": 289,
	"./tzm-latn": 290,
	"./tzm-latn.js": 290,
	"./tzm.js": 289,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 401;

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(345);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
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
            selector: 'progress-bar',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}\n  </div>\n</div>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 428:
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
            selector: 'progress-bar-red',template:/*ion-inline-start:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/components/progress-bar-red/progress-bar-red.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}\n    </div>\n</div>'/*ion-inline-end:"/home/guilherme/workspaces/ionic/Tudo-Agil/src/components/progress-bar-red/progress-bar-red.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponentRed);
    return ProgressBarComponentRed;
}());

//# sourceMappingURL=progress-bar-red.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map