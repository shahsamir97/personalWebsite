<?php
require_once "google-api-php-client-2.2.3/vendor/autoload.php";

//init configuration
$clientID = "247582910439-a9d4h5urdl0q12shnn2coqovq09s4mke.apps.googleusercontent.com";
$clientSecret = "247582910439-a9d4h5urdl0q12shnn2coqovq09s4mke.apps.googleusercontent.com";
$redirectUri = "	http://localhost:63342/untitled1/Google-callback.php";

//Create client request to access Google API
$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");

// authenticate code from Google OAuth Flow
if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token['access_token']);

    // get profile info
    $google_oauth = new Google_Service_Oauth2($client);
    $google_account_info = $google_oauth->userinfo->get();
    $email =  $google_account_info->email;
    $name =  $google_account_info->name;

    // now you can use this profile info to create account in your website and make user logged in.
}

