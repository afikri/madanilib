## About API

### Using JWT Laravel for SPA authentication
Steps to do
- install jwt: composer require tymon/jwt-auth:^1.0
- publish jwt: php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
- generate jwt key: php artisan jwt:secret
- configure guard api inside file config/auth.php
add this     
'api' => [
        'driver' => 'jwt',
        'provider' => 'users',
    ],
- configure user Model
- add restful API authentication 
    - create single action controller:
        Register controller
        php artisan make:controller Api/RegisterController -i
        Login controller
        php artisan make:controller Api/LoginController -i
        Logout controller
    - test the result with thunderclient
