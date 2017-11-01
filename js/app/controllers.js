angular.module("sistema")
.controller("controlePrincipal", 

	function($scope) {
		$scope.titulo = "Sistema de Música";

		$scope.artistasCadastrados = [ 
		{nome: "Liam Gallagher", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IxDsRit-p3i4rrALx0gYh2Fr6rSdYeOWkV-xHDW369VeWYBk1g"
		, comentario: "William John Paul Gallagher, conhecido como Liam Gallagher, é um músico britânico.", ehFavorito: false}
		];

		$scope.artistasFavoritados = [];

		$scope.artistaExisteNoSistema = false;
		$scope.editando = false;

		$scope.addArtista = function(Artista) {
			checagem(Artista);
			if(Artista.nome == "") {
				Materialize.toast('Alguma informação está incorreta, verifique e tente novamente!', 2000)
				limparFormulario();
			} else {
					if($scope.artistaExisteNoSistema == false) {
					$scope.artistasCadastrados.push(Artista);
					$('#modal1').modal('close');
  					Materialize.toast('Dados Salvos com sucesso!', 1000) // Tempo esta em ms
					limparFormulario();
				} else {
					Materialize.toast('O artista já existe no sistema, tente novamente!', 2000) // Tempo esta em ms
					limparFormulario();
				};
			};
			
		};

		var init = function() {
			limparFormulario();
		}

		var artistaEditado;

		$scope.abreAdicionarArtista = function() {
			$scope.editando = false;
			limparFormulario();
			$('#modal1').modal('open');


		};

		$scope.favoritarArtista = function(Artista) {
				Artista.ehFavorito = true;
				Materialize.toast('O artista foi adicionado a sua lista de favoritos!', 2000) 
				$scope.artistasFavoritados.push(Artista);
		}

		$scope.desfavoritarArtista = function(Artista) {
				var click = confirm("Deseja excluir " + Artista.nome + " da sua lista de favoritos?");

				if(click == true) {
					Artista.ehFavorito = false;
					Materialize.toast('O artista foi removido da sua lista de favoritos!', 2000)
					for (var i = $scope.artistasFavoritados.length - 1; i >= 0; i--) {
				 	if(Artista.nome == $scope.artistasFavoritados[i].nome) {
				 		$scope.artistasFavoritados.splice(i, 1);
				 	}
				 } 
				}


		}

		$scope.editarArtista = function(Artista) {
			$scope.editando = true;
			angular.copy(Artista, $scope.Artista);
			$('#modal1').modal('open');
			artistaEditado = Artista;
		};

		$scope.removerArtista = function(Artista) {
			for (var i = $scope.artistasCadastrados.length - 1; i >= 0; i--) {
				if(Artista == $scope.artistasCadastrados[i]) {
					$scope.artistasCadastrados.splice(i, 1);
				};
			};

			for (var i = $scope.artistasFavoritados.length - 1; i >= 0; i--) {
				if(Artista == $scope.artistasFavoritados[i]) {
					$scope.artistasFavoritados.splice(i, 1);
				};
			}

		};

		$scope.salvarArtista = function(Artista) {
			checagem(Artista);
			if(Artista.nome == "") {
				Materialize.toast('Alguma informação está incorreta, verifique e tente novamente!', 2000)
			} else {
					if($scope.artistaExisteNoSistema == false || Artista.nome == artistaEditado.nome) {
						artistaEditado.nome = Artista.nome;
						artistaEditado.imagem = Artista.imagem;
						artistaEditado.comentario = Artista.comentario;
						$('#modal1').modal('close');
  						Materialize.toast('Dados Salvos com sucesso!', 1000) // Tempo esta em ms
						limparFormulario();
				} else {
					$('#modal1').modal('close');
					Materialize.toast('O artista já existe no sistema, sua edição falhou, tente novamente!', 3000) // Tempo esta em ms
					limparFormulario();
				};
			};

		};

		var limparFormulario = function() {
			$scope.Artista = {nome: "", imagem: "", comentario: ""};
			$scope.artistaExisteNoSistema = false;

		};

		var checagem = function(Artista) {
			for (var i = $scope.artistasCadastrados.length - 1; i >= 0; i--) {
				if($scope.artistasCadastrados[i].nome == Artista.nome){
					$scope.artistaExisteNoSistema = true;
				};
			};

			return $scope.artistaExisteNoSistema;
		};

		init();

	});