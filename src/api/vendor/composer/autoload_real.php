<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit288ea0515ad83a53f8c46adcd2b2c9ec
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInit288ea0515ad83a53f8c46adcd2b2c9ec', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit288ea0515ad83a53f8c46adcd2b2c9ec', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit288ea0515ad83a53f8c46adcd2b2c9ec::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
