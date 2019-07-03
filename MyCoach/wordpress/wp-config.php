<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'projet_wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wamq<h`^J6U7UfY:($wWapL`EEyQs1]y|5pW66*hD0~g)[q&aW1o&F;|Fn/;!i#]' );
define( 'SECURE_AUTH_KEY',  'X6A`P  ]aEYwYvxa]:8~Fn`diQ;u.TU|i:sslxh$0RzIp+V]pXyYy&u$H;K_BW;J' );
define( 'LOGGED_IN_KEY',    'ks!{L{^GAI8G~I=kEO$(5}R`sUjz`yk(/(PCCI^ @33(gx!-IS%ahld^j/)wd@, ' );
define( 'NONCE_KEY',        'yZ+C@:k =YQ-d| 3YI$k:3),<xBu%xgE+)S;[cA$p|]|{k9c8&2~0DA9vQrpgHI9' );
define( 'AUTH_SALT',        '1]fzY/P$mLH5ZOAG<pN8:`&ws+[0t/G^*&ZG[K)xCKHyAjT&jMQzQ)AHkBhX(%A[' );
define( 'SECURE_AUTH_SALT', 'wtjrLD(dR]=Y3`vav(WpG#;R9 *i=}Th5fk{yx{+xu>Y^IYm:{Yi2+Q.5Va<l549' );
define( 'LOGGED_IN_SALT',   'eK)b+{x?#J[{To~_`:jb[y?DFX!RuFNjqVaK]y%hvD-P`ue6|[ez}FMT3Fv`X]TR' );
define( 'NONCE_SALT',       '5#NtEW6D1W~A-Do[CRg-GtYIz<7JBF`m%QGx/27F6Eg}q6Y%:XvBn!E#X_+b%#}s' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
