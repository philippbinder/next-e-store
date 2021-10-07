// This will insert items into the table arsenal
const arsenal = [
  { number: 1, name: 'Gladius', type: 'Sword' },
  { number: 2, name: 'Scutum', type: 'Shield' },
  { number: 3, name: 'Pilum', type: 'Javelin' },
  { number: 4, name: 'Aquila', type: 'Military Standard' },
  { number: 5, name: 'Lorica Hamata', type: 'Armor' },
  { number: 6, name: 'Lorica Segmentata', type: 'Armor' },
  { number: 7, name: 'Galea Centurionis', type: 'Helmet' },
  { number: 8, name: 'Title of Augustus', type: 'Position of Emperor' },
];

exports.up = async function up(sql) {
  console.log('Inserting items into arsenal...');

  for (const item of arsenal) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO arsenal
				(number, name, type)
			VALUES
				(${item.number}, ${item.name}, ${item.type});
			-- RETURNING
			--  number,
			--  name,
			--  type
			-- ;
				`;
  }
  /*
	Old version without loop
   await sql`
  	INSERT INTO arsenal
  		(item_number, name, type)
  	VALUES
  		(1, 'Gladius', 'Sword'),
  		(2, 'Scutum', 'Shield'),
  		(3, 'Pilum', 'Javelin'),
  		(4, 'Aquila', 'Military Standard'),
  		(5, 'Lorica Hamata', 'Armor'),
  		(6, 'Lorica Segmentata', 'Armor'),
  		(7, 'Galea Centurionis', 'Helmet'),
  		(8, 'Title of Augustus', 'Position of Emperor')
  `;
	*/
};

// This will remove the table again
exports.down = async function down(sql) {
  console.log('Deleting items from arsenal...');

  for (const item of arsenal) {
    await sql`
			DELETE FROM
				arsenal
			WHERE
				name = ${item.number} AND name = ${item.name} AND type = ${item.type};
				`;
  }

  /* Old version without loop
  await sql`
  	DELETE FROM
  		arsenal
  	WHERE
  		(item_number = 1 and name = 'Gladius' and type = 'Sword') OR
  		(item_number = 2 and name = 'Scutum' and type = 'Shield') OR
  		(item_number = 3 and name = 'Pilum' and type = 'Javelin') OR
  		(item_number = 4 and name = 'Aquila' and type = 'Military Standard') OR
  		(item_number = 5 and name = 'Lorica Hamata' and type = 'Armor') OR
  		(item_number = 6 and name = 'Lorica Segmentata' and type = 'Armor') OR
  		(item_number = 7 and name = 'Galea Centurionis' and type = 'Helmet') OR
  		(item_number = 8 and name = 'Title of Augustus' and type = 'Position of Emperor')
  	`;
		*/
};
