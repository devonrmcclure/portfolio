<?php declare(strict_types=1);

namespace DMPortfolio;

final class Router
{
	private const VALID_ROUTES = [
		'/',
		'/about'
	];

	static $route = '';

	static public function run()
	{
		Router::getRoute();
		Router::loadView();
	}

	static private function getRoute()
	{
		if($_SERVER['REQUEST_METHOD'] != 'GET') {
			header($_SERVER["SERVER_PROTOCOL"] . " 405 Method Not allowed", true, 405);
			echo 'Method Not Allowed';
			return false;
		}

		Router::$route = $_SERVER['REQUEST_URI'] == '/' ? 'index' : $_SERVER['REQUEST_URI'];
	}

	static private function routeIsValid()
	{
		if (!in_array($_SERVER['REQUEST_URI'], Router::VALID_ROUTES)) {
			return false;
		}

		return true;
	}

	static private function loadView()
	{
		if(Router::routeIsValid()) {
			include('views/' . str_replace('/', '', Router::$route) . '.php');
		} else {
			header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
			echo 'Not Found';
		}
	}
}