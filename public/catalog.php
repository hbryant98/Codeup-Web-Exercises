<?php include '../templates/header.php' ?>
	<h3> This is my catalog of the top movies of all time!</h3>
	<ul>
		<?php include '../items.php' ?>
		<?php foreach ($movies as $title) : ?>
		<li><?php  echo $title ?></li>

		<?php endforeach; ?> 
	</ul>	

<?php include '../templates/footer.php' ?>