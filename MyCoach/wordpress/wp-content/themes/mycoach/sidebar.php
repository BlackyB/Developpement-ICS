<section class="col">
<h4>Archives</h4>
<ol class="list-unstyled">
	<?php wp_get_archives( 'type=monthly' ); ?>
</ol>

<h4>About</h4>
<p><?php the_author_meta( 'description' ); ?> </p>

</section>