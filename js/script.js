angular.module("cadastrarPessoa", []);
angular.module("cadastrarPessoa").controller("cadastrarPessoaCtrl", function ($scope) {
        $scope.app = "Cadastrar Pessoa";
        $scope.pessoas = [ ];
        $scope.adicionarPessoa = function (pessoa) {
        $scope.pessoas.push(angular.copy(pessoa));
            delete $scope.pessoa;
        };
        $scope.apagarPessoas = function (pessoas) {
        $scope.pessoas = pessoas.filter(function (pessoa) {
            if (!pessoa.selecionado) return pessoa;
        });
        };
        $scope.isPessoaSelecionado = function (pessoas) {
            return pessoas.some(function (pessoa) {
            return pessoa.selecionado;
        });
        };
});
