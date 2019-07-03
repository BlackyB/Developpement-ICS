<?php get_header(); ?>

<div class="row justify-around">
	<div class="blog-main w-100 padding-20">
		<?php
		if ( have_posts() ) : while ( have_posts() ) : the_post();
			get_template_part( 'content', get_post_format() );
		endwhile; endif;
		?>
	</div>
</div>

<?php get_footer(); ?>