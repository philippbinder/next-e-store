// This will insert items into the table arsenal
const arsenal = [
  {
    number: 1,
    name: 'Gladius',
    description:
      // 'The Gladius is the trusted weapon of every legionary. Combined with the Scutum it makes for a deadly weapon, striking out at the barbarians from the cover of the Scutum. They never see it coming. If you find yourself cornered by some barbarian filth, you can also rely on your trusted Gladius, since it also makes for a good slashing weapon. Truly, roma invicta!',
      '',
    type: 'Sword',
    image: '',
  },
  {
    number: 2,
    name: 'Scutum',
    description: 'Test',
    type: 'Shield',
    image: '../public/images/scutum.png',
    // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Firongatearmory.com%2Fwp-content%2Fuploads%2F2011%2F04%2FAH3853L-Classical-Roman-Scutum.jpg&f=1&nofb=1',
  },
  { number: 3, name: 'Pilum', description: 'ss', type: 'Javelin', image: '' },
  {
    number: 4,
    name: 'Aquila',
    description: 'ss',
    type: 'Military Standard',
    image: '',
  },
  {
    number: 5,
    name: 'Lorica Hamata',
    description: 'ss',
    type: 'Armor',
    image: '',
  },
  {
    number: 6,
    name: 'Lorica Segmentata',
    description: 'ss',
    type: 'Armor',
    image: '',
  },
  {
    number: 7,
    name: 'Galea Centurionis',
    description: 'ss',
    type: 'Helmet',
    image: '',
  },
  {
    number: 8,
    name: 'Title of Augustus',
    description: 'aas',
    type: 'Position of Emperor',
    image: '',
  },
  {
    number: 9,
    name: 'adsadsad',
    description: 'sssss',
    type: 'aaaadasds',
    image: '',
  },
];

exports.up = async function up(sql) {
  console.log('Inserting items into arsenal...');

  for (const item of arsenal) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO arsenal
				(number, name, type, description, image)
			VALUES
				(${item.number}, ${item.name}, ${item.type}, ${item.description}, ${item.image});
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
