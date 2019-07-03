<?php get_header(); ?>

<div class="row justify-around">
	<div class="blog-main col txt-justify w-75 padding-20">
		<?php
		if ( have_posts() ) : while ( have_posts() ) : the_post();
			get_template_part( 'content', get_post_format() );
		endwhile; endif;
		?>
	</div>
	<div class="blog-side txt-justify w-25 padding-20">
		<?php get_sidebar(); ?>
	</div>
</div>

<?php get_footer(); ?>