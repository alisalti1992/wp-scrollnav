<?php

/**
 * Plugin Name:       Scrollnav for WordPress
 * Plugin URI:        https://github.com/moveaheadmedia/wp-scrollnav/
 * Description:       It will add class active to the top-menu item using page scroll ex: #home #about-us
 * Version:           1.0.0
 * Requires at least: 5.5
 * Requires PHP:      5.6
 * Author:            Ali Sal
 * Author URI:        https://github.com/moveaheadmedia/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/moveaheadmedia/wp-scrollnav/
 * Text Domain:       wp-scrollnav
 */

add_action('wp_enqueue_scripts', 'wp_scrollnav_scripts');

function wp_scrollnav_scripts()
{
    wp_enqueue_script( 'wp_scrollnav', plugin_dir_url( __FILE__ ) . '/wp_scrollnav.js', array('jquery'), '1.0.0' );
}
