create database projeto_ipobre;

create table lista_produtos (
	id serial primary key,
  nome text not null,
  foto text,
  categoria varchar(50) not null,
  preco integer not null,
  descricao text not null
);