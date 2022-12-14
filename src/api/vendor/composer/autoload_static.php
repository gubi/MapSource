<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit288ea0515ad83a53f8c46adcd2b2c9ec
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Misd\\Linkify\\' => 13,
            'Michelf\\' => 8,
        ),
        'K' => 
        array (
            'Klein\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Misd\\Linkify\\' => 
        array (
            0 => __DIR__ . '/..' . '/misd/linkify/src/Misd/Linkify',
        ),
        'Michelf\\' => 
        array (
            0 => __DIR__ . '/..' . '/michelf/php-markdown/Michelf',
        ),
        'Klein\\' => 
        array (
            0 => __DIR__ . '/..' . '/klein/klein/src/Klein',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit288ea0515ad83a53f8c46adcd2b2c9ec::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit288ea0515ad83a53f8c46adcd2b2c9ec::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit288ea0515ad83a53f8c46adcd2b2c9ec::$classMap;

        }, null, ClassLoader::class);
    }
}
