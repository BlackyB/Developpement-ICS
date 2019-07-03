<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset=utf-8>
	<meta name=description content="<?php echo get_bloginfo( 'description' ); ?>">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<title><?php echo get_bloginfo( 'name' ); ?></title>
	<?php echo wp_site_icon(); ?>
	<link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory'); ?>/style.css">
</head>
<body>
	<header class="blog-header padding-20 col justify-center">
		<h1 class="blog-title m-auto"><a href="<?php echo get_bloginfo( 'wpurl' );?>"><?php echo get_bloginfo( 'name' ); ?></a></h1>
		<!-- <span class="m-auto"><?php echo get_custom_logo(); ?></span> -->
		<p class="blog-description m-auto"><?php echo get_bloginfo( 'description' ); ?></p>
		<nav class="blog-nav row w-75 m-auto justify-around">
			<?php wp_nav_menu(); ?>
		</nav>
	</header>
</body>

