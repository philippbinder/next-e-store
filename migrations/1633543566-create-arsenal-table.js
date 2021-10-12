// This will create the table
exports.up = async function up(sql) {
  console.log('Creating arsenal table...');
  await sql`
		CREATE TABLE arsenal (
			id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			number INTEGER NOT NULL,
			name VARCHAR(40) NOT NULL,
			description VARCHAR,
			-- image BYTEA,
			type VARCHAR(40) NOT NULL
		);
	`;
};

// if added by other means then migration camelcaseKeys !!!

// This will remove the table again
exports.down = async function down(sql) {
  console.log('Dropping arsenal table...');
  await sql`
		DROP TABLE arsenal;
		`;
};