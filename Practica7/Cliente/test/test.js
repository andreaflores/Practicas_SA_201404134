let index = require('../../Cliente/index');
let API_CONFIG_PUERTO = index.API_CONFIG_PUERTO;
let API_URL = 'http://localhost:' + API_CONFIG_PUERTO + '/cliente';

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);


describe('Cliente', () => {

    it('Deberia crear el pedido del cliente', (done) => {
        chai.request(API_URL)
            .get('/pedido')
            .end(function (err, res) {
                expect(res).to.have.status(200); // Se espera que el http status sea 200.
                expect(res.body.name).to.equal(undefined);// Se espera que no venga el campo 'name'.
                done();
            });
    });

    it('Deberia obtener el estado del pedido en el restaurante', (done) => {
        chai.request(API_URL)
            .get('/estadoRestaurante')
            .end(function (err, res) {
                expect(res).to.have.status(200); // Se espera que el http status sea 200.
                expect(res.body.name).to.equal(undefined);// Se espera que no venga el campo 'name'.
                done();
            });
    });

    it('Deberia obtener el estado del pedido con el repartidor', (done) => {
        chai.request(API_URL)
            .get('/estadoRepartidor')
            .end(function (err, res) {
                expect(res).to.have.status(200); // Se espera que el http status sea 200.
                expect(res.body.name).to.equal(undefined);// Se espera que no venga el campo 'name'.
                done();
            });
    });
});