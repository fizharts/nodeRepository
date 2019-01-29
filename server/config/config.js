

process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    //comentario nuevo de nuevo
}

urlDB = 'mongodb://fizharts:_gohan182@ds121674.mlab.com:21674/cafedos';


process.env.URLDB = urlDB;
