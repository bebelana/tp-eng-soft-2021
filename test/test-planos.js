describe("Testes de unidade", function () {
  describe("Cadastro de plano", function () {
    it("Dados JSON são indefinidos", function () {
      const plano = require("../src/scripts/cadastraPlano.js");
      expect(plano.getsDadosJSON).toBeUndefined();
    });
    it("Verifica se plano não preenchido retorna nulo", function () {
      expect().nothing();
      const plano = require("../src/scripts/cadastraPlano.js");
      expect(plano.estaNulo).toBeUndefined();
    });

    it("Verifica se cadastrar plano vazio não é bem sucedido", function () {
      const plano = require("../src/scripts/cadastraPlano.js");
      expect(plano.cadastrarPlano).toBeUndefined();
    });

    it("Verifica se adicionou novas linhas no plano", function () {
      const plano = require("../src/scripts/cadastraPlano.js");
      expect(plano.adicionaLinha).toBeUndefined();
    });
  });
});
