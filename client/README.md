# JobMonitoring

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
`ng build --prod`
filezilla transfer and rename dist > html
sudo rm -rf /var/www/html
sudo mv /home/pi/www/html /var/www/html

sudo nano  /etc/apache2/sites-available/angular.conf

<VirtualHost 192.168.77:80>
        ServerAdmin leo.meyniel@gmail.com
        ServerName jobmonitor.com
        ServerAlias www.jobmonitor.com
        DocumentRoot /var/www/html/dist/
        <Directory />
                Options FollowSymLinks
                AllowOverride All
        </Directory>

        <Directory /var/www/html/dist/>
                Options Indexes FollowSymLinks MultiViews
                AllowOverride All
                Order allow,deny
                allow from all
        </Directory>
</VirtualHost>



sudo nano /etc/hosts

127.0.0.1       localhost
::1             localhost ip6-localhost ip6-loopback
ff02::1         ip6-allnodes
ff02::2         ip6-allrouters

127.0.1.1       raspi
192.168.1.77    jobmonitor.com
