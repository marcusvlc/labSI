app.controller("controlePrincipal", 

	function($scope, $rootScope, todoListService) {


		$scope.titulo = "Home";

		$scope.artistasCadastrados = todoListService.artistasCadastrados;

		$scope.albunsCadastrados = todoListService.albunsCadastrados;
		$scope.artistasFavoritados = todoListService.artistasFavoritados;
		$scope.albunsListados = [];
		$scope.musicasListadas = [];
		$scope.musicasCadastradas = todoListService.musicasCadastradas;


		$scope.artistaExisteNoSistema = false;
		$scope.editando = false;
		$scope.artistaDaVez = {nome: "", imagem: "" , comentario: "", ehFavorito: false, albuns:[],  nota:"0"};
		$scope.albumDaVez = {nome: "", imagem: "", ano: "", musicas:[], dono:""};

		$scope.abrirModalMusica = function(Artista) {
			$scope.albunsListados = Artista.albuns;

			// CONCERTAR O CODIGO PARA LISTAR MUSICAS DE UM ARTISTA.
			// for (var i = albunsListados.length - 1; i >= 0; i--) {
			// 	for (var j = albunsListados[i].musicas.length - 1; j>= 0; j--) {
			// 		musicasListadas.push(j);
			// 	}
			// }

			$scope.artistaDaVez = Artista;
			$('#modalmusica').modal('open');
		}

		$scope.abreListarAlbuns = function(Artista) {
			$scope.albunsListados = Artista.albuns;
			$scope.artistaDaVez = Artista;
			$('#modal3').modal('open');

		}

		$scope.setArtistaDaVez = function(Artista) {
			$scope.artistaDaVez = Artista;
		}

		$scope.setAlbumDaVez = function(Album) {
			$scope.albumDaVez = Album;
		}

		$scope.resetArtistaDaVez = function() {
			$scope.artistaDaVez = {nome: "", imagem: "" , comentario: "", ehFavorito: false, albuns:[],  nota:"0"};

		}

		$scope.resetAlbumDaVez = function() {
			$scope.albumDaVez = {nome: "", imagem: "", ano: "", musicas:[], dono:""};

		}

		$scope.addMusica = function(Musica) {
			if(Musica.nome == "" || Musica.ano == "" || Musica.duracao == "" ) {
				Materialize.toast('Alguma informação está incorreta, tente novamente!', 2000)
			} else {
				if($scope.musicaExisteNoSistema(Musica)) {
					Materialize.toast('A música > ' + Musica.nome + ' < já existe no sistema, tente cadastrar outra!', 2000)
				} else {

				$scope.albumDaVez.musicas.push(Musica);
				Musica.albumNome = $scope.albumDaVez.nome;
				$scope.musicasCadastradas.push(Musica);
				$('#modal4').modal('close');
				Materialize.toast('A música > ' + Musica.nome +  ' < foi adicionada ao Álbum: > ' + $scope.albumDaVez.nome + ' < com sucesso!', 2000)
				$scope.resetAlbumDaVez();
				}

			}
		}

		$scope.addAlbum = function(Album) {
				if(Album.nome == "") {
					Materialize.toast('Alguma informação está incorreta, tente novamente!', 2000)
				} else {
					if($scope.albumExisteNoSistema(Album)) {
						Materialize.toast('O álbum > ' + Album.nome +  ' < já existe no sistema, tente outro!', 2000)
					} else {
						if(Album.ano == "" || !Number.isInteger(Album.ano)) {
							Album.ano = "Data não especificada ou incorreta"
						}
						
						Album.dono = $scope.artistaDaVez.nome;
						$scope.artistaDaVez.albuns.push(Album);
						$scope.albunsCadastrados.push(Album);
						$('#modal2').modal('close');
						Materialize.toast('O álbum > ' + Album.nome +  ' < foi cadastrado com sucesso!', 2000)
						$scope.resetArtistaDaVez();

					}
			}
		}


		$scope.albumExisteNoSistema = function(Album) {
			var existeAlbum = false;
			for (var i = $scope.albunsCadastrados.length - 1; i >= 0; i--) {
				if($scope.albunsCadastrados[i].nome == Album.nome) {
					existeAlbum = true;
				}
			}

			return existeAlbum;
		}

		$scope.musicaExisteNoSistema = function(Musica) {
			var existeMusica  = false;
			for (var i = $scope.musicasCadastradas.length - 1; i >= 0; i--) {
				if($scope.musicasCadastradas[i].nome == Musica.nome) {
					existeMusica  = true;
				}
			}

			return existeMusica
		}

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

		$scope.setNotaArtista = function() {
			var e = document.getElementById("notaselecao");
			var notaDoArtista = e.options[e.selectedIndex].value;
			$scope.artistaDaVez.nota = notaDoArtista;
			Materialize.toast('O artista ' + $scope.artistaDaVez.nome + ' foi avaliado com nota ' + notaDoArtista, 2000)
		}

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
			$scope.Album = {nome: "", imagem: "", ano: "", musicas:[], dono:""};
			$('#modal2').modal('open');
		}

		$scope.abreAdicionarMusica = function() {
			$scope.Musica = {nome: "", albumNome:"", ano: "", duracao:""};
			$('#modal4').modal('open');

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

		$scope.testar = function() {
			 for(i=0; i< $scope.artistasCadastrados.length; i++) {  
	        document.write('<option value="' + $scope.artistasCadastrados[i].nome +'">' + $scope.artistasCadastrados[i].nome + '</option>');
	   		 };
		};
 
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

			$scope.removeAlbunsArtista(Artista);

		};

		$scope.removeAlbunsArtista = function(Artista) {
			for (var i = $scope.albunsCadastrados.length - 1; i >= 0; i--) {
				if($scope.albunsCadastrados[i].dono == Artista.nome) {
					$scope.albunsCadastrados.splice(i, 1);
				}
			}
		}

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
			$scope.Artista = {nome: "", imagem: "", comentario: "", albuns:[],  nota:"0"};
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


app.controller('playlistsctrl', function($scope, $rootScope, $location)
{
	$scope.message = "Estou na pagina de playlists";
   $rootScope.activetab = $location.path();
   $scope.titulo = "PlayLists";
});


// app.controller('homectrl', function($scope){
// 	$scope.message = 'Pagina home';
// });
// app.controller('playlistsctrl', function($scope){
// 	$scope.message = 'Pagina playlists';
// });
app.controller('favoritosctrl', function($scope){
	$scope.message = 'Pagina favoritos';
});
