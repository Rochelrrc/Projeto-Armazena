create database projetoarmazena;

create table estoque (
	id serial primary key,
  nome text not null,
  tipo varchar(20),
  quantidade integer not null,
  valor integer not null
);