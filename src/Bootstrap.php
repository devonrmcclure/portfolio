<?php declare(strict_types=1);

namespace DMPortfolio;

require __DIR__ . '/../vendor/autoload.php';

error_reporting(E_ALL);

$environment = 'development';
$request = new \Http\HttpRequest($_GET, $_POST, $_COOKIE, $_FILES, $_SERVER);
$response = new \Http\HttpResponse;

/**
 * Register the error handler
 */
$whoops = new \Whoops\Run;
if ($environment !== 'production') {
	$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
} else {
	$whoops->pushHandler(function ($e) {
		echo 'Todo: Friendly error page and send an email to the developer';
	});
}
$whoops->register();

/**
 * Use the router.
 */
\DMPortfolio\Router::run();