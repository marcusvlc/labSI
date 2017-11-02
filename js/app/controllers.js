angular.module("sistema")
.controller("controlePrincipal", 

	function($scope) {
		$scope.titulo = "Sistema de Música";

		$scope.artistasCadastrados = [ 
		{nome: "Liam Gallagher", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IxDsRit-p3i4rrALx0gYh2Fr6rSdYeOWkV-xHDW369VeWYBk1g"
		, comentario: "William John Paul Gallagher, conhecido como Liam Gallagher, é um músico britânico.", ehFavorito: false},
		{nome: "Noel Gallagher", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Noel_Gallagher_at_Razzmatazz%2C_Barcelona%2C_Spain-5March2012_%283%29.jpg/200px-Noel_Gallagher_at_Razzmatazz%2C_Barcelona%2C_Spain-5March2012_%283%29.jpg"
		, comentario: "Noel Thomas David Gallagher (Manchester, 29 de Maio de 1967) é um músico britânico.", ehFavorito: false},
		{nome: "Paul McCartney", imagem: "data:image/jpeg;base64,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"
		, comentario: "Sir James Paul McCartney é um cantor, compositor, multi-instrumentista, empresário, produtor musical britânico. ", ehFavorito: false}
		];

		$scope.artistasFavoritados = [{nome: "", imagem: "", Artista:{}, musicas:[]}];


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

		$scope.abreAdicionarAlbum = function() {
			$scope.Album = {nome: "", imagem: "", Artista:{}, musicas:[]};
			$('#modal2').modal('open');
		}

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