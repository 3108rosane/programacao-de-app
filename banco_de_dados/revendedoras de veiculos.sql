CREATE TABLE fabricante(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	pais_de_origem VARCHAR(50) NOT NULL,
	ano_fundação INTEGER NOT NULL
)
 SELECT * FROM fabricante
 
 CREATE TABLE clientes (
	 id SERIAL PRIMARY KEY,
	 nome VARCHAR(100) NOT NULL,
	 cpf VARCHAR (50) NOT NULL,
	 telefone VARCHAR (20) NOT NULL UNIQUE,
	 email VARCHAR NOT NULL UNIQUE,
	 endereco VARCHAR (50) NOT NULL
 )
 SELECT * FROM clientes
 
 CREATE TABLE vendas (
	 id SERIAL PRIMARY KEY,
	 data_vendas DATE NOT NULL,
	 valor_total INTEGER NOT NULL,
	 metodo_de_pagamento VARCHAR(100) NOT NULL,
	 vendas_id INTEGER NOT NULL,
	 cliente_id INTEGER NOT NULL,
	 veiculos_id INTEGER NOT NULL,
	  FOREIGN KEY (clientes_id) REFERENCES clientes(id)
	  FOREIGN KEY (veiculos_id) REFERENCES veiculos(id)
	  FOREIGN KEY (vendas_id) REFERENCES vendas(id)
 )
 SELECT *FROM vendas
 
 CREATE TABLE manutencao (
	 id SERIAL PRIMARY KEY,
	 data_do_servico DATE NOT NULL,
	 descricao_do_servico VARCHAR NOT NULL,
	 ano_de_fabricacao INTEGER NOT NULL UNIQUE,
	 custo DECIMAL NOT NULL ,
	 veiculo_id INTEGER NOT NULL,
	 FOREIGN KEY (veiculo_id) REFERENCES veiculo(id)ON DELETE CASCADE
 )
 
 SELECT * FROM manutencao
 
 
 CREATE TABLE vendedor (
	 id SERIAL PRIMARY KEY,
	 nome VARCHAR (100) NOT NULL,
	 cpf VARCHAR (50) NOT NULL,
	 email VARCHAR (100) NOT NULL UNIQUE,
	 telefone VARCHAR (28) NOT NULL
	 data_de_contratacao DATE NOT NULL
 )
 
 SELECT * FROM vendedor
 
 CREATE TABLE veiculos (
	 id SERIAL PRIMARY KEY ,
	 numero_chassi INTEGER (20) NOT NULL UNIQUE,
	 modelo VARCHAR (50) NOT NULL UNIQUE,
	 ano_de_fabricacao INTEGER NOT NULL UNIQUE
	 cor VARCHAR (20) NOT NULL,
	 kilometragem INTEGER NOT NUL,
	 preco DECIMAL NOT NULL,
	 fabricante_id INTEGER NOT NULL
	 
	 FOREIGN KEY (fabricante_id) REFERENCES fabricantes(id)ON DELETE CASCADE
 )
 
 SELECT * FROM veiculos
 

 