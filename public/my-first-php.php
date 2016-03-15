<?php
$greeting = 'Hello';
$name = 'James';
$message = $greeting . ' ' . $name;
var_dump($message);
$message = "{$greeting} {$name}";
var_dump($message);
echo $message;
echo "\n";

$names = [
		'Chris',
		'Mars',
		'Keith',
		'Bernie',
		'Rachael'
];

// foreach ($names as $studentName) {
foreach ($names as $index => $studentName) {
	if ($index ==1) {
	echo "{$greeting} {$studentName}\n";
	} else {
	echo "{$greeting} {$studentName}\n";
	}	
}

function echoName($greeting, $name)
{
	echo"{$greeting} {$name}\n";
}
echoName("Hola", $names[0]);

// echo 'Shut up ' . $names[1];

// echo "\n";

// echo 'I have ' . count($names);

$names[] = 'Boris';
var_dump($names);

$student = [
	'first_name' => 'Kate',
	'last_name' => 'McKaterson',
	'cohort' => 'Balboa'
];

$student['is_awesome'] = true;

echo "Hello " . $student['first_name'] . ' ' . $student['last_name'];

var_dump($student);
?>
<?php include '../templates/header.php' ?>
<ul>
<?php foreach ($names as $studentName) : ?>
	<li><?php  echo $studentName ?></li>
	<li><?= $studentName ?></li> <!-- does same thing as first list item use this to display data on screen -->
	<?php endforeach; ?> <!-- //when including php within html you need to end php if, while...// -->
</ul>
<?php include '../templates/footer.php' ?>