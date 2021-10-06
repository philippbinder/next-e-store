// This will insert items into the table arsenal
exports.up = async function up(sql) {
  console.log('Inserting items into arsenal...');
  await sql`
		INSERT INTO arsenal
			(item_number, name)
		VALUES
			(1, 'Gladius'),
			(2, 'Scutum'),
			(3, 'Pilum'),
			(4, 'Aquila'),
			(5, 'Lorica Hamata'),
			(6, 'Lorica Segmentata'),
			(7, 'Galea Centurionis');
	`;
};

// This will remove the table again
exports.down = async function down(sql) {
  console.log('Deleting items from arsenal...');
  await sql`
		DELETE FROM
			arsenal
		WHERE
			(item_number = 1 and name = 'Gladius') OR
			(item_number = 2 and name = 'Scutum') OR
			(item_number = 3 and name = 'Pilum') OR
			(item_number = 4 and name = 'Aquila') OR
			(item_number = 5 and name = 'Lorica Hamata') OR
			(item_number = 6 and name = 'Lorica Segmentata') OR
			(item_number = 7 and name = 'Galea Centurionis');
		`;
};
