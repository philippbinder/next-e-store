// This will insert items into the table arsenal
const arsenal = [
  {
    // number: 1,
    name: 'Gladius',
    description:
      'The Gladius. A legionaries trusted stabbing and slashing weapon. Said to be moddled after the celtic swords and adopted and perfected for roman purposes. Kept short to hide it behind the Scutum to make it impossible for the enemy to see at which heigth attack was coming from.',
    type: 'Sword',
    price: 1500,
  },
  {
    // number: 2,
    name: 'Scutum',
    description:
      'The Scutum was a huge shield made out of wood and glued together to achieve a curved shape. It was so large, that it could almost shield an entire legionary when he had his sword drawn and protect him from close range attacks and projectiles like arrows or stones. It also enabled the famous Testudo. A formation that made the roman cohort nearly invincible to projectiles and also offered good protection against cavalry charges, all the while while the legionaries continued to advance on the enemy lines.',
    type: 'Shield',
    price: 500,
  },
  {
    // number: 3,
    name: 'Pilum',
    description:
      'The Pilum was a javelin not meant to kill the enemy, but to disrupt his formations and render the shields of the first enemy line (if you can even call the barbarian front line a line) useless. It could also be used somewhat as a spear to fight off enemy cavalry.',
    type: 'Javelin',
    price: 200,
  },
  {
    // number: 4,
    name: 'Aquila',
    description: `The pride of every legion, it's military standard, it's own roman eagle, the Aquila. The soldier who carried was the so called Aquilifer (the eagle barrier) and was respected by his fellow soldiers in the legion. The Aquilifer was a highly respected position within in the legion and therefore exempted from menial tasks like building roads or digging the latrine.
    The loss of it's eagle was a devestating blow for each legion and (a political) reason to strike back at the enemy to retrieve it and restore Romes glory. `,
    type: 'Military standard',
    price: 50000,
  },
  {
    // number: 5,
    name: 'Lorica Hamata',
    description:
      'The Lorica Hamata was used for six centuries and was a mail armor made by interlocking metal rings. While not as good as the more expensive Lorica Hamata in terms of protection, it was more affordable and you could put it on much faster than the Lorica Segmentata.',
    type: 'Armor',
    price: 2000,
  },
  {
    // number: 6,
    name: 'Lorica Segmentata',
    description: `The famous and iconic Lorica Segmentata was the pinnacle of ancient world body armor. Made out of metal strips that were layered above each other and within each other. It was much more expensive than the Lorica Hamata and used only for 300 to 400 years. It also took around 40 minutes to put on and became a liability in it's later years of usage due to many and quick raiding attacks by romes enemies. Nonetheless, once equipped, nothing could compare to it in it's time and most slashing or stabbing weapons could penetrate this armor. A stabbing attack with a blade could only be successful if it aligned at right angles and slipped through a gap bewteen two stripes.`,
    type: 'Armor',
    price: 8000,
  },
  {
    // number: 7,
    name: 'Galea Centurionis',
    description: `The classic helemet of a Centurion, a field officer to lead his centurion (100 men, later 80 men) and enforce discipline and respect. These men lead their soldiers from the frontline and wore helemts that made them easily distinguishable from a regular soldier.There was a saying in the roman legions that the soldiers wouldn't run from the enemy if they feared the man behind them more than the men infront of them. A strategy that seems to have worked, sicne the Roman Army was known as the most disciplined in it's time. Even going so far as executing every tenth man of their own army if discipline failed on the battlefield.`,
    type: 'Helmet',
    price: 1000,
  },
  {
    // number: 8,
    name: 'Ballista',
    description:
      'The Ballista was a field and also siege artillery not only but also used by the Romans. It fired stones across the battlefield to smash the enemy lines into pieces. And it did.',
    type: 'Field artillery',
    price: 10000,
  },
  {
    // number: 9,
    name: 'Title of Augustus',
    description:
      'Special offer from our friends from the Preatoriani - the Praetorian Guard. Become emperor yourself and reign over the Roman Empire! High donations to the Praetorian Guard are expected and if not granted, may result in an early death. Bribe today and reign tomorrow!',
    type: 'Position of Emperor',
    price: 1000000,
  },
];

exports.up = async function up(sql) {
  console.log('Inserting items into arsenal...');

  for (const item of arsenal) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO arsenal
				(name, type, description, price)
			VALUES
				(${item.name}, ${item.type}, ${item.description}, ${item.price});
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
				name = ${item.price} AND name = ${item.name} AND type = ${item.type} AND description = ${item.description} AND price = ${item.price};
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
