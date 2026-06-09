create table expenses(
	id serial primary key,
	title varchar(100),
	amount int not null,
	created_at timestamp default current_timestamp
)