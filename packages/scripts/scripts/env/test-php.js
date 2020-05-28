/**
 * External dependencies
 */
const { execSync } = require( 'child_process' );
const { env } = require( 'process' );

/**
 * Internal dependencies
 */
const { getArgsFromCLI } = require( '../../utils' );

const args = getArgsFromCLI();

const localDir = env.LOCAL_DIR || 'src';

// Run PHPUnit with the working directory set correctly.
execSync(
	`npm run test:php -- -c /var/www/${ localDir }/wp-content/plugins/${ env.npm_package_wp_env_plugin_dir }/phpunit.xml.dist ` +
		args.join( ' ' ),
	{ cwd: env.WP_DEVELOP_DIR, stdio: 'inherit' }
);
